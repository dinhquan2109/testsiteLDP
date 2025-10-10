-- =====================================================
-- FIX DATABASE ERROR - selected_level
-- =====================================================

-- VẤN ĐỀ: Cột selected_level có kiểu INTEGER
--         Nhưng code đang lưu STRING ("beginner", "intermediate", "advanced")
--         → Lỗi: invalid input syntax for type integer

-- =====================================================
-- GIẢI PHÁP 1: Đổi kiểu cột thành TEXT (KHUYÊN DÙNG)
-- =====================================================

-- Kiểm tra cột hiện tại
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'test_results' 
  AND column_name = 'selected_level';

-- Đổi kiểu sang TEXT
ALTER TABLE test_results 
ALTER COLUMN selected_level TYPE TEXT;

-- Verify
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'test_results' 
  AND column_name = 'selected_level';
-- Phải thấy: text

-- =====================================================
-- GIẢI PHÁP 2: Map thành số (Nếu muốn giữ integer)
-- =====================================================

-- Nếu muốn giữ integer, sửa code JavaScript thay vì database:
-- "beginner" → 1
-- "intermediate" → 2  
-- "advanced" → 3

-- Nhưng TEXT dễ hiểu hơn, khuyên dùng giải pháp 1

-- =====================================================
-- VERIFY DATA
-- =====================================================

-- Xem dữ liệu hiện tại
SELECT 
    id, 
    placement_id, 
    selected_level, 
    score,
    completed_at 
FROM test_results 
ORDER BY completed_at DESC 
LIMIT 5;

-- Sau khi đổi sang TEXT, selected_level sẽ lưu:
-- "1-2", "3-4", hoặc "5-6"

-- =====================================================
-- TEST INSERT
-- =====================================================

-- Test insert với TEXT
INSERT INTO test_results (placement_id, answers, score, selected_level, completed_at)
VALUES (1, '{}', 8, '1-2', NOW());

-- Nếu OK → Đã sửa xong!
