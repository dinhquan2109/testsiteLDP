# 🐛 DEBUG AUDIO - KHÔNG PHÁT ĐƯỢC

## ❌ VẤN ĐỀ: Ấn nút "Phát Audio" nhưng không chạy

---

## 🔍 KIỂM TRA NGAY

### Bước 1: Mở Console (F12)
```
1. Vào phần Nghe
2. Nhấn F12
3. Chọn tab Console
4. Ấn nút "Phát Audio"
5. Xem có lỗi màu đỏ không?
```

---

## 🧪 CÁC TRƯỜNG HỢP

### Trường hợp 1: "Audio elements not found!"
**Nghĩa là:** Không tìm thấy audio player hoặc button

**Nguyên nhân:**
- HTML không render đúng
- Browser cache

**Fix:**
```
1. Hard refresh: Ctrl + Shift + R
2. Xóa cache: Ctrl + Shift + Delete
3. Thử Incognito: Ctrl + Shift + N
```

---

### Trường hợp 2: "Error playing audio: NotAllowedError"
**Nghĩa là:** Browser chặn autoplay

**Nguyên nhân:**
- Browser policy chặn autoplay
- Chưa có interaction với page

**Fix:**
```
Đây là bình thường!
User phải CLICK button mới play được.
Nếu đã click mà vẫn lỗi → Thử browser khác.
```

---

### Trường hợp 3: "Audio error: 4" hoặc "MEDIA_ERR_SRC_NOT_SUPPORTED"
**Nghĩa là:** File audio không tồn tại hoặc sai format

**Nguyên nhân:**
- URL audio sai
- File không tồn tại
- Format không hỗ trợ

**Fix:**
```sql
-- Kiểm tra database
SELECT order_number, audio_url 
FROM questions 
WHERE order_number IN (1, 12, 23, 34, 45, 56);

-- URL phải có dạng:
-- https://...supabase.co/storage/v1/object/public/audio/file.mp3
```

**Test URL:**
```
1. Copy audio_url từ database
2. Paste vào browser mới
3. Phải nghe được audio
4. Nếu không → URL sai hoặc file không tồn tại
```

---

### Trường hợp 4: Console không có gì
**Nghĩa là:** JavaScript không chạy hoặc event listener không add

**Nguyên nhân:**
- File cũ vẫn cache
- JavaScript lỗi trước đó

**Fix:**
```
1. Hard refresh: Ctrl + Shift + R
2. Check Console có lỗi JavaScript khác không
3. Upload lại file index.html
```

---

## 🔧 FIX NHANH

### Fix 1: Hard Refresh (90% thành công)
```
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

### Fix 2: Kiểm tra Audio URL
```sql
-- HSK 1-2
SELECT * FROM questions WHERE order_number = 1;

-- Xem audio_url có giá trị không?
-- Nếu NULL hoặc empty → Phải upload audio và update
```

### Fix 3: Upload Audio (Nếu chưa có)
```
1. Vào Supabase Storage
2. Tạo bucket "audio" (public)
3. Upload file .mp3
4. Copy URL
5. Update database:

UPDATE questions 
SET audio_url = 'https://...url-của-file.mp3' 
WHERE order_number = 1;
```

### Fix 4: Test với audio mẫu
```
Tạm thời dùng URL audio public để test:
https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3

UPDATE questions 
SET audio_url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' 
WHERE order_number = 1;
```

---

## 🧪 DEBUG SCRIPT

Paste vào Console (F12) để test:

```javascript
// Test 1: Kiểm tra elements
console.log('=== TEST AUDIO ELEMENTS ===');
const audio = document.getElementById('mainAudio');
const playBtn = document.getElementById('playBtn');
console.log('Audio element:', audio);
console.log('Play button:', playBtn);
console.log('Audio src:', audio?.src);

// Test 2: Thử play thủ công
if (audio) {
    audio.play()
        .then(() => console.log('✅ Audio play SUCCESS'))
        .catch(err => console.error('❌ Audio play FAILED:', err));
}

// Test 3: Kiểm tra audio URL
if (audio && audio.src) {
    console.log('Testing audio URL...');
    fetch(audio.src, { method: 'HEAD' })
        .then(res => {
            console.log('Audio URL status:', res.status);
            console.log('Audio URL OK:', res.ok);
        })
        .catch(err => console.error('Audio URL FAILED:', err));
}
```

---

## 📊 BẢNG CHẨN ĐOÁN

| Triệu chứng | Nguyên nhân | Fix |
|-------------|-------------|-----|
| Console: "Audio elements not found" | HTML không render | Hard refresh |
| Console: "NotAllowedError" | Browser chặn autoplay | Click button (bình thường) |
| Console: "MEDIA_ERR_SRC_NOT_SUPPORTED" | Audio URL sai | Check database |
| Button không hiện | Cache | Incognito mode |
| Click không phản ứng | Event listener lỗi | Upload file mới |
| Audio URL = NULL | Chưa upload | Upload audio |

---

## ✅ CHECKLIST DEBUG

- [ ] 1. Đã hard refresh (Ctrl+Shift+R)
- [ ] 2. Đã mở Console (F12)
- [ ] 3. Thấy button "Phát Audio"
- [ ] 4. Click button
- [ ] 5. Xem Console có lỗi gì
- [ ] 6. Chạy debug script ở trên
- [ ] 7. Kiểm tra audio_url trong database
- [ ] 8. Test audio URL trực tiếp trong browser
- [ ] 9. Thử Incognito mode
- [ ] 10. Thử browser khác

---

## 🎯 GIẢI PHÁP THEO TRƯỜNG HỢP

### Nếu thấy: "Audio elements not found"
```
→ Hard refresh
→ Upload lại index.html
→ Incognito test
```

### Nếu thấy: "Error playing audio"
```
→ Kiểm tra audio URL
→ Test URL trực tiếp
→ Upload audio nếu chưa có
```

### Nếu không thấy lỗi gì
```
→ Chạy debug script
→ Xem kết quả
→ Gửi screenshot cho tôi
```

---

## 📞 GỬI CHO TÔI

Nếu vẫn không được, chụp màn hình:

1. **Console (F12)** - Toàn bộ log
2. **Elements tab** - HTML của audio-section
3. **Network tab** - Request audio có fail không
4. **Database** - Screenshot câu hỏi order_number = 1

Rồi gửi cho tôi để debug chi tiết!

---

## 💡 TIP NHANH

### Test nhanh nhất:
```
1. Ctrl + Shift + N (Incognito)
2. Vào website
3. F12 → Console
4. Chọn HSK 1-2 → Phần 1
5. Chạy debug script
6. Xem kết quả
```

### Nếu cần audio mẫu ngay:
```sql
UPDATE questions 
SET audio_url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' 
WHERE order_number IN (1, 12, 23, 34, 45, 56);
```

---

**Làm theo checklist và gửi kết quả cho tôi!** 🔍
