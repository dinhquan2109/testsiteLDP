# 🤖 HƯỚNG DẪN CÀI ĐẶT GEMINI AI

## ✅ ĐÃ THÊM TÍNH NĂNG

### 1. Result Page Mới:
- ✅ Spiral binding đẹp (giống notebook)
- ✅ Logo IC góc trên
- ✅ Màu nền xanh lá gradient
- ✅ Grid hiển thị 10 câu đúng/sai (✓/✕)
- ✅ Thông tin: Tên, trình độ, thời gian
- ✅ Điểm số lớn, rõ ràng

### 2. AI Feedback cho Bài Tự Luận:
- ✅ Tích hợp Gemini AI
- ✅ Tự động phân tích bài viết
- ✅ Nhận xét về: Nội dung, ngữ pháp, từ vựng, cấu trúc
- ✅ Gợi ý cải thiện
- ✅ Loading animation

---

## 🔑 LẤY GEMINI API KEY (5 PHÚT)

### Bước 1: Truy cập Google AI Studio
```
https://makersuite.google.com/app/apikey
```

### Bước 2: Đăng nhập
- Dùng Google account của bạn
- Chấp nhận Terms of Service

### Bước 3: Tạo API Key
```
1. Click "Get API Key" hoặc "Create API Key"
2. Chọn project (hoặc tạo mới)
3. Click "Create API Key in new project"
4. COPY API KEY (dạng: AIza...)
```

**⚠️ LƯU Ý:** API key này quan trọng, không chia sẻ công khai!

---

## 🔧 CÀI ĐẶT VÀO CODE (2 PHÚT)

### Bước 1: Mở file index.html

### Bước 2: Tìm dòng này (khoảng dòng 2681):
```javascript
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
```

### Bước 3: Thay đổi:
```javascript
const GEMINI_API_KEY = 'AIzaSyXXXXXXXXXXXXXXXXXXXX'; // Paste key của bạn
```

**Ví dụ:**
```javascript
const GEMINI_API_KEY = 'AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
```

### Bước 4: Lưu file

---

## 🚀 TEST AI FEEDBACK

### Bước 1: Upload index.html

### Bước 2: Hard Refresh
```
Ctrl + Shift + R
```

### Bước 3: Làm bài test
```
1. Chọn HSK 1-2
2. Làm Phần 1, 2 nhanh (có thể đáp án bừa)
3. Phần 3: VIẾT BÀI TỰ LUẬN (quan trọng!)
   - Viết ít nhất 50-100 từ
   - Về chủ đề của đề bài
```

### Bước 4: Nộp bài

### Bước 5: Xem kết quả

**PHẢI THẤY:**
```
1. Spiral binding xanh lá ✅
2. Logo IC ✅
3. Thông tin: Tên, trình độ, thời gian ✅
4. Grid 10 câu với ✓/✕ ✅
5. Phần AI Feedback:
   - Loading spinner
   - "Đang phân tích..."
   - Sau 3-5 giây → Nhận xét AI hiển thị ✅
```

---

## 📊 AI FEEDBACK SẼ BAO GỒM

### Nhận xét về:
1. **Nội dung:** Có trả lời đúng đề bài không?
2. **Ngữ pháp:** Lỗi gì? Sửa thế nào?
3. **Từ vựng:** Phù hợp không? Đa dạng không?
4. **Cấu trúc câu:** Rõ ràng không?
5. **Điểm mạnh:** Những gì làm tốt
6. **Điểm cần cải thiện:** Nên sửa gì
7. **Gợi ý:** Cách cải thiện bài viết

**Độ dài:** 200-300 từ, thân thiện, khích lệ

---

## 🔒 BẢO MẬT API KEY

### ⚠️ LƯU Ý QUAN TRỌNG:

**KHÔNG nên để API key trong code frontend!**

Vì user có thể:
1. View source → Thấy API key
2. Dùng API key của bạn
3. Hết quota của bạn

### Giải pháp tốt hơn:

#### Cách 1: Sử dụng Supabase Edge Functions (KHUYÊN DÙNG)
```javascript
// Tạo Supabase Edge Function
// File: supabase/functions/ai-feedback/index.ts

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  const { essay, prompt } = await req.json()
  
  const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') // Lưu trong Supabase secrets
  
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: `...prompt...` }]
      }]
    })
  })
  
  const data = await response.json()
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

Rồi trong index.html:
```javascript
// Gọi Edge Function thay vì trực tiếp
const response = await fetch('https://your-project.supabase.co/functions/v1/ai-feedback', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`
    },
    body: JSON.stringify({ essay, prompt })
});
```

#### Cách 2: Giới hạn domain
```
Vào Google Cloud Console
→ API Credentials
→ Edit API Key
→ Application restrictions: HTTP referrers
→ Thêm: yourdomain.com/*
```

#### Cách 3: Tạm thời (Để test)
```
Để API key trong code
Test thử
Sau đó migrate sang Edge Function
```

---

## 🧪 TEST

### Test 1: Không có API key
```
Nếu chưa có key:
→ Hiển thị: "⚠️ Không thể lấy nhận xét AI"
→ User vẫn thấy kết quả bài thi
→ Chỉ không có phần AI feedback
```

### Test 2: Có API key
```
1. Viết bài tự luận (50-100 từ)
2. Nộp bài
3. Xem kết quả
4. Thấy "Đang phân tích..." (3-5s)
5. Thấy nhận xét AI đầy đủ ✅
```

### Test 3: API Error
```
Nếu API lỗi (quota hết, key sai):
→ Hiển thị thông báo lỗi
→ User vẫn thấy kết quả
→ Liên hệ giáo viên để đánh giá
```

---

## 💰 GIÁ CẢ GEMINI API

### Free tier:
- ✅ 60 requests/phút
- ✅ Đủ cho hầu hết trường hợp
- ✅ Không cần credit card

### Nếu cần nhiều hơn:
- Pay as you go
- $0.00025 / 1K characters

**Cho ứng dụng placement test: FREE tier đủ!**

---

## 📋 CHECKLIST

- [ ] Lấy Gemini API key từ Google AI Studio
- [ ] Thay thế 'YOUR_GEMINI_API_KEY_HERE' trong code
- [ ] Upload index.html
- [ ] Chạy SQL: ALTER TABLE test_results ALTER COLUMN selected_level TYPE TEXT
- [ ] Hard refresh: Ctrl + Shift + R
- [ ] Test làm bài (nhớ viết bài tự luận)
- [ ] Nộp bài
- [ ] Xem kết quả:
  - [ ] Spiral binding đẹp
  - [ ] Grid 10 câu ✓/✕
  - [ ] AI feedback hiển thị
  - [ ] Không có lỗi

---

## 🎨 GIAO DIỆN MỚI

```
┌────────────────────────────────────┐
│ ●●●●●●●●●●●●●● (spiral binding)    │
├────────────────────────────────────┤
│ [IC]                               │
│                                     │
│  CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH      │
│                                     │
│ ┌────────────────────────────┐    │
│ │ Họ tên: Nguyễn Văn A       │    │
│ │ Trình độ: HSK 1-2          │    │
│ │ Thời gian: 18:32           │    │
│ └────────────────────────────┘    │
│                                     │
│ Bạn đã nhận được 8 điểm...         │
│                                     │
│ Số đáp án đúng: 8/10               │
│                                     │
│ [1✓] [2✕] [3✓] [4✓] [5✕]         │
│ [6✓] [7✕] [8✓] [9✓] [10✕]        │
│                                     │
│ 🤖 Nhận xét AI cho bài viết        │
│ ┌────────────────────────────┐    │
│ │ Bài viết của bạn...         │    │
│ │ Ngữ pháp: ...               │    │
│ │ Từ vựng: ...                │    │
│ │ Gợi ý: ...                  │    │
│ └────────────────────────────┘    │
│                                     │
│        [Hoàn tất]                  │
└────────────────────────────────────┘
```

---

## 🎯 KẾT QUẢ

```
✅ Result page đẹp, chuyên nghiệp
✅ Hiển thị chi tiết từng câu
✅ AI feedback tự động
✅ UX tốt, trực quan
✅ Mobile responsive
```

---

## 📞 HỖ TRỢ

**Nếu cần giúp lấy API key hoặc setup:**
1. Xem video: https://ai.google.dev/tutorials/setup
2. Hoặc hỏi tôi chi tiết hơn

**Nếu muốn dùng Edge Function:**
- Tôi có thể tạo code Edge Function
- An toàn hơn
- Không lộ API key

---

**Lấy API key và thay vào code, upload và test ngay!** 🚀
