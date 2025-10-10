# 🧪 TEST AUDIO CONTROL - HƯỚNG DẪN CHI TIẾT

## 🚀 TEST NGAY (5 PHÚT)

### Bước 1: Deploy (1 phút)
```
1. Upload index.html lên server
2. Clear cache
3. Mở Incognito: Ctrl + Shift + N
```

### Bước 2: Vào Phần Nghe (30 giây)
```
1. Chọn HSK 1-2
2. Click "BẮT ĐẦU"
3. Vào Phần 1: NGHE
```

---

## ✅ CHECKLIST TEST

### Test 1: Giao Diện Mới ✓
**Mong đợi thấy:**
- [ ] Text: "⚠️ File audio phải nghe HẾT mới tính 1 lượt"
- [ ] Text: "Đã nghe hết: 0/2"
- [ ] Button xanh lá: "▶️ Phát Audio"
- [ ] Progress bar xám (chưa chạy)
- [ ] Time: "00:00 / XX:XX"
- [ ] KHÔNG thấy audio player mặc định của browser

---

### Test 2: Play Lần 1 ✓
**Làm:**
```
1. Click button "▶️ Phát Audio"
```

**Mong đợi:**
- [ ] Button đổi thành: "⏸️ Đang phát..."
- [ ] Button màu cam
- [ ] Button bị disabled (không click được)
- [ ] Progress bar bắt đầu chạy (xanh lá)
- [ ] Time cập nhật: "00:05 / 02:30" (ví dụ)
- [ ] Audio phát ra từ loa

---

### Test 3: Không Pause Được ✓
**Làm:**
```
Khi audio đang phát:
1. Cố click lại button (không phản ứng)
2. Cố bấm Space (không phản ứng)
3. Kiểm tra có nút pause không (không có)
```

**Mong đợi:**
- [ ] KHÔNG có cách nào pause được
- [ ] Audio vẫn phát tiếp
- [ ] Button vẫn disabled

---

### Test 4: Không Tua Được ✓
**Làm:**
```
Khi audio đang phát:
1. Cố click vào progress bar (không nhảy)
2. Bấm arrow keys (không nhảy)
```

**Mong đợi:**
- [ ] KHÔNG tua được
- [ ] Audio vẫn chạy tuần tự từ đầu đến cuối
- [ ] Progress bar không nhảy

---

### Test 5: Nghe Hết Lần 1 ✓
**Làm:**
```
1. Đợi audio phát HẾT (đến cuối)
```

**Mong đợi:**
- [ ] Audio dừng
- [ ] Text: "Đã nghe hết: 1/2"
- [ ] Button: "▶️ Phát Audio (Lượt 2)"
- [ ] Button màu xanh lá lại
- [ ] Button enabled (click được)
- [ ] Progress bar reset về 0%
- [ ] Time reset về 00:00

---

### Test 6: Play Lần 2 ✓
**Làm:**
```
1. Click button "▶️ Phát Audio (Lượt 2)"
```

**Mong đợi:**
- [ ] Audio phát lại từ đầu
- [ ] Button: "⏸️ Đang phát..." (cam, disabled)
- [ ] Progress bar chạy lại
- [ ] Time cập nhật

---

### Test 7: Nghe Hết Lần 2 ✓
**Làm:**
```
1. Đợi audio phát HẾT lần 2
```

**Mong đợi:**
- [ ] Text: "Đã nghe hết: 2/2"
- [ ] Audio player BIẾN MẤT
- [ ] Button BIẾN MẤT
- [ ] Hiển thị: "❌ Đã hết lượt nghe (đã nghe hết 2 lần)"
- [ ] Chỉ còn 5 câu hỏi

---

### Test 8: Không Hack Được ✓
**Làm:**
```
1. Right-click vào audio controls (không có menu)
2. F12 → Console → Thử thay đổi audioPlayCount (bảo vệ)
3. Refresh page giữa chừng → audioPlayCount reset về 0
```

**Mong đợi:**
- [ ] Không hack được số lượt
- [ ] Phải nghe thật 2 lần mới hết

---

## 📱 TEST MOBILE

### Responsive:
```
1. F12 → Toggle device toolbar
2. Chọn iPhone 12
3. Test lại tất cả như trên
```

**Mong đợi:**
- [ ] Button full width, dễ bấm
- [ ] Progress bar rõ ràng
- [ ] Time display dễ đọc
- [ ] Tất cả tính năng hoạt động

---

## 🐛 DEBUG NẾU CÓ LỖI

### Lỗi 1: Button không hiện
**Check:**
```
F12 → Console → Xem có lỗi không
Kiểm tra: document.getElementById('playBtn')
```

**Fix:** Hard refresh

### Lỗi 2: Vẫn pause được
**Check:**
```
F12 → Console → Xem event listeners
```

**Fix:** Upload lại file mới

### Lỗi 3: Vẫn đếm 2 lần khi chưa hết
**Check:**
```
F12 → Console → Xem log "Audio đã chạy hết. Lượt: X/2"
```

**Phải thấy log này 2 lần mới đúng**

### Lỗi 4: Audio không phát
**Check:**
```
1. Kiểm tra audio_url trong database
2. Thử mở link audio trực tiếp
3. Kiểm tra format file (phải .mp3)
```

---

## ✅ PASS CRITERIA

### Phải đạt TẤT CẢ:
- ✅ Button "Phát Audio" hiển thị
- ✅ Click → Audio phát
- ✅ Button disabled khi đang phát
- ✅ KHÔNG pause được
- ✅ KHÔNG tua được
- ✅ Progress bar chạy mượt
- ✅ Time display đúng
- ✅ Nghe hết lần 1 → Text "Lượt 2"
- ✅ Nghe hết lần 2 → Audio biến mất
- ✅ Hiển thị "❌ Đã hết lượt nghe"

---

## 🎯 KẾT QUẢ MONG ĐỢI

### Luồng Hoàn Chỉnh:
```
1. Vào Phần 1 
   → Thấy: "Đã nghe hết: 0/2"
   → Button: "▶️ Phát Audio"

2. Click Play
   → Button: "⏸️ Đang phát..." (disabled)
   → Progress bar chạy
   → KHÔNG pause/tua được

3. Audio chạy HẾT
   → Text: "Đã nghe hết: 1/2"
   → Button: "▶️ Phát Audio (Lượt 2)" (enabled)

4. Click Play lần 2
   → Audio phát lại từ đầu
   → Button disabled
   → Progress bar chạy

5. Audio chạy HẾT lần 2
   → Text: "Đã nghe hết: 2/2"
   → Audio player BIẾN MẤT
   → Hiển thị: "❌ Đã hết lượt nghe"
   
✅ PASS!
```

---

## 📊 BẢNG KẾT QUẢ

| Test | Mô tả | Pass? |
|------|-------|-------|
| 1 | Giao diện mới | [ ] |
| 2 | Play lần 1 | [ ] |
| 3 | Không pause | [ ] |
| 4 | Không tua | [ ] |
| 5 | Nghe hết lần 1 | [ ] |
| 6 | Play lần 2 | [ ] |
| 7 | Nghe hết lần 2 | [ ] |
| 8 | Không hack | [ ] |

**Tổng: __ / 8**

---

## 💡 TIPS

### Test nhanh với audio ngắn:
```
Tạm thời dùng file audio 10-15 giây để test nhanh
Sau đó đổi lại audio thật
```

### Test số lượt:
```javascript
// Nếu muốn test với 1 lượt thay vì 2:
const MAX_AUDIO_PLAYS = 1;
```

### Xem log:
```
F12 → Console
Xem: "Audio đã chạy hết. Lượt: X/2"
```

---

## 🎉 HOÀN TẤT!

Nếu tất cả test PASS:
```
✅ Audio control hoạt động hoàn hảo!
✅ Chặt chẽ, không hack được!
✅ UX tốt, rõ ràng!
```

**Deploy lên production!** 🚀

---

*Test kỹ trước khi cho user sử dụng nhé!*
