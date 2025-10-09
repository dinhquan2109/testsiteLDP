# CÁCH SỬA LỖI "Identifier has already been declared"

## Nguyên nhân:
Browser đang cache version cũ của code.

## GIẢI PHÁP:

### 1. Hard Refresh (Khuyến nghị)
**Chrome/Edge:**
- Windows: `Ctrl + Shift + R` hoặc `Ctrl + F5`
- Mac: `Cmd + Shift + R`

**Firefox:**
- Windows: `Ctrl + Shift + R` hoặc `Ctrl + F5`
- Mac: `Cmd + Shift + R`

**Safari:**
- Mac: `Cmd + Option + R`

### 2. Xóa Cache Browser
**Chrome/Edge:**
1. Nhấn `F12` để mở DevTools
2. Chuột phải vào nút Reload
3. Chọn "Empty Cache and Hard Reload"

**Firefox:**
1. `Ctrl + Shift + Delete`
2. Chọn "Cached Web Content"
3. Click "Clear Now"

### 3. Private/Incognito Mode
- Mở cửa sổ ẩn danh
- Mở lại file `index.html`

### 4. Thêm timestamp vào URL (tạm thời)
Thay vì mở `index.html`, mở:
```
index.html?v=123456
```

## NẾU VẪN LỖI:

Kiểm tra file index.html có bị corrupt không bằng cách:
```bash
grep -c "scorableQuestions" index.html
```

Kết quả phải là **3** (1 lần khai báo, 2 lần sử dụng).
