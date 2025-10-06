require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { google } = require('googleapis');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const sessions = new Map();

function getSheetsClient() {
  const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!credentialsJson) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_JSON in env');
  }
  const credentials = JSON.parse(credentialsJson);
  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
  const auth = new google.auth.JWT(
    credentials.client_email,
    undefined,
    credentials.private_key,
    scopes
  );
  return google.sheets({ version: 'v4', auth });
}

app.post('/api/session', (req, res) => {
  const { fullname, age, phone, email } = req.body || {};
  if (!fullname || !phone || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const id = uuidv4();
  sessions.set(id, {
    id,
    lead: { fullname, age: age ?? null, phone, email },
    createdAt: Date.now(),
    score: null,
    answers: null
  });
  res.json({ sessionId: id });
});

app.get('/api/questions', async (req, res) => {
  try {
    const sheets = getSheetsClient();
    const spreadsheetId = process.env.SHEETS_QUESTIONS_SPREADSHEET_ID;
    const range = process.env.SHEETS_QUESTIONS_RANGE || 'Questions!A2:F';
    const { data } = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range
    });
    // Expect columns: id | type | question | optionA | optionB | optionC | optionD | correct | audioUrl(optional)
    const rows = data.values || [];
    const questions = rows
      .filter(r => r[2])
      .slice(0, 20)
      .map((r, idx) => ({
        id: r[0] || String(idx + 1),
        type: r[1] || 'mcq',
        question: r[2],
        options: [r[3], r[4], r[5], r[6]].filter(Boolean),
        correct: r[7],
        audioUrl: r[8] || null
      }));
    res.json({ questions });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

app.post('/api/submit', async (req, res) => {
  try {
    const { sessionId, answers } = req.body || {};
    const session = sessions.get(sessionId);
    if (!session) return res.status(400).json({ error: 'Invalid session' });

    const sheets = getSheetsClient();
    const spreadsheetId = process.env.SHEETS_QUESTIONS_SPREADSHEET_ID;
    const range = process.env.SHEETS_QUESTIONS_RANGE || 'Questions!A2:F';
    const { data } = await sheets.spreadsheets.values.get({ spreadsheetId, range });
    const rows = data.values || [];
    const questions = rows
      .filter(r => r[2])
      .slice(0, 20)
      .map((r, idx) => ({ id: r[0] || String(idx + 1), correct: r[7] }));

    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const userAnswer = answers?.[q.id];
      if (userAnswer && q.correct && String(userAnswer).trim().toUpperCase() === String(q.correct).trim().toUpperCase()) {
        score += 1;
      }
    }

    session.score = score;
    session.answers = answers || {};

    // Append to another sheet for submissions
    const resultsSpreadsheetId = process.env.SHEETS_RESULTS_SPREADSHEET_ID || spreadsheetId;
    const resultsRange = process.env.SHEETS_RESULTS_RANGE || 'Results!A2:F';
    const nowIso = new Date().toISOString();
    await sheets.spreadsheets.values.append({
      spreadsheetId: resultsSpreadsheetId,
      range: resultsRange,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          nowIso,
          session.lead.fullname,
          session.lead.age ?? '',
          session.lead.phone,
          session.lead.email,
          score
        ]]
      }
    });

    res.json({ score, total: questions.length });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to submit results' });
  }
});

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
