# 🎯 LÀM CHÍNH XÁC NHƯ NÀY - TỪNG BƯỚC

## ⚠️ ĐỌC KỸ VÀ LÀM ĐÚNG TỪNG BƯỚC

---

## BƯỚC 1: UPLOAD FILE MỚI (1 phút)

```
1. Tải file index.html từ workspace
2. Upload lên server/hosting
3. Ghi đè file cũ
4. Đợi upload xong
```

---

## BƯỚC 2: XÓA CACHE HOÀN TOÀN (2 phút)

### Windows:
```
1. Nhấn Ctrl + Shift + Delete
2. Chọn "All time" hoặc "Tất cả thời gian"
3. Tick vào TẤT CẢ:
   ✅ Browsing history
   ✅ Download history
   ✅ Cookies and other site data
   ✅ Cached images and files
   ✅ TẤT CẢ MỤC
4. Click "Clear data" hoặc "Xóa dữ liệu"
5. ĐÓNG browser HOÀN TOÀN (tắt hết cửa sổ)
6. ĐỢI 5 GIÂY
7. MỞ LẠI browser
```

### Mac:
```
1. Cmd + Shift + Delete
2. Chọn "All time"
3. Tick tất cả
4. Clear
5. Quit browser hoàn toàn (Cmd + Q)
6. Đợi 5 giây
7. Mở lại
```

---

## BƯỚC 3: MỞ CONSOLE TRƯỚC (30 giây)

```
1. Mở browser
2. Nhấn F12 NGAY (trước khi vào website)
3. Chọn tab "Console"
4. ĐỂ Console mở
5. Giờ mới vào website
```

---

## BƯỚC 4: VÀO PHẦN NGHE (1 phút)

```
1. Điền form đăng ký
2. Chọn HSK 1-2 (ô xanh lá)
3. Click "BẮT ĐẦU"
4. Vào Phần 1: NGHE
5. Console vẫn mở nhé!
```

---

## BƯỚC 5: CHECK COUNT BAN ĐẦU (10 giây)

Trong Console, paste dòng này và Enter:
```javascript
checkAudioCount()
```

**PHẢI THẤY:**
```
📊 audioPlayCount: 0
📊 MAX_AUDIO_PLAYS: 2
🚩 audioEndedFlag: false
```

**NẾU SAI (không phải 0):**
```javascript
resetAudioCount()  // Reset về 0
displaySection(1)   // Reload phần 1
```

---

## BƯỚC 6: PLAY AUDIO LẦN 1 (1 phút)

```
1. Click button "▶️ Phát Audio"
2. ĐỪNG LÀM GÌ KHÁC
3. ĐỂ audio phát HẾT TỚI CUỐI
4. KHÔNG tắt, không pause
5. XEM CONSOLE
```

**TRONG KHI PHÁT, PHẢI THẤY (liên tục):**
```
⏱️ 1.0s / 145.5s
⏱️ 1.2s / 145.5s
⏱️ 1.4s / 145.5s
...
```

**KHI AUDIO KẾT THÚC, PHẢI THẤY:**
```
🎵 === AUDIO ENDED EVENT (flag: false) ===
📊 BEFORE increment: audioPlayCount = 0
📊 AFTER increment: audioPlayCount = 1 (MAX: 2)
🟢 CÒN LƯỢT (1 < 2)! Resetting for play #2
```

**QUAN TRỌNG: CHỈ THẤY 1 LẦN LOG "AUDIO ENDED EVENT"!**

**NẾU THẤY 2 LẦN:**
```
🎵 AUDIO ENDED EVENT (flag: false)
📊 BEFORE: 0
📊 AFTER: 1
🎵 AUDIO ENDED EVENT (flag: true)  ← Lần 2
⚠️ Already processed, IGNORING  ← Đã chặn
```
→ OK, flag đã chặn được!

---

## BƯỚC 7: CHECK COUNT SAU LẦN 1 (10 giây)

Paste vào Console:
```javascript
checkAudioCount()
```

**PHẢI THẤY:**
```
📊 audioPlayCount: 1
📊 MAX_AUDIO_PLAYS: 2
🚩 audioEndedFlag: false
```

**VÀ trên màn hình:**
- ✅ Button: "▶️ Phát Audio (Lượt 2)"
- ✅ Button màu xanh (CÓ THỂ CLICK)
- ✅ Text: "Đã nghe hết: 1/2"

**NẾU Button không hiện hoặc disabled:**
→ Có lỗi, gửi screenshot cho tôi!

---

## BƯỚC 8: PLAY AUDIO LẦN 2 (1 phút)

```
1. Click "▶️ Phát Audio (Lượt 2)"
2. Đợi audio phát HẾT
3. XEM CONSOLE
```

**KHI KẾT THÚC, PHẢI THẤY:**
```
🎵 === AUDIO ENDED EVENT (flag: false) ===
📊 BEFORE: audioPlayCount = 1
📊 AFTER: audioPlayCount = 2 (MAX: 2)
🔴 MAX REACHED (2 >= 2)! Hiding audio...
📍 Calling displaySection(1)
```

**VÀ trên màn hình:**
- ✅ Audio player BIẾN MẤT
- ✅ Button BIẾN MẤT
- ✅ Progress bar BIẾN MẤT
- ✅ Chỉ thấy: "❌ Đã hết lượt nghe (đã nghe hết 2 lần)"
- ✅ Còn lại 5 câu hỏi

---

## BƯỚC 9: VERIFY (10 giây)

Paste vào Console:
```javascript
checkAudioCount()
```

**PHẢI THẤY:**
```
📊 audioPlayCount: 2
📊 MAX_AUDIO_PLAYS: 2
🚩 audioEndedFlag: true
```

---

## ✅ PASS CRITERIA

### Tất cả PHẢI đúng:
- ✅ Lần 1 ended: Count 0 → 1
- ✅ Sau lần 1: Button "Lượt 2" (có thể click)
- ✅ Lần 2 ended: Count 1 → 2
- ✅ Sau lần 2: Audio biến mất
- ✅ Không thấy log "Already processed" (hoặc nếu thấy là OK, nghĩa là đã chặn được)

---

## 📞 NẾU VẪN SAI

Chụp màn hình Console và gửi cho tôi:

1. **Screenshot 1:** Log khi ended lần 1 (phải có "BEFORE: 0, AFTER: 1")
2. **Screenshot 2:** Button sau lần 1 (phải có "Lượt 2")
3. **Screenshot 3:** Log khi ended lần 2 (phải có "BEFORE: 1, AFTER: 2")
4. **Screenshot 4:** Giao diện sau lần 2 (audio phải biến mất)

---

## 💡 TIP

### Nếu quá nhiều lần test và count bị lộn xộn:
```javascript
// Paste vào Console để reset:
resetAudioCount()
displaySection(1)
// Giờ test lại từ đầu
```

### Nếu vẫn không được sau 3 lần thử:
```
Đổi tên file: index.html → index_v4.html
Upload index_v4.html
Mở index_v4.html trong browser
Test
```

---

**LÀM ĐÚNG TỪNG BƯỚC VÀ GỬI SCREENSHOT CHO TÔI!** 📸🚀
