-- =====================================================
-- KIỂM TRA VÀ SỬA AUDIO URL
-- =====================================================

-- 1. Kiểm tra audio URL hiện tại
SELECT 
    order_number, 
    audio_url,
    CASE 
        WHEN audio_url IS NULL THEN '❌ NULL'
        WHEN audio_url = '' THEN '❌ EMPTY'
        WHEN audio_url LIKE 'https://%.supabase.co/storage/v1/object/sign/%' THEN '⚠️ SIGNED URL (CẦN TOKEN)'
        WHEN audio_url LIKE 'https://%.supabase.co/storage/v1/object/public/%' THEN '✅ PUBLIC URL'
        ELSE '❓ UNKNOWN'
    END as url_status
FROM questions 
WHERE order_number IN (1, 12, 23, 34, 45, 56)
ORDER BY order_number;

-- =====================================================
-- VẤN ĐỀ: URL CỦA BẠN
-- =====================================================
-- URL: https://axllpuaybdzubfmsfkws.supabase.co/storage/v1/object/sign/...
--                                                               ^^^^
--                                                               SAI!
-- Đây là signed URL nhưng THIẾU TOKEN
-- Phải đổi thành PUBLIC URL

-- =====================================================
-- 2. SỬA THÀNH PUBLIC URL
-- =====================================================

-- CÁCH 1: Đổi /sign/ thành /public/
UPDATE questions 
SET audio_url = REPLACE(audio_url, '/object/sign/', '/object/public/')
WHERE order_number IN (1, 12, 23, 34, 45, 56)
  AND audio_url LIKE '%/object/sign/%';

-- CÁCH 2: Hoặc update trực tiếp với URL đúng
UPDATE questions 
SET audio_url = 'https://axllpuaybdzubfmsfkws.supabase.co/storage/v1/object/public/testsiteaudio_HSK1_2/audio_HSK_1_2.mp3'
WHERE order_number = 1;

-- =====================================================
-- 3. TEST URL MẪU (Nếu vẫn không được)
-- =====================================================

-- Dùng audio công khai để test trước:
UPDATE questions 
SET audio_url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' 
WHERE order_number = 1;

UPDATE questions 
SET audio_url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' 
WHERE order_number = 12;

-- =====================================================
-- 4. KIỂM TRA LẠI
-- =====================================================

SELECT order_number, audio_url 
FROM questions 
WHERE order_number IN (1, 12);

-- Copy URL → Paste vào browser → Phải nghe được!

-- =====================================================
-- 5. ĐẢM BẢO BUCKET PUBLIC
-- =====================================================

-- Vào Supabase Storage → Bucket Settings → Make public
-- Hoặc tạo policy:

/*
CREATE POLICY "Public read audio" 
ON storage.objects FOR SELECT 
TO public 
USING (bucket_id = 'testsiteaudio_HSK1_2');
*/

-- =====================================================
-- VERIFY
-- =====================================================

-- Test URL này trong browser:
-- https://axllpuaybdzubfmsfkws.supabase.co/storage/v1/object/public/testsiteaudio_HSK1_2/audio_HSK_1_2.mp3
-- 
-- Nếu nghe được → URL đúng
-- Nếu 404 → File không tồn tại hoặc bucket không public
