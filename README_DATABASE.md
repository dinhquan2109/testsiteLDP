# 🗄️ HƯỚNG DẪN SETUP DATABASE

## 📦 FILES SQL

Bạn có **2 files SQL**:

1. **`setup_database_full.sql`** - Setup database đầy đủ với ví dụ
2. **`template_hsk_questions.sql`** - Template để thêm câu hỏi cho các level còn lại

---

## 🚀 BƯỚC 1: SETUP DATABASE CƠ BẢN

### 1.1 Mở Supabase SQL Editor
1. Vào https://supabase.com
2. Chọn project của bạn
3. Click vào **SQL Editor** ở menu bên trái
4. Click **New query**

### 1.2 Run file setup_database_full.sql
1. Mở file `setup_database_full.sql`
2. **Copy toàn bộ** nội dung
3. **Paste** vào SQL Editor
4. Click **RUN** (hoặc nhấn Ctrl+Enter)

### 1.3 Kiểm tra kết quả
Nếu thành công, bạn sẽ thấy:
```
Total questions: 22
HSK 1 (1-11): 11
HSK 2 (12-22): 11
Listening questions: 4
Reading questions: 4
Writing questions: 2
```

---

## ✅ BƯỚC 2: THÊM CÂU HỎI CHO HSK 3-6

### 2.1 Sử dụng template
1. Mở file `template_hsk_questions.sql`
2. Copy phần template cho HSK 3, 4, 5, hoặc 6
3. **Thay đổi các giá trị:**
   - `question_text` - Nội dung câu hỏi
   - `option_a, option_b, option_c` - Các đáp án
   - `correct_answer` - Đáp án đúng (A, B, hoặc C)
   - `audio_url` - Link file audio của bạn
   - `reading_passage` - Đoạn văn đọc hiểu
   - `order_number` - Số thứ tự câu hỏi

### 2.2 Bảng tham chiếu order_number

| Level | Range | Listening | Reading | Writing |
|-------|-------|-----------|---------|---------|
| HSK 1 | 1-11  | 1-5       | 6-10    | 11      |
| HSK 2 | 12-22 | 12-16     | 17-21   | 22      |
| HSK 3 | 23-33 | 23-27     | 28-32   | 33      |
| HSK 4 | 34-44 | 34-38     | 39-43   | 44      |
| HSK 5 | 45-55 | 45-49     | 50-54   | 55      |
| HSK 6 | 56-66 | 56-60     | 61-65   | 66      |

---

## 🎧 BƯỚC 3: UPLOAD FILE AUDIO

### 3.1 Chuẩn bị file audio
Bạn cần **6 file audio** (.mp3):
- `hsk1-listening.mp3` - Audio cho HSK 1
- `hsk2-listening.mp3` - Audio cho HSK 2
- `hsk3-listening.mp3` - Audio cho HSK 3
- `hsk4-listening.mp3` - Audio cho HSK 4
- `hsk5-listening.mp3` - Audio cho HSK 5
- `hsk6-listening.mp3` - Audio cho HSK 6

### 3.2 Upload lên Supabase Storage
1. Vào **Storage** trong Supabase
2. Tạo bucket mới: `audio-files` (public)
3. Upload 6 file audio
4. Copy URL của từng file
5. Update vào database:

```sql
-- Update audio URL cho HSK 1
UPDATE questions 
SET audio_url = 'https://your-project.supabase.co/storage/v1/object/public/audio-files/hsk1-listening.mp3'
WHERE order_number = 1;

-- Update audio URL cho HSK 2
UPDATE questions 
SET audio_url = 'https://your-project.supabase.co/storage/v1/object/public/audio-files/hsk2-listening.mp3'
WHERE order_number = 12;

-- Làm tương tự cho HSK 3-6
```

### 3.3 Hoặc dùng URL bên ngoài
Bạn có thể dùng link audio từ:
- Google Drive (public link)
- Dropbox (public link)
- AWS S3
- Cloudinary
- Hoặc hosting riêng

---

## 📖 BƯỚC 4: KIỂM TRA DỮ LIỆU

### 4.1 Kiểm tra số lượng câu hỏi
```sql
-- Tổng số câu hỏi (phải là 66)
SELECT COUNT(*) FROM questions;

-- Số câu theo từng level
SELECT 
  CASE 
    WHEN order_number BETWEEN 1 AND 11 THEN 'HSK 1'
    WHEN order_number BETWEEN 12 AND 22 THEN 'HSK 2'
    WHEN order_number BETWEEN 23 AND 33 THEN 'HSK 3'
    WHEN order_number BETWEEN 34 AND 44 THEN 'HSK 4'
    WHEN order_number BETWEEN 45 AND 55 THEN 'HSK 5'
    WHEN order_number BETWEEN 56 AND 66 THEN 'HSK 6'
  END as level,
  COUNT(*) as count
FROM questions
GROUP BY level
ORDER BY MIN(order_number);
```

### 4.2 Kiểm tra audio và passage
```sql
-- Kiểm tra câu hỏi có audio
SELECT order_number, question_text, audio_url 
FROM questions 
WHERE audio_url IS NOT NULL;

-- Kiểm tra câu hỏi có đoạn văn
SELECT order_number, question_text, 
       LEFT(reading_passage, 50) as passage_preview 
FROM questions 
WHERE reading_passage IS NOT NULL;
```

### 4.3 Test query cho HSK 1
```sql
-- Load 11 câu hỏi cho HSK 1
SELECT * FROM questions 
WHERE order_number BETWEEN 1 AND 11 
ORDER BY order_number;
```

---

## 🔧 TROUBLESHOOTING

### ❌ Lỗi: "duplicate key value violates unique constraint"
**Nguyên nhân:** Đã tồn tại câu hỏi với order_number này

**Giải pháp:**
```sql
-- Xóa câu hỏi trùng
DELETE FROM questions WHERE order_number = 23;

-- Hoặc xóa toàn bộ range
DELETE FROM questions WHERE order_number BETWEEN 23 AND 33;
```

### ❌ Lỗi: "relation 'questions' does not exist"
**Nguyên nhân:** Chưa tạo bảng

**Giải pháp:** Run lại file `setup_database_full.sql`

### ❌ Audio không play
**Nguyên nhân:** URL không public hoặc CORS

**Giải pháp:**
- Kiểm tra URL có public không
- Nếu dùng Supabase Storage, đảm bảo bucket là public
- Check CORS settings

### ❌ Đoạn văn không hiển thị
**Nguyên nhân:** `reading_passage` bị NULL

**Giải pháp:**
```sql
-- Kiểm tra
SELECT order_number, reading_passage 
FROM questions 
WHERE order_number IN (6, 17, 28, 39, 50, 61);

-- Update nếu NULL
UPDATE questions 
SET reading_passage = 'Đoạn văn của bạn...'
WHERE order_number = 6;
```

---

## 📋 CHECKLIST HOÀN THÀNH

- [ ] Đã chạy `setup_database_full.sql`
- [ ] Bảng `questions` có 22 câu (HSK 1 & 2)
- [ ] Thêm câu hỏi cho HSK 3 (11 câu)
- [ ] Thêm câu hỏi cho HSK 4 (11 câu)
- [ ] Thêm câu hỏi cho HSK 5 (11 câu)
- [ ] Thêm câu hỏi cho HSK 6 (11 câu)
- [ ] Upload 6 file audio
- [ ] Update audio_url cho 6 level
- [ ] Viết 6 đoạn văn reading_passage
- [ ] Test từng level xem load đúng 11 câu không

---

## 🎯 TỔNG KẾT

**Database hoàn chỉnh cần:**
- ✅ **66 câu hỏi** (11 câu × 6 level)
- ✅ **6 file audio** (1 file cho mỗi level)
- ✅ **6 đoạn văn** (1 đoạn cho mỗi level)
- ✅ **3 bảng:** questions, placement, test_results
- ✅ **RLS policies** đã cấu hình

**Sau khi setup xong:**
1. Hard refresh browser (Ctrl+Shift+R)
2. Chọn HSK level
3. Click "BẮT ĐẦU"
4. Làm bài test!

---

## 📞 HỖ TRỢ

Nếu gặp vấn đề:
1. Check console (F12) xem có lỗi không
2. Kiểm tra Supabase logs
3. Verify RLS policies
4. Test query trực tiếp trong SQL Editor
