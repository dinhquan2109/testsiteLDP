-- =====================================================
-- TEMPLATE ĐỂ THÊM CÂU HỎI CHO CÁC HSK LEVEL
-- =====================================================
-- Copy template này và thay đổi các giá trị cho mỗi level

-- =====================================================
-- HSK 3 (order_number 23-33)
-- =====================================================

-- ========== PHẦN 1: NGHE - Câu 23-27 ==========

-- Câu 23: CÓ AUDIO
INSERT INTO questions (
  question_text, 
  option_a, option_b, option_c, 
  correct_answer, 
  audio_url, 
  order_number, 
  section
) VALUES (
  'Câu hỏi về đoạn audio...',  -- THAY ĐỔI
  'Đáp án A',  -- THAY ĐỔI
  'Đáp án B',  -- THAY ĐỔI
  'Đáp án C',  -- THAY ĐỔI
  'A',  -- THAY ĐỔI
  'https://your-storage.com/hsk3-listening.mp3',  -- THAY ĐỔI
  23,  -- THAY ĐỔI order_number
  'listening'
) ON CONFLICT (order_number) DO NOTHING;

-- Câu 24-27: KHÔNG CÓ AUDIO
INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, order_number, section) VALUES
('Câu hỏi 2...', 'Đáp án A', 'Đáp án B', 'Đáp án C', 'A', 24, 'listening'),
('Câu hỏi 3...', 'Đáp án A', 'Đáp án B', 'Đáp án C', 'B', 25, 'listening'),
('Câu hỏi 4...', 'Đáp án A', 'Đáp án B', 'Đáp án C', 'C', 26, 'listening'),
('Câu hỏi 5...', 'Đáp án A', 'Đáp án B', 'Đáp án C', 'A', 27, 'listening')
ON CONFLICT (order_number) DO NOTHING;

-- ========== PHẦN 2: ĐIỀN ĐÁP ÁN (FILL IN THE BLANK) - Câu 28-32 ==========
-- ⚠️ PHẦN 2 KHÔNG CÓ OPTION A/B/C - CHỈ ĐIỀN ĐÁP ÁN TEXT

-- Câu 28: CÓ READING_PASSAGE
INSERT INTO questions (
  question_text, 
  correct_answer, 
  reading_passage,
  order_number, 
  section
) VALUES (
  'Câu hỏi yêu cầu điền đáp án... (gợi ý số từ)',  -- THAY ĐỔI
  '正确答案',  -- THAY ĐỔI - Đáp án đúng bằng tiếng Trung hoặc số
  'Đoạn văn tiếng Trung ở đây...

(Bản dịch tiếng Việt ở đây...)',  -- THAY ĐỔI
  28,  -- THAY ĐỔI order_number
  'reading'
) ON CONFLICT (order_number) DO NOTHING;

-- Câu 29-32: KHÔNG CÓ PASSAGE (dùng chung từ câu 28)
INSERT INTO questions (question_text, correct_answer, order_number, section) VALUES
('Câu hỏi điền đáp án 2... (gợi ý)', '答案2', 29, 'reading'),
('Câu hỏi điền đáp án 3... (gợi ý)', '答案3', 30, 'reading'),
('Câu hỏi điền đáp án 4... (gợi ý)', '答案4', 31, 'reading'),
('Câu hỏi điền đáp án 5... (gợi ý)', '答案5', 32, 'reading')
ON CONFLICT (order_number) DO NOTHING;

-- ========== PHẦN 3: VIẾT - Câu 33 ==========

INSERT INTO questions (
  question_text, 
  order_number, 
  section,
  correct_answer
) VALUES (
  'Đề bài tự luận...',  -- THAY ĐỔI
  33,  -- THAY ĐỔI order_number
  'writing',
  NULL
) ON CONFLICT (order_number) DO NOTHING;

-- =====================================================
-- HSK 4 (order_number 34-44)
-- =====================================================
-- Copy template trên, thay đổi order_number: 34-44
-- Listening: 34-38
-- Reading: 39-43
-- Writing: 44

-- =====================================================
-- HSK 5 (order_number 45-55)
-- =====================================================
-- Copy template trên, thay đổi order_number: 45-55
-- Listening: 45-49
-- Reading: 50-54
-- Writing: 55

-- =====================================================
-- HSK 6 (order_number 56-66)
-- =====================================================
-- Copy template trên, thay đổi order_number: 56-66
-- Listening: 56-60
-- Reading: 61-65
-- Writing: 66

-- =====================================================
-- REFERENCE TABLE
-- =====================================================
/*
┌────────┬────────────────┬──────────┬──────────┬──────────┐
│ Level  │ Order Range    │ Listening│ Reading  │ Writing  │
├────────┼────────────────┼──────────┼──────────┼──────────┤
│ HSK 1  │    1-11        │   1-5    │   6-10   │    11    │
│ HSK 2  │   12-22        │  12-16   │  17-21   │    22    │
│ HSK 3  │   23-33        │  23-27   │  28-32   │    33    │
│ HSK 4  │   34-44        │  34-38   │  39-43   │    44    │
│ HSK 5  │   45-55        │  45-49   │  50-54   │    55    │
│ HSK 6  │   56-66        │  56-60   │  61-65   │    66    │
└────────┴────────────────┴──────────┴──────────┴──────────┘

Mỗi level cần:
- 1 file audio (.mp3) cho phần Listening
- 1 đoạn văn (text) cho phần Reading
- 5 câu Listening
- 5 câu Reading
- 1 câu Writing
*/

-- =====================================================
-- QUICK COPY-PASTE TEMPLATE
-- =====================================================

-- HSK 4 - LISTENING (34-38)
INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, audio_url, order_number, section) VALUES
('Câu hỏi nghe 1...', 'A', 'B', 'C', 'A', 'https://audio-url.mp3', 34, 'listening') ON CONFLICT (order_number) DO NOTHING;
INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, order_number, section) VALUES
('Câu hỏi nghe 2...', 'A', 'B', 'C', 'B', 35, 'listening'),
('Câu hỏi nghe 3...', 'A', 'B', 'C', 'A', 36, 'listening'),
('Câu hỏi nghe 4...', 'A', 'B', 'C', 'C', 37, 'listening'),
('Câu hỏi nghe 5...', 'A', 'B', 'C', 'A', 38, 'listening')
ON CONFLICT (order_number) DO NOTHING;

-- HSK 4 - READING (39-43)
INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, reading_passage, order_number, section) VALUES
('Câu hỏi đọc 1...', 'A', 'B', 'C', 'A', 'Đoạn văn...', 39, 'reading') ON CONFLICT (order_number) DO NOTHING;
INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, order_number, section) VALUES
('Câu hỏi đọc 2...', 'A', 'B', 'C', 'B', 40, 'reading'),
('Câu hỏi đọc 3...', 'A', 'B', 'C', 'A', 41, 'reading'),
('Câu hỏi đọc 4...', 'A', 'B', 'C', 'C', 42, 'reading'),
('Câu hỏi đọc 5...', 'A', 'B', 'C', 'A', 43, 'reading')
ON CONFLICT (order_number) DO NOTHING;

-- HSK 4 - WRITING (44)
INSERT INTO questions (question_text, order_number, section, correct_answer) VALUES
('Đề bài tự luận...', 44, 'writing', NULL) ON CONFLICT (order_number) DO NOTHING;

-- =====================================================
-- REPEAT FOR HSK 5 (45-55) AND HSK 6 (56-66)
-- =====================================================
