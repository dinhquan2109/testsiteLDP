-- =====================================================
-- SETUP DATABASE FOR PLACEMENT TEST
-- =====================================================
-- Run this in Supabase SQL Editor to create all tables

-- =====================================================
-- 1. CREATE PLACEMENT TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS placement (
  id BIGSERIAL PRIMARY KEY,
  fullname TEXT NOT NULL,
  age INTEGER,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 2. CREATE QUESTIONS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS questions (
  id BIGSERIAL PRIMARY KEY,
  question_text TEXT NOT NULL,
  question_type TEXT DEFAULT 'multiple_choice',
  option_a TEXT,
  option_b TEXT,
  option_c TEXT,
  correct_answer TEXT,
  audio_url TEXT,
  order_number INTEGER NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 3. CREATE TEST_RESULTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS test_results (
  id BIGSERIAL PRIMARY KEY,
  placement_id BIGINT REFERENCES placement(id) ON DELETE CASCADE,
  answers JSONB NOT NULL,
  score INTEGER NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 4. ENABLE ROW LEVEL SECURITY (Optional but recommended)
-- =====================================================
ALTER TABLE placement ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- 5. CREATE POLICIES FOR PUBLIC ACCESS
-- =====================================================

-- Policy for placement table
DROP POLICY IF EXISTS "Allow public insert placement" ON placement;
CREATE POLICY "Allow public insert placement" ON placement
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public select own placement" ON placement;
CREATE POLICY "Allow public select own placement" ON placement
  FOR SELECT TO anon, authenticated
  USING (true);

-- Policy for questions table
DROP POLICY IF EXISTS "Allow public select questions" ON questions;
CREATE POLICY "Allow public select questions" ON questions
  FOR SELECT TO anon, authenticated
  USING (true);

-- Policy for test_results table
DROP POLICY IF EXISTS "Allow public insert test_results" ON test_results;
CREATE POLICY "Allow public insert test_results" ON test_results
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public select own test_results" ON test_results;
CREATE POLICY "Allow public select own test_results" ON test_results
  FOR SELECT TO anon, authenticated
  USING (true);

-- =====================================================
-- 6. INSERT SAMPLE QUESTIONS (20 questions for full test)
-- =====================================================

-- Delete existing sample data (optional)
-- DELETE FROM questions WHERE order_number <= 20;

-- Multiple Choice Questions (1-15)
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('It''s windy outside. You should take a _______ with you.', 'multiple_choice', 'coat', 'dress', 'T-shirt', 'A', 1),
('What is the capital of China?', 'multiple_choice', 'Beijing', 'Shanghai', 'Guangzhou', 'A', 2),
('Choose the correct grammar: She _____ to school every day.', 'multiple_choice', 'go', 'goes', 'going', 'B', 3),
('Which one is a fruit?', 'multiple_choice', 'Carrot', 'Apple', 'Potato', 'B', 4),
('The opposite of "hot" is _____.', 'multiple_choice', 'warm', 'cold', 'cool', 'B', 5),
('How many days are in a week?', 'multiple_choice', '5', '6', '7', 'C', 6),
('What do you use to write?', 'multiple_choice', 'pen', 'spoon', 'fork', 'A', 7),
('The color of grass is _____.', 'multiple_choice', 'red', 'green', 'blue', 'B', 8),
('You _____ water when you are thirsty.', 'multiple_choice', 'eat', 'drink', 'cook', 'B', 9),
('A baby dog is called a _____.', 'multiple_choice', 'kitten', 'puppy', 'calf', 'B', 10),

-- Page 2 starts here
('The sun rises in the _____.', 'multiple_choice', 'west', 'north', 'east', 'C', 11),
('How many months are in a year?', 'multiple_choice', '10', '11', '12', 'C', 12),
('We use _____ to see at night.', 'multiple_choice', 'light', 'water', 'food', 'A', 13),
('The first day of the week is _____.', 'multiple_choice', 'Saturday', 'Sunday', 'Monday', 'C', 14),
('An animal that can fly is a _____.', 'multiple_choice', 'dog', 'bird', 'fish', 'B', 15);

-- Fill-in Questions (16-18)
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('What color is the sky on a clear day? (Type your answer)', 'fill_in', NULL, NULL, NULL, 'blue', 16),
('Translate "你好" to English:', 'fill_in', NULL, NULL, NULL, 'hello', 17),
('Complete: 2 + 2 = ?', 'fill_in', NULL, NULL, NULL, '4', 18);

-- Essay Questions (19-20)
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('Why do you want to learn Chinese? (Write at least 50 words)', 'essay', NULL, NULL, NULL, NULL, 19),
('Describe your future goals and how learning Chinese will help you achieve them.', 'essay', NULL, NULL, NULL, NULL, 20)
ON CONFLICT (order_number) DO NOTHING;

-- =====================================================
-- 7. VERIFY DATA
-- =====================================================
SELECT 'Total questions:' as info, COUNT(*) as count FROM questions;
SELECT 'Multiple choice:' as info, COUNT(*) as count FROM questions WHERE question_type = 'multiple_choice';
SELECT 'Fill-in questions:' as info, COUNT(*) as count FROM questions WHERE question_type = 'fill_in';
SELECT 'Essay questions:' as info, COUNT(*) as count FROM questions WHERE question_type = 'essay';

-- =====================================================
-- DONE! Your database is ready to use.
-- =====================================================
