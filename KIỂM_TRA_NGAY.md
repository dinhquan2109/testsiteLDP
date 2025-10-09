# 🔍 KIỂM TRA NGAY - PHẦN 2 KHÔNG HIỂN THỊ Ô INPUT

## ⚠️ NGUYÊN NHÂN PHỔ BIẾN

### 1. CHƯA HARD REFRESH ❌
**Đây là lý do #1!**

Làm ngay:
```
Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R

Hoặc:
- Xóa cache browser
- Mở Incognito/Private window
```

---

### 2. DATABASE CHƯA ĐÚNG ❌

Kiểm tra trong Supabase SQL Editor:

#### Bước 1: Kiểm tra phần 2 có đúng format không
```sql
-- Kiểm tra câu 6-10 (phần 2 của HSK 1)
SELECT 
  order_number,
  question_text,
  option_a,  -- Phải NULL
  option_b,  -- Phải NULL
  option_c,  -- Phải NULL
  correct_answer,  -- Phải có giá trị
  reading_passage,
  section
FROM questions
WHERE order_number BETWEEN 6 AND 10
ORDER BY order_number;
```

**KẾT QUẢ MONG ĐỢI:**
- `option_a`: NULL
- `option_b`: NULL
- `option_c`: NULL
- `correct_answer`: CÓ GIÁ TRỊ (ví dụ: "有趣", "4", "医生")
- `section`: "reading"
- Câu 6 có `reading_passage`: CÓ GIÁ TRỊ (đoạn văn)
- Câu 7-10 có `reading_passage`: NULL hoặc empty

#### Bước 2: Nếu SAI, chạy lại SQL
```sql
-- XÓA dữ liệu cũ
DELETE FROM questions WHERE order_number BETWEEN 1 AND 22;

-- SAU ĐÓ: Copy toàn bộ file setup_database_full.sql và RUN
```

---

### 3. KIỂM TRA BROWSER CONSOLE

1. Mở browser
2. Nhấn **F12**
3. Vào tab **Console**
4. Chọn HSK 1, vào phần 2
5. Xem có lỗi gì màu đỏ không?

**Nếu thấy lỗi:** Chụp màn hình gửi cho tôi

---

### 4. KIỂM TRA ELEMENTS

1. Mở browser
2. Nhấn **F12**
3. Vào tab **Elements**
4. Chọn HSK 1, vào phần 2
5. Tìm class `.text-input-container`

**Nếu không tìm thấy:**
- Database sai → Quay lại Bước 2

**Nếu tìm thấy nhưng bị ẩn:**
- Xem CSS có `display: none` không
- Hard refresh lại

---

## 🔧 CÁCH SỬA NHANH

### Cách 1: Hard Refresh (90% thành công)
```bash
1. Đóng tất cả tab browser
2. Mở lại
3. Ctrl + Shift + R
4. Test lại
```

### Cách 2: Xóa cache
```bash
Chrome:
- Ctrl + Shift + Delete
- Chọn "Cached images and files"
- Clear data
- Reload page

Firefox:
- Ctrl + Shift + Delete
- Chọn "Cache"
- Clear
- Reload page
```

### Cách 3: Incognito
```bash
Chrome: Ctrl + Shift + N
Firefox: Ctrl + Shift + P

→ Mở index.html trong Incognito
→ Test
```

### Cách 4: Chạy lại SQL
```bash
1. Mở Supabase SQL Editor
2. Copy file: setup_database_full.sql
3. Paste và RUN
4. Hard refresh browser
5. Test
```

---

## 📋 CHECKLIST DEBUG

- [ ] 1. Đã hard refresh browser (Ctrl+Shift+R)
- [ ] 2. Đã kiểm tra Console (F12) - không có lỗi
- [ ] 3. Đã kiểm tra database - phần 2 không có options
- [ ] 4. Đã thử Incognito mode
- [ ] 5. Đã chạy lại setup_database_full.sql

---

## 🎯 TEST ĐƠN GIẢN

### Mở Console và chạy:
```javascript
// Kiểm tra có .text-input không
document.querySelectorAll('.text-input').length
// Nếu > 0: Có input boxes
// Nếu = 0: Không có → Database sai hoặc code không chạy
```

### Kiểm tra CSS:
```javascript
// Lấy element
const container = document.querySelector('.text-input-container');
console.log(container);
console.log(window.getComputedStyle(container).display);
// Nếu "none" → Vẫn bị ẩn
// Nếu "block" → OK
```

---

## 🚨 NẾU VẪN KHÔNG ĐƯỢC

### Gửi cho tôi:

1. **Screenshot Console (F12)**
2. **Screenshot Elements tab** (phần 2)
3. **Kết quả query SQL:**
```sql
SELECT * FROM questions WHERE order_number BETWEEN 6 AND 10;
```

4. **Thử code test này trong Console:**
```javascript
// Test 1: Check sections
console.log('Current section:', currentSection);
console.log('Reading questions:', readingQuestions);

// Test 2: Check DOM
console.log('Inputs:', document.querySelectorAll('.text-input'));
console.log('Containers:', document.querySelectorAll('.text-input-container'));

// Test 3: Check CSS
const el = document.querySelector('.text-input-container');
if (el) {
  console.log('Display:', window.getComputedStyle(el).display);
  console.log('Visibility:', window.getComputedStyle(el).visibility);
}
```

---

## ✅ HÀNH ĐỘNG NGAY

1. **ĐÓNG tất cả tab browser**
2. **MỞ lại**
3. **Hard refresh: Ctrl + Shift + R**
4. **Vào phần 2**
5. **Nhấn F12 → Console → Xem có lỗi không**

Nếu vẫn không được, làm theo checklist debug ở trên! 🔍
