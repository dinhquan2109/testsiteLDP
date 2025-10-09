# 🚀 DEPLOY NGAY - HƯỚNG DẪN NHANH

## ✅ ĐÃ SỬA 3 VẤN ĐỀ:

1. **Phần 2 không có ô input** → Thêm `!important` + inline style
2. **Mobile: HSK levels bị lòi** → Responsive 3→2→1 cột
3. **Thêm tính năng** → Click số câu để scroll

---

## 🚀 DEPLOY (5 PHÚT)

### Bước 1: Upload file (2 phút)
```bash
1. Mở hosting/server của bạn
2. Upload file index.html MỚI (ghi đè file cũ)
3. Chờ upload xong
```

### Bước 2: Clear cache (1 phút)

#### Nếu dùng Cloudflare:
```
1. Vào Cloudflare Dashboard
2. Caching → Purge Everything
3. Hoặc Purge by URL: yourdomain.com/index.html
```

#### Nếu dùng Vercel/Netlify:
```
1. Redeploy tự động
2. Hoặc manual deploy
```

#### Nếu hosting thường:
```
1. Không cần clear (hoặc check cPanel)
2. Users phải hard refresh: Ctrl+Shift+R
```

### Bước 3: Test (2 phút)

```bash
1. Mở INCOGNITO: Ctrl + Shift + N
2. Vào website của bạn
3. Kiểm tra:

   ✅ Desktop:
      - HSK levels: 3 cột đẹp
      - Phần 2: Có ô input để điền
      - Click số câu → scroll được
   
   ✅ Mobile (F12 → Toggle device):
      - HSK levels: 1 cột, không lòi
      - Phần 2: Ô input đầy đủ
      - Touch số câu → scroll
```

---

## 🔍 TEST CHI TIẾT

### Test 1: Phần 2 có ô input?
```
1. Chọn HSK 1
2. Làm hết phần 1 → Next
3. Vào phần 2
4. Thấy:
   ✅ Đoạn văn tiếng Trung
   ✅ 5 câu hỏi
   ✅ Mỗi câu có 1 ô trắng để gõ
   ✅ Placeholder: "Nhập đáp án của bạn..."
```

### Test 2: Mobile responsive?
```
1. F12 → Toggle device toolbar
2. Chọn iPhone 12 Pro
3. Vào trang chọn level
4. Thấy:
   ✅ 6 ô HSK xếp THẲNG ĐỨNG (1 cột)
   ✅ Không bị lòi ra ngoài
   ✅ Không phải scroll ngang
```

### Test 3: Click số để scroll?
```
1. Vào phần 2 (5 câu)
2. Click vào số "3"
3. Thấy:
   ✅ Tự động scroll xuống câu 3
   ✅ Câu 3 sáng màu vàng nhạt 1 giây
   ✅ Mượt mà, không giật
```

---

## 🐛 DEBUG NẾU CÓ LỖI

### Lỗi 1: Vẫn không có ô input

**Nguyên nhân:** Cache

**Fix:**
```bash
1. Thêm version vào URL: yourdomain.com?v=999
2. Hoặc: yourdomain.com/index.html?t=12345678
3. Hard refresh: Ctrl + Shift + R
4. Xóa cache browser: Ctrl + Shift + Delete
```

**Kiểm tra Console:**
```javascript
// Mở F12 → Console
// Phải thấy log:
=== RENDERING SECTION 2 (FILL IN) ===
Input boxes created: 5

// Nếu không thấy → Database sai
// Chạy SQL:
UPDATE questions 
SET option_a = NULL, option_b = NULL, option_c = NULL
WHERE order_number IN (6,7,8,9,10,17,18,19,20,21);
```

### Lỗi 2: Mobile vẫn bị lòi

**Nguyên nhân:** CSS cũ vẫn cache

**Fix:**
```bash
1. Incognito test
2. Hard refresh
3. Clear CDN cache
```

**Kiểm tra:**
```css
/* Mở F12 → Elements → .level-grid */
/* Phải thấy: */
@media (max-width: 480px) {
    .level-grid {
        grid-template-columns: 1fr;
    }
}
```

### Lỗi 3: Click số không scroll

**Nguyên nhân:** JavaScript không chạy hoặc browser cũ

**Fix:**
```bash
1. Check Console có lỗi không
2. Thử browser khác (Chrome/Firefox)
3. Update browser lên version mới
```

---

## 📱 TEST TRÊN MOBILE THẬT

### iPhone:
```
1. Mở Safari
2. Vào website
3. Test chọn level → Phải 1 cột
4. Test phần 2 → Phải có ô input
5. Touch số câu → Phải scroll
```

### Android:
```
1. Mở Chrome
2. Vào website
3. Test tương tự iPhone
```

---

## ✅ CHECKLIST DEPLOY

- [ ] **Upload:**
  - [ ] index.html đã upload
  - [ ] File size đúng (~80KB)
  - [ ] Không có lỗi upload

- [ ] **Cache:**
  - [ ] Clear CDN cache (nếu có)
  - [ ] Clear server cache (nếu có)
  - [ ] Test Incognito OK

- [ ] **Desktop:**
  - [ ] HSK levels: 3 cột
  - [ ] Phần 1: Options A/B/C
  - [ ] Phần 2: Ô input text ✅
  - [ ] Phần 3: Textarea
  - [ ] Click số → scroll ✅

- [ ] **Tablet (768px):**
  - [ ] HSK levels: 2 cột
  - [ ] Tất cả responsive OK

- [ ] **Mobile (480px):**
  - [ ] HSK levels: 1 cột ✅
  - [ ] Không lòi ra ✅
  - [ ] Phần 2: Ô input full width
  - [ ] Touch scroll OK

- [ ] **Console:**
  - [ ] Không có lỗi đỏ
  - [ ] Log phần 2 hiển thị đúng
  - [ ] Input boxes = 5

---

## 🎯 KẾT QUẢ MONG ĐỢI

### Desktop:
```
HSK Selection:
[HSK 1] [HSK 2] [HSK 3]
[HSK 4] [HSK 5] [HSK 6]

Phần 2:
Câu 6: [__________________]
Câu 7: [__________________]
Câu 8: [__________________]
Câu 9: [__________________]
Câu 10: [__________________]

Progress: (1) (2) (3) (4) (5) ← Click được!
```

### Mobile:
```
HSK Selection:
[HSK 1]
[HSK 2]
[HSK 3]
[HSK 4]
[HSK 5]
[HSK 6]

Phần 2:
Câu 6: [__________________]
Câu 7: [__________________]
...

Progress:
(1) (2) (3) (4) (5) ← Touch được!
```

---

## 🚨 QUAN TRỌNG

### Sau khi deploy:

1. **Test Incognito TRƯỚC** - Đảm bảo không bị cache
2. **Test trên mobile THẬT** - Không chỉ F12 simulator
3. **Gửi link cho bạn bè test** - Xác nhận từ user thật

### Nếu vẫn lỗi:

1. Chụp screenshot Console (F12)
2. Chụp screenshot giao diện
3. Gửi link website
4. Báo lại cho tôi!

---

## 🎉 HOÀN TẤT!

```
✅ Upload index.html
✅ Clear cache
✅ Test Incognito
✅ Test mobile
✅ Tất cả OK!

→ DEPLOY THÀNH CÔNG! 🎊
```

**Chúc bạn deploy thành công!** 🚀

---

*P/S: Nhớ test INCOGNITO để tránh cache nhé!*
