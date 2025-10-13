# ✅ ĐÃ SỬA HEADER THEO CODE MỚI!

## 🎨 THAY ĐỔI

### 1. Logo (Từ text → Image)

**Trước:**
```html
<div class="logo">Aloha</div>
```

**Sau:**
```html
<div class="logo">
    <img src="https://via.placeholder.com/150x50/00a8cc/ffffff?text=ALOHA" alt="Aloha Logo">
</div>
```

**⚠️ THAY ĐỔI URL LOGO:**
```html
<!-- Thay URL này bằng logo thật của bạn -->
<img src="LINK_LOGO_CỦA_BẠN.png" alt="Aloha Logo">
```

---

### 2. Support Buttons (1 → 3 buttons)

**Trước:**
```html
<button class="support-btn">Hỗ trợ khẩn cấp</button>
```

**Sau:**
```html
<div class="support-buttons">
    <a href="https://zalo.me/ZALO_OA_ID" class="support-btn zalo">
        📱 Zalo OA
    </a>
    <a href="tel:02486857468" class="support-btn phone">
        📞 024.6885.7468
    </a>
</div>
```

**⚠️ THAY ĐỔI ZALO OA ID:**
```html
<!-- Thay ZALO_OA_ID bằng ID thật -->
<a href="https://zalo.me/1234567890" ...>
```

---

### 3. Màu sắc buttons

#### Zalo OA (Xanh dương):
```css
.support-btn.zalo {
    background: #0068ff;
    color: white;
}
```

#### Phone (Xanh lá):
```css
.support-btn.phone {
    background: #4caf50;
    color: white;
}
```

---

### 4. Hero Banner

**Cập nhật text:**
```html
<span class="easy">Bài thi đánh giá đầu vào</span><br>
<span class="placement">TIẾNG TRUNG HSK</span>
<div class="hero-subtitle">PLACEMENT TEST</div>
```

---

### 5. Info Section

**Cập nhật nội dung:**
- Bài thi Đánh giá năng lực Tiếng Trung
- Aloha HSK
- Hotline: 024.6885.7468
- Zalo OA: Aloha School

---

## 🔗 CẦN THAY ĐỔI

### 1. Logo Image (Dòng ~1805)

Tìm:
```html
<img src="https://via.placeholder.com/150x50/00a8cc/ffffff?text=ALOHA"
```

Thay bằng:
```html
<img src="/path/to/your/logo.png" alt="Aloha Logo">
```

**Hoặc upload logo lên Supabase Storage:**
```
1. Vào Supabase Storage
2. Upload logo.png
3. Copy URL
4. Thay vào src="..."
```

---

### 2. Zalo OA Link (Dòng ~1807)

Tìm:
```html
<a href="https://zalo.me/ZALO_OA_ID"
```

Thay bằng:
```html
<a href="https://zalo.me/1234567890" 
<!-- Hoặc link OA thật của bạn -->
```

**Lấy link Zalo OA:**
```
1. Vào Zalo OA của bạn
2. Settings → Thông tin
3. Copy link hoặc OA ID
4. Format: https://zalo.me/[OA_ID]
```

---

## 📱 RESPONSIVE

### Desktop:
```
┌────────────────────────────────────────┐
│ [LOGO]      [📱 Zalo OA] [📞 Phone]   │
└────────────────────────────────────────┘
```

### Mobile:
```
┌────────────────────┐
│      [LOGO]        │
│  [📱 Zalo OA]      │
│  [📞 Phone]        │
└────────────────────┘
```

---

## 🎯 GIAO DIỆN MỚI

```
Header:
┌──────────────────────────────────────────┐
│ [ALOHA LOGO]              [SUPPORT]      │
│                    [📱 Zalo] [📞 Phone]   │
└──────────────────────────────────────────┘

Hero:
┌──────────────────────────────────────────┐
│  Bài thi đánh giá đầu vào                │
│  TIẾNG TRUNG HSK                          │
│  [PLACEMENT TEST]                         │
└──────────────────────────────────────────┘

Info:
- Bài thi gồm 3 kỹ năng
- Liên hệ: 024.6885.7468
- Zalo OA: Aloha School
```

---

## 📦 FILES

- **index.html** (113KB) - Đã cập nhật header
- **ĐÃ_SỬA_HEADER.md** - File này

---

## 🚀 HÀNH ĐỘNG

### Bước 1: Thay logo & Zalo ID
```html
<!-- Dòng ~1805 -->
<img src="YOUR_LOGO_URL.png" alt="Aloha Logo">

<!-- Dòng ~1807 -->
<a href="https://zalo.me/YOUR_ZALO_OA_ID"
```

### Bước 2: Upload
```
Upload index.html lên server
```

### Bước 3: Test
```
Ctrl + Shift + R
Xem header mới!
```

---

## ✅ CHECKLIST

- [ ] Thay logo URL
- [ ] Thay Zalo OA ID
- [ ] Upload index.html
- [ ] Hard refresh
- [ ] Test click Zalo OA button
- [ ] Test click Phone button
- [ ] Test responsive mobile

---

**Thay logo và Zalo OA rồi upload nhé!** 🚀
