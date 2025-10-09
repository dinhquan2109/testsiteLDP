# 🔄 HƯỚNG DẪN CẬP NHẬT DATABASE

## ⚠️ QUAN TRỌNG
Phần 2 đã được đổi từ **trắc nghiệm** sang **điền đáp án**!

Bạn cần **XÓA DỮ LIỆU CŨ** và **CHẠY LẠI SQL MỚI**.

---

## 📋 CÁC BƯỚC THỰC HIỆN

### Bước 1: Mở Supabase SQL Editor
1. Đăng nhập vào [Supabase](https://supabase.com)
2. Chọn project của bạn
3. Click vào **SQL Editor** (biểu tượng </> ở menu bên trái)
4. Click **+ New query**

---

### Bước 2: XÓA DỮ LIỆU CŨ (HSK 1 & 2)

```sql
-- Xóa dữ liệu cũ HSK 1 và HSK 2
DELETE FROM questions WHERE order_number BETWEEN 1 AND 22;

-- Kiểm tra đã xóa chưa
SELECT COUNT(*) FROM questions WHERE order_number BETWEEN 1 AND 22;
-- Kết quả phải là: 0
```

**Click nút RUN** ▶️

---

### Bước 3: CHẠY FILE SQL MỚI

1. Mở file `setup_database_full.sql`
2. **Copy TOÀN BỘ** nội dung (Ctrl+A, Ctrl+C)
3. Quay lại Supabase SQL Editor
4. **Paste** vào (Ctrl+V)
5. **Click RUN** ▶️

**Chờ 5-10 giây để hoàn tất.**

---

### Bước 4: KIỂM TRA DỮ LIỆU MỚI

```sql
-- Kiểm tra tổng số câu hỏi
SELECT COUNT(*) FROM questions;
-- Kết quả phải là: 22 (HSK 1: 11 câu + HSK 2: 11 câu)

-- Kiểm tra phần 2 KHÔNG CÓ options
SELECT 
  order_number, 
  question_text,
  option_a,  -- Phải NULL
  option_b,  -- Phải NULL
  option_c,  -- Phải NULL
  correct_answer,
  section
FROM questions 
WHERE section = 'reading'
ORDER BY order_number;

-- Kết quả:
-- order_number 6, 7, 8, 9, 10: option_a/b/c = NULL ✅
-- order_number 17, 18, 19, 20, 21: option_a/b/c = NULL ✅
```

**Click RUN** ▶️

---

### Bước 5: KIỂM TRA PHẦN 1 (Listening) VẪN CÓ OPTIONS

```sql
SELECT 
  order_number, 
  question_text,
  option_a,  -- Phải CÓ GIÁ TRỊ
  option_b,  -- Phải CÓ GIÁ TRỊ
  option_c,  -- Phải CÓ GIÁ TRỊ
  correct_answer,
  section
FROM questions 
WHERE section = 'listening'
ORDER BY order_number;

-- Kết quả:
-- order_number 1, 2, 3, 4, 5: option_a/b/c = CÓ TEXT ✅
-- order_number 12, 13, 14, 15, 16: option_a/b/c = CÓ TEXT ✅
```

---

### Bước 6: UPLOAD FILE AUDIO

1. Vào **Storage** trong Supabase
2. Tạo bucket tên `audio` (nếu chưa có)
3. Upload 2 file audio:
   - `hsk1_listening.mp3` (cho câu 1)
   - `hsk2_listening.mp3` (cho câu 12)

4. Copy URL của từng file

5. Cập nhật vào database:

```sql
-- Update audio URL cho HSK 1 (câu 1)
UPDATE questions 
SET audio_url = 'https://your-project.supabase.co/storage/v1/object/public/audio/hsk1_listening.mp3'
WHERE order_number = 1;

-- Update audio URL cho HSK 2 (câu 12)
UPDATE questions 
SET audio_url = 'https://your-project.supabase.co/storage/v1/object/public/audio/hsk2_listening.mp3'
WHERE order_number = 12;
```

**Thay `https://your-project.supabase.co/...` bằng URL thật của bạn!**

---

### Bước 7: KIỂM TRA CUỐI CÙNG

```sql
-- Kiểm tra audio_url đã được set chưa
SELECT order_number, audio_url 
FROM questions 
WHERE order_number IN (1, 12);

-- Kết quả:
-- order_number 1: audio_url = https://... ✅
-- order_number 12: audio_url = https://... ✅
```

---

### Bước 8: TEST TRÊN WEB

1. Mở ứng dụng web
2. **Hard refresh:** `Ctrl + Shift + R` (Windows) hoặc `Cmd + Shift + R` (Mac)
3. Điền thông tin
4. Chọn **HSK 1**
5. Click **BẮT ĐẦU**

**Kiểm tra:**
- ✅ Phần 1: Thấy 5 câu với options A/B/C (trắc nghiệm)
- ✅ Phần 2: Thấy 5 câu với ô input text (KHÔNG có options)
- ✅ Phần 3: Thấy 1 textarea lớn (tự luận)

6. Làm bài và nộp

**Kiểm tra kết quả:**
- ✅ Popup hiển thị: `X/10` (KHÔNG phải `/20`)
- ✅ Xếp loại: `HSK 1 - ...`

---

## 🚨 NẾU CÓ LỖI

### Lỗi 1: Vẫn thấy options A/B/C ở phần 2
**Nguyên nhân:** Dữ liệu cũ chưa xóa hoặc SQL mới chưa chạy

**Cách sửa:**
```sql
-- Xóa hết và chạy lại từ đầu
DELETE FROM questions;
-- Sau đó chạy lại file setup_database_full.sql
```

### Lỗi 2: Popup vẫn hiển thị 20 câu
**Nguyên nhân:** Browser cache

**Cách sửa:**
1. Hard refresh: `Ctrl + Shift + R`
2. Hoặc: Xóa cache browser
3. Hoặc: Mở **Incognito/Private** window

### Lỗi 3: Audio không phát
**Nguyên nhân:** URL sai hoặc file không public

**Cách sửa:**
1. Vào Storage → Policies
2. Tạo policy cho bucket `audio`:
```sql
CREATE POLICY "Public read audio" ON storage.objects
FOR SELECT TO public
USING (bucket_id = 'audio');
```

---

## ✅ CHECKLIST HOÀN THÀNH

- [ ] Đã xóa dữ liệu cũ HSK 1 & 2
- [ ] Đã chạy `setup_database_full.sql` mới
- [ ] Đã kiểm tra phần 2 KHÔNG có options
- [ ] Đã kiểm tra phần 1 VẪN CÓ options
- [ ] Đã upload 2 file audio
- [ ] Đã cập nhật audio_url vào database
- [ ] Đã hard refresh browser
- [ ] Đã test HSK 1 thành công
- [ ] Popup kết quả hiển thị X/10 ✅

---

## 🎉 HOÀN TẤT!

Hệ thống đã sẵn sàng với:
- ✅ Phần 1: 5 câu trắc nghiệm (A/B/C)
- ✅ Phần 2: 5 câu điền đáp án (text input)
- ✅ Phần 3: 1 câu tự luận (textarea)
- ✅ Thang điểm: 10/10

**Giờ có thể thêm HSK 3, 4, 5, 6 theo template!** 🚀

File template: `template_hsk_questions.sql`
