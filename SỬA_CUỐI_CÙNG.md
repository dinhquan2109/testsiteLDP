# 🔥 SỬA CUỐI CÙNG - PREVENT DOUBLE TRIGGER

## ✅ ĐÃ THÊM CƠ CHẾ CHẶN DOUBLE TRIGGER

### Flag để prevent:
```javascript
let audioEndedFlag = false;

audio.onended = function() {
    // CHECK FLAG
    if (audioEndedFlag) {
        console.log('Already processed, IGNORING');
        return; // Thoát ngay
    }
    audioEndedFlag = true; // Set flag
    
    // Xử lý ended...
    audioPlayCount++;
    
    if (audioPlayCount < 2) {
        audioEndedFlag = false; // Reset cho lần sau
    }
};
```

**Cơ chế:**
1. Lần đầu: flag = false → Chạy code → Set flag = true
2. Nếu gọi lần 2 (double trigger): flag = true → RETURN ngay
3. Khi reset cho lượt 2: Set flag = false

---

## 🧪 TEST SCRIPT

### Script 1: Check State
Paste vào Console:
```javascript
checkAudioCount()
```

### Script 2: Reset Count (Nếu cần test lại)
```javascript
resetAudioCount()
```

### Script 3: Full Debug
```javascript
console.log('=== FULL DEBUG ===');
console.log('Count:', audioPlayCount);
console.log('Flag:', audioEndedFlag);
console.log('Max:', MAX_AUDIO_PLAYS);

const audio = document.getElementById('mainAudio');
if (audio) {
    console.log('Duration:', audio.duration);
    console.log('Current:', audio.currentTime);
    console.log('Ended:', audio.ended);
    console.log('Paused:', audio.paused);
}
```

---

## 🚀 TEST ĐẦY ĐỦ

### Bước 1: Upload & Refresh
```
1. Upload index.html
2. Ctrl + Shift + Delete → Clear ALL
3. Đóng browser
4. Mở lại
5. Ctrl + Shift + R
```

### Bước 2: Vào Phần Nghe
```
1. F12 → Console (mở trước)
2. Chọn HSK 1-2
3. Vào Phần 1
4. Paste: checkAudioCount()
5. Phải thấy: Count: 0, Flag: false
```

### Bước 3: Play Lần 1
```
1. Click "Phát Audio"
2. Đợi audio chạy HẾT (quan trọng!)
3. XEM CONSOLE
```

**PHẢI THẤY:**
```
🎵 === AUDIO ENDED EVENT (flag: false) ===
📊 BEFORE increment: audioPlayCount = 0
📊 AFTER increment: audioPlayCount = 1 (MAX: 2)
🟢 CÒN LƯỢT (1 < 2)! Resetting for play #2
```

**KHÔNG được thấy 2 log "AUDIO ENDED EVENT" liên tiếp!**

### Bước 4: Check Count
```
Paste: checkAudioCount()
Phải: Count: 1, Flag: false
```

### Bước 5: Play Lần 2
```
1. Click "Phát Audio (Lượt 2)"
2. Đợi chạy hết
3. XEM LOG
```

**PHẢI THẤY:**
```
🎵 === AUDIO ENDED EVENT (flag: false) ===
📊 BEFORE: audioPlayCount = 1
📊 AFTER: audioPlayCount = 2 (MAX: 2)
🔴 MAX REACHED (2 >= 2)! Hiding audio...
📍 Calling displaySection(1)
```

**VÀ:**
- ✅ Audio player biến mất
- ✅ Hiển thị "❌ Đã hết lượt nghe"

---

## 🎯 CÁC TRƯỜNG HỢP

### Trường hợp 1: Log "Already processed, IGNORING"
**Nghĩa là:** onended bị gọi 2 lần, nhưng đã chặn được lần 2

**Kết quả:** ✅ OK, flag hoạt động

### Trường hợp 2: Count nhảy 0 → 2
**Nghĩa là:** Có addEventListener cũ còn sót

**Fix:** Thêm `audio.removeEventListener()` hoặc test Incognito

### Trường hợp 3: Lần 1 vẫn hết luôn
**Nghĩa là:** Code cũ vẫn cache

**Fix:** Đổi tên file: index.html → index_v3.html

---

## 📦 FILES

1. **index.html** - Có flag prevent double trigger
2. **SỬA_CUỐI_CÙNG.md** - File này
3. **PASTE_SCRIPT_NÀY.txt** - Script debug
4. **DEBUG_SCRIPT_PASTE_VÀO_CONSOLE.js** - Full debug

---

## 📞 BÁO CHO TÔI

Upload index.html mới, test và gửi:

1. **Screenshot Console** - Log khi ended lần 1
2. **Count BEFORE:** Là bao nhiêu?
3. **Count AFTER:** Là bao nhiêu?
4. **Có thấy "Already processed"?** (Có/Không)
5. **Button text sau lần 1:** Là gì?

---

**Làm theo từng bước trong file `PASTE_SCRIPT_NÀY.txt`!** 🔍
