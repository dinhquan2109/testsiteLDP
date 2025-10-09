# HƯỚNG DẪN TEST NHANH

## Bước 1: Mở Console
- **Chrome/Edge**: Nhấn `F12` → Tab "Console"
- **Firefox**: Nhấn `F12` → Tab "Console"  
- **Safari**: `Cmd+Option+C`

## Bước 2: Mở file index.html trong browser

## Bước 3: Điền form và quan sát Console

Bạn sẽ thấy các thông báo sau nếu code hoạt động đúng:

### ✅ Khi nhấn "Xác nhận" sau khi điền form:
```
[DEBUG] btnConfirm clicked
[DEBUG] Data to submit: {fullname: "...", age: "...", phone: "...", email: "..."}
[DEBUG] Supabase response: {data: Array(1), error: null}
[DEBUG] User saved with ID: 123
[DEBUG] Navigating to instructions page
```

### ✅ Khi nhấn "BẮT ĐẦU" ở trang hướng dẫn:
```
[DEBUG] startTestBtn clicked, userRowId: 123
[DEBUG] Loading questions from Supabase...
[DEBUG] Questions loaded: 20 questions
[DEBUG] Starting test with 20 questions
```

## Các lỗi thường gặp:

### ❌ Lỗi 1: "relation 'placement' does not exist"
**Nguyên nhân:** Chưa tạo bảng `placement` trong Supabase

**Giải pháp:** Chạy file `setup_database.sql` trong Supabase SQL Editor

### ❌ Lỗi 2: "relation 'questions' does not exist"  
**Nguyên nhân:** Chưa tạo bảng `questions` hoặc chưa có dữ liệu

**Giải pháp:** Chạy file `setup_database.sql` để tạo bảng và insert dữ liệu mẫu

### ❌ Lỗi 3: "[DEBUG] Questions loaded: 0 questions"
**Nguyên nhân:** Bảng `questions` rỗng (không có dữ liệu)

**Giải pháp:** Chạy phần INSERT trong file `setup_database.sql`

### ❌ Lỗi 4: "Failed to fetch" hoặc CORS error
**Nguyên nhân:** 
- Sai Supabase URL/Key
- Row Level Security (RLS) chặn request

**Giải pháp:**
1. Kiểm tra lại URL và Key trong code
2. Tắt RLS hoặc tạo policies (xem file `setup_database.sql`)

### ❌ Lỗi 5: Code dừng ở bước nhập thông tin
**Nếu không thấy log [DEBUG] nào:**
- Kiểm tra file index.html có đúng không
- Hard refresh browser (Ctrl+Shift+R hoặc Cmd+Shift+R)
- Xóa cache browser

**Nếu thấy [ERROR]:**
- Copy toàn bộ error message
- Gửi cho tôi để debug

## Test kết nối Supabase riêng

Mở file `test_debug.html` trong browser và nhấn "Test Supabase Connection"

Nếu kết nối OK, bạn sẽ thấy danh sách câu hỏi từ database.

---

**GỬI CHO TÔI:**
- Screenshot toàn bộ Console (bao gồm cả logs và errors)
- Hoặc copy/paste tất cả text trong Console

Tôi sẽ giúp bạn debug ngay!
