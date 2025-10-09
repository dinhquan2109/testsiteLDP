-- =====================================================
-- KIỂM TRA DATABASE CHO PHẦN 2
-- =====================================================

-- 1. KIỂM TRA TỔNG SỐ CÂU HỎI
SELECT COUNT(*) as total_questions FROM questions;
-- Kết quả mong đợi: 22 (hoặc nhiều hơn nếu đã thêm HSK 3-6)

-- 2. KIỂM TRA CÂU HỎI HSK 1 (phải có 11 câu)
SELECT COUNT(*) as hsk1_questions 
FROM questions 
WHERE order_number BETWEEN 1 AND 11;
-- Kết quả mong đợi: 11

-- 3. KIỂM TRA PHẦN 2 CỦA HSK 1 (câu 6-10)
SELECT 
  order_number,
  question_text,
  option_a,        -- Phải NULL
  option_b,        -- Phải NULL
  option_c,        -- Phải NULL
  correct_answer,  -- Phải có giá trị
  section          -- Phải là 'reading'
FROM questions
WHERE order_number BETWEEN 6 AND 10
ORDER BY order_number;

-- KẾT QUẢ MONG ĐỢI:
-- order 6:  option_a=NULL, option_b=NULL, option_c=NULL, correct_answer='有趣'
-- order 7:  option_a=NULL, option_b=NULL, option_c=NULL, correct_answer='汉字和声调'
-- order 8:  option_a=NULL, option_b=NULL, option_c=NULL, correct_answer='不难'
-- order 9:  option_a=NULL, option_b=NULL, option_c=NULL, correct_answer='看电影'
-- order 10: option_a=NULL, option_b=NULL, option_c=NULL, correct_answer='练习'

-- 4. NẾU KẾT QUẢ SAI (vẫn có option_a/b/c), CHẠY LỆNH NÀY:
/*
UPDATE questions 
SET option_a = NULL, 
    option_b = NULL, 
    option_c = NULL
WHERE order_number BETWEEN 6 AND 10;

UPDATE questions 
SET option_a = NULL, 
    option_b = NULL, 
    option_c = NULL
WHERE order_number BETWEEN 17 AND 21;
*/

-- 5. KIỂM TRA READING_PASSAGE (câu 6 phải có)
SELECT 
  order_number,
  LEFT(reading_passage, 50) as passage_preview,
  CASE 
    WHEN reading_passage IS NULL THEN 'NULL'
    WHEN reading_passage = '' THEN 'EMPTY'
    ELSE 'HAS DATA'
  END as passage_status
FROM questions
WHERE order_number IN (6, 7, 8, 9, 10);

-- KẾT QUẢ MONG ĐỢI:
-- order 6:  HAS DATA (có đoạn văn)
-- order 7:  NULL hoặc EMPTY
-- order 8:  NULL hoặc EMPTY
-- order 9:  NULL hoặc EMPTY
-- order 10: NULL hoặc EMPTY

-- 6. KIỂM TRA PHẦN 1 VẪN CÓ OPTIONS (câu 1-5)
SELECT 
  order_number,
  CASE 
    WHEN option_a IS NOT NULL THEN 'HAS OPTIONS'
    ELSE 'NO OPTIONS'
  END as options_status,
  section
FROM questions
WHERE order_number BETWEEN 1 AND 5;

-- KẾT QUẢ MONG ĐỢI: Tất cả phải là 'HAS OPTIONS'

-- 7. NẾU TẤT CẢ SAI, XÓA VÀ CHẠY LẠI:
/*
DELETE FROM questions WHERE order_number BETWEEN 1 AND 22;
-- SAU ĐÓ: Copy file setup_database_full.sql và RUN
*/
