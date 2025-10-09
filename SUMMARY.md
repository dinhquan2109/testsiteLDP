# ✅ TÓM TẮT HỆ THỐNG PLACEMENT TEST

## 🎯 CẤU TRÚC BÀI TEST

### Tổng quan:
- **3 phần:** Nghe → Đọc → Viết
- **11 câu hỏi:** 5 + 5 + 1
- **Thời gian:** 20 phút
- **Thang điểm:** 10/10 (chỉ tính Nghe + Đọc)

---

## 📊 CHI TIẾT TỪNG PHẦN

### Phần 1: NGHE (Listening) 🎧
- **Số câu:** 5 câu trắc nghiệm
- **File audio:** 1 file chung cho cả 5 câu
- **Giới hạn:** Chỉ nghe **TỐI ĐA 2 LẦN**
- **Tính điểm:** ✅ Có (mỗi câu 1 điểm)
- **Progress:** Hiển thị 5 vòng tròn (1-5)

### Phần 2: ĐỌC HIỂU (Reading) 📖
- **Số câu:** 5 câu trắc nghiệm
- **Đoạn văn:** 1 đoạn văn chung cho cả 5 câu
- **Tính điểm:** ✅ Có (mỗi câu 1 điểm)
- **Progress:** Hiển thị 5 vòng tròn (6-10)

### Phần 3: VIẾT (Writing) ✍️
- **Số câu:** 1 bài tự luận
- **Textarea:** Lớn, có đếm số từ
- **Tính điểm:** ❌ Không (chỉ lưu để giáo viên review)
- **Progress:** Hiển thị 1 vòng tròn (11)

---

## 🎓 6 TRÌNH ĐỘ HSK

User phải **chọn 1 trong 6 trình độ** trước khi bắt đầu:

| Level | Tên | Order Number | Số câu |
|-------|-----|--------------|--------|
| **HSK 1** | Cơ bản | 1-11 | 11 câu |
| **HSK 2** | Sơ cấp | 12-22 | 11 câu |
| **HSK 3** | Trung cấp thấp | 23-33 | 11 câu |
| **HSK 4** | Trung cấp | 34-44 | 11 câu |
| **HSK 5** | Trung cấp cao | 45-55 | 11 câu |
| **HSK 6** | Nâng cao | 56-66 | 11 câu |

**Mỗi level có cấu trúc giống nhau:**
- Listening: 5 câu (order x+0 đến x+4)
- Reading: 5 câu (order x+5 đến x+9)  
- Writing: 1 câu (order x+10)

---

## 💯 CÁCH TÍNH ĐIỂM

### Điểm tối đa: 10/10

**Được tính điểm:**
- ✅ Phần Nghe: 5 điểm (5 câu × 1 điểm)
- ✅ Phần Đọc: 5 điểm (5 câu × 1 điểm)

**KHÔNG tính điểm:**
- ❌ Phần Viết: 0 điểm (chỉ lưu để review)

### Kết quả hiển thị:

| Điểm | Phần trăm | Xếp loại |
|------|-----------|----------|
| 9-10 | 90-100% | HSK X - Xuất sắc |
| 7-8 | 70-89% | HSK X - Rất tốt |
| 6 | 60-69% | HSK X - Khá |
| 4-5 | 40-59% | HSK X - Trung bình |
| 0-3 | 0-39% | HSK X - Cần cải thiện |

**Ví dụ:**
- User chọn HSK 2
- Làm đúng 8/10 câu (Nghe + Đọc)
- Kết quả: **"HSK 2 - Rất tốt"** với điểm **8/10**

---

## 🔄 LUỒNG HOẠT ĐỘNG

### 1. Màn hình đăng ký
```
Nhập: Họ tên, Tuổi, SĐT, Email
     ↓
Xác nhận SĐT
     ↓
Lưu vào bảng `placement`
```

### 2. Màn hình hướng dẫn
```
Đọc hướng dẫn
     ↓
Chọn 1 trong 6 level HSK
     ↓
Click "BẮT ĐẦU"
```

### 3. Load câu hỏi
```sql
-- Query câu hỏi theo level đã chọn
SELECT * FROM questions 
WHERE order_number BETWEEN [start] AND [end]
ORDER BY order_number

-- VD: HSK 1 → order_number BETWEEN 1 AND 11
```

### 4. Làm bài test
```
Phần 1: NGHE (5 câu)
  - Nghe audio (max 2 lần)
  - Trả lời 5 câu
  - Click "Tiếp theo →"
     ↓
Phần 2: ĐỌC (5 câu)
  - Đọc đoạn văn
  - Trả lời 5 câu
  - Click "Tiếp theo →"
     ↓
Phần 3: VIẾT (1 bài)
  - Viết bài tự luận
  - Click "NỘP BÀI"
```

### 5. Chấm điểm & lưu
```javascript
// Chấm listening (5 câu)
score += listening_correct_answers

// Chấm reading (5 câu)
score += reading_correct_answers

// Lưu vào bảng test_results
{
  placement_id: xxx,
  answers: {...},
  score: 8,  // /10
  selected_level: 2  // HSK 2
}
```

### 6. Hiển thị kết quả
```
🎉 Hoàn thành bài test!
8/10
HSK 2 - Rất tốt
```

---

## 🗄️ CẤU TRÚC DATABASE

### Bảng `questions`
```sql
CREATE TABLE questions (
  id BIGSERIAL PRIMARY KEY,
  question_text TEXT NOT NULL,
  question_type TEXT,
  section TEXT,
  option_a TEXT,
  option_b TEXT,
  option_c TEXT,
  correct_answer TEXT,
  audio_url TEXT,        -- CHỈ câu 1, 12, 23, 34, 45, 56
  reading_passage TEXT,  -- CHỈ câu 6, 17, 28, 39, 50, 61
  order_number INTEGER UNIQUE NOT NULL
);
```

### Dữ liệu cần có:

**Cho mỗi HSK level:**
- ✅ 1 file audio (.mp3)
- ✅ 1 đoạn văn (text)
- ✅ 5 câu Listening
- ✅ 5 câu Reading
- ✅ 1 câu Writing

**Tổng cộng cho 6 level:**
- 66 câu hỏi
- 6 file audio
- 6 đoạn văn

---

## 📦 FILES ĐÃ TẠO

1. ✅ **`index.html`** - Code hoàn chỉnh
2. ✅ **`setup_database_full.sql`** - Setup DB với HSK 1 & 2 mẫu
3. ✅ **`template_hsk_questions.sql`** - Template cho HSK 3-6
4. ✅ **`README_DATABASE.md`** - Hướng dẫn setup DB
5. ✅ **`CẤU_TRÚC_3_PHẦN.md`** - Chi tiết cấu trúc 3 phần
6. ✅ **`HƯỚNG_DẪN_HSK.md`** - Hướng dẫn 6 level HSK

---

## 🔧 CÁCH SỬ DỤNG NGAY

### Bước 1: Setup Database
```bash
1. Mở Supabase SQL Editor
2. Copy nội dung file setup_database_full.sql
3. Paste và RUN
4. Kiểm tra: SELECT COUNT(*) FROM questions;
   → Kết quả phải là 22 (HSK 1 + HSK 2)
```

### Bước 2: Upload Audio
```bash
1. Chuẩn bị 2 file audio (cho HSK 1 và HSK 2)
2. Upload lên Supabase Storage
3. Update audio_url:
   UPDATE questions SET audio_url = 'your-url' WHERE order_number IN (1, 12);
```

### Bước 3: Test ứng dụng
```bash
1. Hard refresh browser (Ctrl+Shift+R)
2. Điền form đăng ký
3. Chọn HSK 1 hoặc HSK 2
4. Click "BẮT ĐẦU"
5. Làm bài và kiểm tra kết quả
```

---

## ✅ CHECKLIST

- [x] Form đăng ký hoạt động
- [x] Chọn HSK level (1-6)
- [x] Load đúng 11 câu theo level
- [x] Phần 1: Nghe (5 câu) với audio limit 2 lần
- [x] Phần 2: Đọc (5 câu) với đoạn văn
- [x] Phần 3: Viết (1 bài) với đếm từ
- [x] Chấm điểm đúng 10/10 (bỏ essay)
- [x] Progress circles động theo section
- [x] Lưu kết quả vào database
- [x] Hiển thị kết quả đúng format

---

## 🎉 HOÀN TẤT!

Hệ thống đã sẵn sàng với:
- ✅ 3 phần thi (Nghe - Đọc - Viết)
- ✅ 6 level HSK
- ✅ Thang điểm 10/10
- ✅ Audio limit 2 plays
- ✅ Word counter
- ✅ Backend Supabase integration

**Hard refresh browser và test thử ngay!** 🚀
