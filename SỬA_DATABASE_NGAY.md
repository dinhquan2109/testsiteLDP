# 🔧 SỬA DATABASE - SELECTED_LEVEL

## ❌ LỖI: "invalid input syntax for type integer: 'beginner'"

### Nguyên nhân:
- Cột `selected_level` trong table `test_results` có kiểu **INTEGER**
- Code đang lưu **STRING**: "beginner", "intermediate", "advanced"
- → Conflict! Database không chấp nhận

---

## ✅ GIẢI PHÁP (2 PHÚT)

### Bước 1: Mở Supabase SQL Editor

### Bước 2: Đổi kiểu cột sang TEXT

```sql
-- Đổi kiểu từ INTEGER sang TEXT
ALTER TABLE test_results 
ALTER COLUMN selected_level TYPE TEXT;
```

Click **RUN** ▶️

### Bước 3: Verify

```sql
-- Kiểm tra đã đổi chưa
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'test_results' 
  AND column_name = 'selected_level';
```

**Phải thấy:** `data_type: text` ✅

---

## 🎯 SAU KHI SỬA

### Code sẽ lưu:
```javascript
selected_level: selectedHSK  // "1-2", "3-4", hoặc "5-6"
```

### Database sẽ nhận:
```
Row 1: selected_level = "1-2" ✅
Row 2: selected_level = "3-4" ✅
Row 3: selected_level = "5-6" ✅
```

---

## 🚀 TEST NGAY

### Bước 1: Chạy SQL (1 phút)
```sql
ALTER TABLE test_results 
ALTER COLUMN selected_level TYPE TEXT;
```

### Bước 2: Upload index.html (30 giây)
```
Upload file index.html MỚI (đã sửa selectedHSK)
```

### Bước 3: Test (2 phút)
```
1. Refresh website: Ctrl + Shift + R
2. Chọn HSK 1-2
3. Làm bài test (có thể làm nhanh)
4. Nộp bài
5. XEM CÓ LỖI KHÔNG
```

**Nếu KHÔNG có lỗi:**
→ ✅ ĐÃ FIX XONG!

**Nếu vẫn lỗi:**
→ Gửi screenshot lỗi cho tôi

---

## 📊 KIỂM TRA DỮ LIỆU

```sql
-- Xem kết quả vừa lưu
SELECT 
    id,
    placement_id,
    selected_level,  -- Phải là "1-2", "3-4", hoặc "5-6"
    score,
    completed_at
FROM test_results
ORDER BY completed_at DESC
LIMIT 5;
```

---

## 💡 NẾU MUỐN DÙNG SỐ

Nếu muốn giữ kiểu INTEGER, sửa code JavaScript:

```javascript
// Map level sang số
const levelMap = {
    'beginner': 1,
    'intermediate': 2,
    'advanced': 3
};

// Lưu vào DB
selected_level: levelMap[selectedLevel]
```

**Nhưng TEXT dễ hiểu hơn, khuyên dùng TEXT!**

---

## ✅ CHECKLIST

- [ ] Chạy SQL: ALTER TABLE ... TYPE TEXT
- [ ] Verify: data_type = text
- [ ] Upload index.html (code đã sửa selectedHSK)
- [ ] Hard refresh
- [ ] Test làm bài
- [ ] Nộp bài
- [ ] KHÔNG có lỗi ✅
- [ ] Kết quả lưu vào DB ✅
- [ ] Check data: SELECT * FROM test_results

---

## 🚨 LƯU Ý

### Nếu có dữ liệu cũ (integer):
```sql
-- Xóa dữ liệu cũ nếu cần
DELETE FROM test_results;

-- Hoặc giữ lại nhưng convert:
-- 1 → "1-2"
-- 2 → "3-4"
-- 3 → "5-6"
```

---

## 📞 LÀM NGAY

1. **Chạy SQL** (1 dòng): `ALTER TABLE test_results ALTER COLUMN selected_level TYPE TEXT;`
2. **Upload index.html**
3. **Test nộp bài**
4. **Báo kết quả**

---

**Làm và báo cho tôi nhé!** 🚀
