-- =====================================================
-- SETUP DATABASE FOR PLACEMENT TEST - 3 SECTIONS
-- =====================================================
-- Run this in Supabase SQL Editor

-- =====================================================
-- 1. CREATE/UPDATE QUESTIONS TABLE
-- =====================================================
-- Drop existing table if you want to start fresh (CAUTION!)
-- DROP TABLE IF EXISTS questions CASCADE;

CREATE TABLE IF NOT EXISTS questions (
  id BIGSERIAL PRIMARY KEY,
  question_text TEXT NOT NULL,
  question_type TEXT,  -- Optional: 'multiple_choice', 'essay'
  section TEXT,  -- Optional: 'listening', 'reading', 'writing'
  option_a TEXT,
  option_b TEXT,
  option_c TEXT,
  correct_answer TEXT,  -- NULL for writing section
  audio_url TEXT,  -- Only for first question in listening section
  reading_passage TEXT,  -- Only for first question in reading section
  order_number INTEGER NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add columns if table already exists
-- ALTER TABLE questions ADD COLUMN IF NOT EXISTS reading_passage TEXT;
-- ALTER TABLE questions ADD COLUMN IF NOT EXISTS section TEXT;

-- =====================================================
-- 2. CREATE PLACEMENT TABLE (if not exists)
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
-- 3. CREATE TEST_RESULTS TABLE (if not exists)
-- =====================================================
CREATE TABLE IF NOT EXISTS test_results (
  id BIGSERIAL PRIMARY KEY,
  placement_id BIGINT REFERENCES placement(id) ON DELETE CASCADE,
  answers JSONB NOT NULL,
  score INTEGER NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE,
  selected_level INTEGER,  -- HSK level (1-6)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 4. ENABLE ROW LEVEL SECURITY
-- =====================================================
ALTER TABLE placement ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- 5. CREATE POLICIES FOR PUBLIC ACCESS
-- =====================================================

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow public insert placement" ON placement;
DROP POLICY IF EXISTS "Allow public select own placement" ON placement;
DROP POLICY IF EXISTS "Allow public select questions" ON questions;
DROP POLICY IF EXISTS "Allow public insert test_results" ON test_results;
DROP POLICY IF EXISTS "Allow public select own test_results" ON test_results;

-- Policy for placement table
CREATE POLICY "Allow public insert placement" ON placement
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public select own placement" ON placement
  FOR SELECT TO anon, authenticated
  USING (true);

-- Policy for questions table
CREATE POLICY "Allow public select questions" ON questions
  FOR SELECT TO anon, authenticated
  USING (true);

-- Policy for test_results table
CREATE POLICY "Allow public insert test_results" ON test_results
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public select own test_results" ON test_results
  FOR SELECT TO anon, authenticated
  USING (true);

-- =====================================================
-- 6. INSERT SAMPLE DATA - HSK 1 (order_number 1-11)
-- =====================================================

-- Clear existing data (OPTIONAL - comment out if you want to keep existing data)
-- DELETE FROM questions WHERE order_number BETWEEN 1 AND 11;

-- ========== PHẦN 1: NGHE (LISTENING) - Câu 1-5 ==========

-- Câu 1: CÓ AUDIO_URL (file audio chung cho cả 5 câu)
INSERT INTO questions (
  question_text, 
  option_a, option_b, option_c, 
  correct_answer, 
  audio_url, 
  order_number, 
  section
) VALUES (
  'Theo đoạn hội thoại, họ đang nói về chủ đề gì?',
  'Thời tiết',
  'Đồ ăn',
  'Du lịch',
  'A',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',  -- THAY ĐỔI URL NÀY
  1,
  'listening'
) ON CONFLICT (order_number) DO NOTHING;

-- Câu 2-5: KHÔNG CÓ AUDIO (dùng chung audio từ câu 1)
INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, order_number, section) VALUES
('Người đàn ông cảm thấy thế nào?', 'Vui vẻ', 'Buồn bã', 'Giận dữ', 'A', 2, 'listening'),
('Họ hẹn gặp nhau lúc mấy giờ?', '8 giờ sáng', '9 giờ sáng', '10 giờ sáng', 'B', 3, 'listening'),
('Địa điểm gặp mặt là ở đâu?', 'Nhà hàng', 'Công viên', 'Trường học', 'C', 4, 'listening'),
('Ai là người đề xuất gặp mặt?', 'Người đàn ông', 'Người phụ nữ', 'Cả hai', 'A', 5, 'listening')
ON CONFLICT (order_number) DO NOTHING;

-- ========== PHẦN 2: ĐIỀN ĐÁP ÁN (FILL IN THE BLANK) - Câu 6-10 ==========
-- ⚠️ PHẦN 2 KHÔNG CÓ OPTION A/B/C - CHỈ ĐIỀN ĐÁP ÁN TEXT

-- Câu 6: CÓ READING_PASSAGE (đoạn văn chung cho cả 5 câu)
INSERT INTO questions (
  question_text, 
  correct_answer, 
  reading_passage,
  order_number, 
  section
) VALUES (
  'Theo đoạn văn, học tiếng Trung là một quá trình như thế nào? (1 từ)',
  '有趣',
  '学习中文是一个很有趣的过程。刚开始的时候，很多人觉得中文很难，因为要学习汉字和声调。但是，如果你每天练习，你会发现中文其实不难。看电影、听音乐、和中国朋友聊天都是很好的学习方法。

(Học tiếng Trung là một quá trình rất thú vị. Lúc mới bắt đầu, nhiều người thấy tiếng Trung khó vì phải học chữ Hán và thanh điệu. Nhưng nếu bạn luyện tập mỗi ngày, bạn sẽ thấy tiếng Trung thực ra không khó. Xem phim, nghe nhạc, trò chuyện với bạn Trung Quốc đều là phương pháp học tốt.)',
  6,
  'reading'
) ON CONFLICT (order_number) DO NOTHING;

-- Câu 7-10: KHÔNG CÓ PASSAGE (dùng chung từ câu 6)
INSERT INTO questions (question_text, correct_answer, order_number, section) VALUES
('Người mới học phải học 2 thứ gì? Viết bằng tiếng Trung (2 từ, ngăn cách bằng "和")', '汉字和声调', 7, 'reading'),
('Nếu luyện tập hàng ngày, tiếng Trung sẽ như thế nào? (2 từ)', '不难', 8, 'reading'),
('Kể tên 1 phương pháp học được đề cập (tiếng Trung, 2 từ)', '看电影', 9, 'reading'),
('Mỗi ngày nên làm gì để học tốt? (tiếng Trung, 2 từ)', '练习', 10, 'reading')
ON CONFLICT (order_number) DO NOTHING;

-- ========== PHẦN 3: VIẾT (WRITING) - Câu 11 ==========

INSERT INTO questions (
  question_text, 
  order_number, 
  section,
  correct_answer  -- NULL for essay
) VALUES (
  'Viết một đoạn văn ngắn (100-150 từ) bằng tiếng Trung giới thiệu bản thân. Hãy bao gồm: tên, tuổi, quốc tịch, sở thích và lý do học tiếng Trung.',
  11,
  'writing',
  NULL
) ON CONFLICT (order_number) DO NOTHING;

-- =====================================================
-- 7. INSERT SAMPLE DATA - HSK 2 (order_number 12-22)
-- =====================================================

-- ========== PHẦN 1: NGHE (LISTENING) - Câu 12-16 ==========

INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, audio_url, order_number, section) VALUES
('Cuộc hội thoại diễn ra ở đâu?', 'Siêu thị', 'Nhà hàng', 'Bệnh viện', 'B', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', 12, 'listening')
ON CONFLICT (order_number) DO NOTHING;

INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, order_number, section) VALUES
('Họ đang làm gì?', 'Ăn tối', 'Mua sắm', 'Học bài', 'A', 13, 'listening'),
('Thời tiết hôm nay như thế nào?', 'Nắng', 'Mưa', 'Có gió', 'A', 14, 'listening'),
('Ai trả tiền?', 'Người đàn ông', 'Người phụ nữ', 'Chia đôi', 'A', 15, 'listening'),
('Họ sẽ làm gì sau đó?', 'Về nhà', 'Đi xem phim', 'Đi dạo', 'B', 16, 'listening')
ON CONFLICT (order_number) DO NOTHING;

-- ========== PHẦN 2: ĐIỀN ĐÁP ÁN (FILL IN THE BLANK) - Câu 17-21 ==========

INSERT INTO questions (question_text, correct_answer, reading_passage, order_number, section) VALUES
('Gia đình có mấy người? (1 chữ số)', '4',
'我的家庭有四个人：爸爸、妈妈、妹妹和我。爸爸是医生，妈妈是老师。妹妹今年八岁，在小学上学。我们周末常常一起去公园玩。

(Gia đình tôi có bốn người: bố, mẹ, em gái và tôi. Bố là bác sĩ, mẹ là giáo viên. Em gái năm nay 8 tuổi, đang học tiểu học. Cuối tuần chúng tôi thường cùng nhau đi công viên chơi.)',
17, 'reading')
ON CONFLICT (order_number) DO NOTHING;

INSERT INTO questions (question_text, correct_answer, order_number, section) VALUES
('Nghề của bố là gì? (tiếng Trung, 2 từ)', '医生', 18, 'reading'),
('Nghề của mẹ là gì? (tiếng Trung, 2 từ)', '老师', 19, 'reading'),
('Em gái bao nhiêu tuổi? (1 chữ số)', '8', 20, 'reading'),
('Cuối tuần họ đi đâu? (tiếng Trung, 2 từ)', '公园', 21, 'reading')
ON CONFLICT (order_number) DO NOTHING;

-- ========== PHẦN 3: VIẾT (WRITING) - Câu 22 ==========

INSERT INTO questions (question_text, order_number, section, correct_answer) VALUES
('Viết một đoạn văn (150-200 từ) mô tả một ngày trong cuộc sống của bạn. Hãy nói về các hoạt động từ sáng đến tối.',
22, 'writing', NULL)
ON CONFLICT (order_number) DO NOTHING;

-- =====================================================
-- 8. TEMPLATE CHO CÁC HSK LEVEL KHÁC (HSK 3-6)
-- =====================================================

-- HSK 3: order_number 23-33
-- HSK 4: order_number 34-44
-- HSK 5: order_number 45-55
-- HSK 6: order_number 56-66

-- Copy template trên và thay đổi:
-- - order_number
-- - audio_url (link file audio khác)
-- - reading_passage (đoạn văn khác)
-- - question_text (nội dung câu hỏi khác)
-- - Độ khó tăng dần

-- =====================================================
-- 9. VERIFY DATA
-- =====================================================
SELECT 
    'Total questions' as info, 
    COUNT(*) as count 
FROM questions;

SELECT 
    'HSK 1 (1-11)' as level, 
    COUNT(*) as count 
FROM questions 
WHERE order_number BETWEEN 1 AND 11;

SELECT 
    'HSK 2 (12-22)' as level, 
    COUNT(*) as count 
FROM questions 
WHERE order_number BETWEEN 12 AND 22;

SELECT 
    'Listening questions' as section, 
    COUNT(*) as count 
FROM questions 
WHERE section = 'listening';

SELECT 
    'Reading questions' as section, 
    COUNT(*) as count 
FROM questions 
WHERE section = 'reading';

SELECT 
    'Writing questions' as section, 
    COUNT(*) as count 
FROM questions 
WHERE section = 'writing';

SELECT 
    'Questions with audio' as type, 
    COUNT(*) as count 
FROM questions 
WHERE audio_url IS NOT NULL;

SELECT 
    'Questions with passage' as type, 
    COUNT(*) as count 
FROM questions 
WHERE reading_passage IS NOT NULL;

-- =====================================================
-- 10. SAMPLE QUERY TO GET QUESTIONS
-- =====================================================

-- Get all questions for HSK 1
SELECT * FROM questions 
WHERE order_number BETWEEN 1 AND 11 
ORDER BY order_number;

-- Get listening questions for HSK 1
SELECT * FROM questions 
WHERE order_number BETWEEN 1 AND 5 
ORDER BY order_number;

-- Get reading questions for HSK 1
SELECT * FROM questions 
WHERE order_number BETWEEN 6 AND 10 
ORDER BY order_number;

-- Get writing question for HSK 1
SELECT * FROM questions 
WHERE order_number = 11;

-- =====================================================
-- DONE! Your database is ready to use.
-- =====================================================

-- NEXT STEPS:
-- 1. Update audio_url with your real audio file URLs
-- 2. Add questions for HSK 3-6 (order_number 23-66)
-- 3. Update reading_passage with appropriate content for each level
-- 4. Test the application!
