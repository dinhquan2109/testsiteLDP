# Hướng Dẫn Debug Placement Test

## Vấn đề: Code dừng ở bước nhập thông tin

Tôi đã thêm console logging vào code để giúp xác định lỗi. Làm theo các bước sau:

### Bước 1: Mở Browser Console

**Chrome/Edge:**
- Nhấn `F12` hoặc `Ctrl + Shift + I` (Windows/Linux)
- Nhấn `Cmd + Option + I` (Mac)
- Hoặc: Chuột phải → Inspect → Tab "Console"

**Firefox:**
- Nhấn `F12` hoặc `Ctrl + Shift + K`
- Hoặc: Menu → Web Developer → Web Console

**Safari:**
- Preferences → Advanced → "Show Develop menu in menu bar"
- Develop → Show JavaScript Console

### Bước 2: Test lại ứng dụng

1. Mở file `index.html` trong browser
2. Mở Console (theo hướng dẫn trên)
3. Điền form thông tin
4. Nhấn "ĐI TỚI BÀI THI"
5. Xác nhận số điện thoại
6. **Quan sát Console để xem log và lỗi**

### Bước 3: Kiểm tra các log messages

Bạn sẽ thấy các log sau nếu mọi thứ hoạt động đúng:

```
btnConfirm clicked
Submitting to Supabase: {fullname: "...", age: "...", phone: "...", email: "..."}
Supabase response: {data: [...], error: null}
User row ID: 123
Navigating to instructions page
```

### Bước 4: Xác định lỗi

#### Lỗi 1: "btnConfirm clicked" không xuất hiện
→ **Vấn đề:** Event listener không được gán
→ **Giải pháp:** Kiểm tra ID của button có đúng là `btnConfirm` không

#### Lỗi 2: "Supabase error" hoặc error message
→ **Vấn đề:** Kết nối Supabase hoặc cấu trúc database
→ **Xem error.message để biết chi tiết**

Các lỗi thường gặp:
- `relation "placement" does not exist` → Chưa tạo bảng placement
- `column "..." does not exist` → Cấu trúc bảng không đúng
- `Failed to fetch` → Lỗi network/CORS

#### Lỗi 3: "User row ID: undefined"
→ **Vấn đề:** Insert thành công nhưng không trả về ID
→ **Giải pháp:** Kiểm tra `.select()` có hoạt động không

### Bước 5: Test Supabase Connection

Mở file `test_debug.html` trong browser:

```bash
# Nếu dùng local server
python3 -m http.server 8000
# Sau đó mở: http://localhost:8000/test_debug.html
```

Click nút "Test Supabase Connection" và xem kết quả.

## Các vấn đề thường gặp và giải pháp

### 1. Bảng `questions` chưa tồn tại

Tạo bảng trong Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS questions (
  id BIGSERIAL PRIMARY KEY,
  question_text TEXT NOT NULL,
  question_type TEXT DEFAULT 'multiple_choice',
  option_a TEXT,
  option_b TEXT,
  option_c TEXT,
  correct_answer TEXT,
  audio_url TEXT,
  order_number INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2. Bảng `placement` chưa đúng cấu trúc

```sql
CREATE TABLE IF NOT EXISTS placement (
  id BIGSERIAL PRIMARY KEY,
  fullname TEXT NOT NULL,
  age INTEGER,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. Bảng `test_results` chưa tồn tại

```sql
CREATE TABLE IF NOT EXISTS test_results (
  id BIGSERIAL PRIMARY KEY,
  placement_id BIGINT REFERENCES placement(id),
  answers JSONB,
  score INTEGER,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Row Level Security (RLS)

Nếu bật RLS, cần tạo policies:

```sql
-- Cho phép insert vào placement
CREATE POLICY "Allow public insert" ON placement
  FOR INSERT TO anon
  WITH CHECK (true);

-- Cho phép select questions
CREATE POLICY "Allow public select" ON questions
  FOR SELECT TO anon
  USING (true);

-- Cho phép insert test_results
CREATE POLICY "Allow public insert" ON test_results
  FOR INSERT TO anon
  WITH CHECK (true);
```

## Kiểm tra nhanh

### Checklist:

- [ ] Supabase URL và Key đúng
- [ ] Bảng `placement` đã tạo với đúng cấu trúc
- [ ] Bảng `questions` đã tạo và có dữ liệu
- [ ] Bảng `test_results` đã tạo
- [ ] RLS policies đã cấu hình (nếu bật RLS)
- [ ] Browser console không có lỗi CORS
- [ ] Network tab cho thấy requests thành công

## Liên hệ hỗ trợ

Nếu vẫn gặp lỗi, gửi cho tôi:
1. Screenshot Console (với tất cả logs)
2. Screenshot Network tab (các request đến Supabase)
3. Error message cụ thể
