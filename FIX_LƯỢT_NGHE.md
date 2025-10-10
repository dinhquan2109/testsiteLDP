# 🔧 FIX LƯỢT NGHE - NGHE 1 LẦN ĐÃ HẾT

## ❌ VẤN ĐỀ: Nghe hết lần 1 → Báo hết lượt luôn

### Có thể nguyên nhân:
1. `audio.onended` được gọi 2 lần
2. `audioPlayCount` tăng 2 thay vì 1
3. Có event listener cũ còn sót lại

---

## ✅ ĐÃ SỬA

### Thêm debug logs:
```javascript
audio.onended = function() {
    console.log('🎵 Audio ended. Current count:', audioPlayCount);
    audioPlayCount++;
    console.log('📊 Count increased to:', audioPlayCount);
    
    if (audioPlayCount >= 2) {
        console.log('🔴 Max plays reached');
    } else {
        console.log('🟢 Còn lượt, reset');
    }
};
```

### Thêm debug function:
```javascript
window.checkAudioCount = function() {
    console.log('audioPlayCount:', audioPlayCount);
};
```

---

## 🧪 TEST DEBUG

### Bước 1: Upload & Refresh
```
1. Upload index.html mới
2. Ctrl + Shift + R
```

### Bước 2: Vào Phần Nghe với Console
```
1. F12 → Console
2. Chọn HSK 1-2 → Phần 1
```

### Bước 3: Check count ban đầu
```javascript
// Paste vào Console:
checkAudioCount()
// Kết quả phải là: audioPlayCount: 0
```

### Bước 4: Click "Phát Audio"
```
Click button và xem Console
```

### Bước 5: Đợi audio chạy HẾT
```
Đợi đến khi audio kết thúc
Xem Console log gì
```

**PHẢI THẤY:**
```
🎵 Audio ended. Current count: 0
📊 Count increased to: 1
🟢 Còn lượt, reset
```

**KHÔNG ĐƯỢC THẤY:**
```
🎵 Audio ended. Current count: 0
📊 Count increased to: 1
🎵 Audio ended. Current count: 1  ← SAI! Gọi 2 lần!
📊 Count increased to: 2
🔴 Max plays reached
```

---

## 📊 CHẨN ĐOÁN

### Nếu thấy log ended 2 LẦN:
**Nghĩa là:** Event được trigger 2 lần

**Nguyên nhân:**
- Có addEventListener cũ còn sót
- Hoặc audio.onended set 2 lần
- Hoặc clearInterval không kịp

**Fix:**
```javascript
// Thêm flag để prevent double trigger
let endedTriggered = false;
audio.onended = function() {
    if (endedTriggered) {
        console.log('⚠️ Ended already triggered, ignore');
        return;
    }
    endedTriggered = true;
    
    // ... rest of code
};
```

---

### Nếu thấy count tăng từ 0 → 2 (không qua 1):
**Nghĩa là:** audioPlayCount++ chạy 2 lần cùng lúc

**Fix:** Thêm check trước khi tăng

---

## 🔧 FIX NGAY

Paste vào Console để test thủ công:

```javascript
// Reset count về 0
audioPlayCount = 0;
console.log('Reset count to 0');

// Check lại
checkAudioCount();

// Refresh section
displaySection(1);
```

Rồi test lại từ đầu.

---

## 📋 CHECKLIST

- [ ] Upload index.html mới (có debug logs)
- [ ] Hard refresh
- [ ] F12 → Console
- [ ] Paste: `checkAudioCount()` → Phải là 0
- [ ] Click "Phát Audio"
- [ ] Đợi audio chạy hết
- [ ] Xem Console:
  - [ ] "Audio ended. Current count: 0"
  - [ ] "Count increased to: 1"
  - [ ] "🟢 Còn lượt"
- [ ] Button hiện "▶️ Phát Audio (Lượt 2)"
- [ ] Click lần 2
- [ ] Đợi chạy hết
- [ ] Xem Console:
  - [ ] "Current count: 1"
  - [ ] "Count increased to: 2"
  - [ ] "🔴 Max plays reached"
- [ ] Audio player biến mất

---

## 🎯 KẾT QUẢ MONG ĐỢI

### Lần 1:
```
⏱️ ... audio chạy ...
🎵 Audio ended. Current count: 0
📊 Count increased to: 1
🟢 Còn lượt, reset
→ Button: "▶️ Phát Audio (Lượt 2)"
→ Có thể click lại
```

### Lần 2:
```
⏱️ ... audio chạy ...
🎵 Audio ended. Current count: 1
📊 Count increased to: 2
🔴 Max plays reached
→ Audio player biến mất
→ Hiển thị: "❌ Đã hết lượt nghe"
```

---

## 📞 GỬI CHO TÔI

Screenshot Console với:
1. Log khi audio ended lần 1
2. Số count là bao nhiêu?
3. Có bị gọi 2 lần liên tiếp không?

**Đọc file `ĐỌC_FILE_NÀY_TRƯỚC.txt` và test!** 🚀
