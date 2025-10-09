# ⚠️ LƯU Ý QUAN TRỌNG - ĐỌC TRƯỚC KHI SỬ DỤNG

## 🔧 CẤU TRÚC 3 PHẦN

### ✅ PHẦN 1: NGHE (Listening) - Câu 1-5
- **Loại:** Trắc nghiệm A/B/C
- **Có:** `option_a`, `option_b`, `option_c`, `correct_answer` (A/B/C)
- **Đặc biệt:** Câu 1 có `audio_url`, các câu 2-5 KHÔNG có

### ✅ PHẦN 2: ĐIỀN ĐÁP ÁN (Fill in the Blank) - Câu 6-10
- **Loại:** Text input (GÕ BÀN PHÍM)
- **KHÔNG có:** `option_a`, `option_b`, `option_c`
- **CHỈ có:** `question_text` và `correct_answer` (text hoặc số)
- **Đặc biệt:** Câu 6 có `reading_passage`, các câu 7-10 KHÔNG có
- **Chấm điểm:** So sánh không phân biệt HOA/thường

### ✅ PHẦN 3: VIẾT (Writing) - Câu 11
- **Loại:** Textarea (tự luận)
- **KHÔNG tính điểm:** Chỉ lưu để giáo viên review
- **Có:** Word counter tự động

---

## 📊 THANG ĐIỂM

### ⚠️ QUAN TRỌNG
```
Tổng câu: 11
Tính điểm: 10 (chỉ phần 1 + phần 2)

Phần 1 (Nghe):     5 điểm
Phần 2 (Điền):     5 điểm
Phần 3 (Viết):     0 điểm (không tính)
-----------------------------------
TỔNG:             10 điểm
```

---

## 🗄️ CẤU TRÚC DATABASE

### Bảng `questions`

```sql
CREATE TABLE questions (
  id BIGSERIAL PRIMARY KEY,
  question_text TEXT NOT NULL,
  question_type TEXT,              -- KHÔNG dùng nữa
  section TEXT,                    -- 'listening', 'reading', 'writing'
  
  -- PHẦN 1 (LISTENING) - CÓ
  option_a TEXT,
  option_b TEXT,
  option_c TEXT,
  correct_answer TEXT,             -- 'A', 'B', hoặc 'C'
  audio_url TEXT,                  -- CHỈ câu đầu tiên (1, 12, 23...)
  
  -- PHẦN 2 (FILL-IN) - KHÔNG CÓ option_a/b/c
  -- correct_answer TEXT,          -- Đáp án đúng (text/số)
  reading_passage TEXT,            -- CHỈ câu đầu tiên (6, 17, 28...)
  
  -- PHẦN 3 (WRITING)
  -- correct_answer = NULL
  
  order_number INTEGER UNIQUE NOT NULL
);
```

### Ví dụ Insert

#### Phần 1 - Listening (có options):
```sql
INSERT INTO questions (
  question_text, 
  option_a, option_b, option_c, 
  correct_answer, 
  audio_url,
  order_number, 
  section
) VALUES (
  'Họ đang nói về gì?',
  'Thời tiết',
  'Đồ ăn',
  'Du lịch',
  'A',
  'https://...audio.mp3',
  1,
  'listening'
);
```

#### Phần 2 - Fill-in (KHÔNG có options):
```sql
INSERT INTO questions (
  question_text, 
  correct_answer,      -- CHỈ CÓ correct_answer
  reading_passage,
  order_number, 
  section
) VALUES (
  'Gia đình có mấy người? (1 chữ số)',
  '4',                -- Đáp án text hoặc số
  'Đoạn văn...',
  6,
  'reading'
);
```

#### Phần 3 - Writing:
```sql
INSERT INTO questions (
  question_text, 
  order_number, 
  section,
  correct_answer      -- NULL
) VALUES (
  'Viết về gia đình...',
  11,
  'writing',
  NULL
);
```

---

## 🚨 LỖI THƯỜNG GẶP

### 1. "Đang lấy sai câu hỏi"
**Nguyên nhân:** Phần 2 vẫn có `option_a`, `option_b`, `option_c` trong database

**Cách sửa:**
```sql
-- Xóa options của phần 2
UPDATE questions 
SET option_a = NULL, 
    option_b = NULL, 
    option_c = NULL
WHERE section = 'reading';
```

### 2. "Vẫn hiển thị popup 20 câu"
**Nguyên nhân:** Browser cache

**Cách sửa:**
- Hard refresh: `Ctrl + Shift + R` (Windows) hoặc `Cmd + Shift + R` (Mac)
- Hoặc xóa cache browser

### 3. "Popup kết quả vẫn hiển thị /20"
**Nguyên nhân:** Code cũ chưa được cập nhật

**Đã sửa:** File `index.html` mới đã sửa thành `/10`

---

## ✅ CHECKLIST TRƯỚC KHI TEST

- [ ] 1. Chạy file `setup_database_full.sql` mới
- [ ] 2. Kiểm tra phần 2 KHÔNG có `option_a/b/c`:
  ```sql
  SELECT order_number, option_a, option_b, option_c 
  FROM questions 
  WHERE section = 'reading';
  -- Kết quả phải NULL, NULL, NULL
  ```
- [ ] 3. Upload file audio cho câu 1, 12 (HSK 1 & 2)
- [ ] 4. Hard refresh browser (Ctrl+Shift+R)
- [ ] 5. Test HSK 1:
  - Phần 1: Thấy options A/B/C ✅
  - Phần 2: Thấy ô input text ✅
  - Phần 3: Thấy textarea ✅
- [ ] 6. Kiểm tra kết quả hiển thị X/10 điểm ✅

---

## 📦 FILES CHÍNH

1. **`index.html`** - Code ứng dụng hoàn chỉnh
2. **`setup_database_full.sql`** - Setup database (đã sửa phần 2)
3. **`template_hsk_questions.sql`** - Template cho HSK 3-6 (đã sửa phần 2)
4. **`SUMMARY.md`** - Tổng quan hệ thống
5. **`LƯU_Ý_QUAN_TRỌNG.md`** - File này

---

## 🎯 TEST NGAY

1. Mở Supabase SQL Editor
2. Copy toàn bộ `setup_database_full.sql`
3. RUN
4. Upload 2 file audio
5. Hard refresh browser
6. Test HSK 1

**Kết quả mong đợi:**
- ✅ Phần 1: 5 câu trắc nghiệm A/B/C
- ✅ Phần 2: 5 câu điền text (KHÔNG có options)
- ✅ Phần 3: 1 câu tự luận
- ✅ Kết quả: X/10 điểm

---

## 💡 HỖ TRỢ

Nếu vẫn gặp lỗi:
1. Kiểm tra Console (F12) xem có lỗi gì
2. Kiểm tra Network tab xem câu hỏi load về có đúng không
3. Kiểm tra database xem dữ liệu có đúng format không

**Hard refresh là bước QUAN TRỌNG NHẤT!** 🚀
