# HƯỚNG DẪN SỬ DỤNG - PLACEMENT TEST MỚI

## 🎯 Tính năng đã thêm

### 1. Phân trang
- **10 câu/trang**: Tự động chia câu hỏi thành các trang
- **Bắt buộc hoàn thành**: Phải trả lời hết 10 câu mới chuyển trang
- **Hiển thị trang**: "Trang 1/2", "Trang 2/2" ở dưới navigation

### 2. Loại câu hỏi mới

#### A. Câu điền đáp án (`fill_in`)
```sql
INSERT INTO questions (question_text, question_type, correct_answer, order_number) VALUES
('What color is the sky?', 'fill_in', 'blue', 1);
```
- User gõ từ bàn phím
- So sánh **không phân biệt hoa/thường**
- "blue", "Blue", "BLUE" đều đúng

#### B. Câu tự luận (`essay`)
```sql
INSERT INTO questions (question_text, question_type, order_number) VALUES
('Describe your motivation for learning', 'essay', 2);
```
- Textarea lớn cho câu trả lời dài
- **Không có đáp án đúng** (correct_answer = NULL)
- **Không tính điểm** - chỉ lưu để review

#### C. Câu trắc nghiệm (`multiple_choice` hoặc NULL)
```sql
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('It is windy. You should take a ___ with you.', 'multiple_choice', 'coat', 'dress', 'T-shirt', 'A', 3);
```
- Vẫn như cũ, không thay đổi

## 📊 Cấu trúc Database

### Bảng `questions` cần có:
```sql
- id (bigserial)
- question_text (text) - Nội dung câu hỏi
- question_type (text) - 'multiple_choice', 'fill_in', hoặc 'essay'
- option_a, option_b, option_c (text, nullable)
- correct_answer (text, nullable) - NULL cho essay
- audio_url (text, nullable)
- order_number (integer) - Thứ tự câu hỏi
```

### Chạy SQL này để tạo 20 câu mẫu:

```sql
-- Câu trắc nghiệm (1-15)
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('It''s windy outside. You should take a _______ with you.', 'multiple_choice', 'coat', 'dress', 'T-shirt', 'A', 1),
('What is the capital of China?', 'multiple_choice', 'Beijing', 'Shanghai', 'Guangzhou', 'A', 2),
('Choose the correct grammar: She _____ to school every day.', 'multiple_choice', 'go', 'goes', 'going', 'B', 3),
('Which one is a fruit?', 'multiple_choice', 'Carrot', 'Apple', 'Potato', 'B', 4),
('The opposite of "hot" is _____.', 'multiple_choice', 'warm', 'cold', 'cool', 'B', 5),
('How many days are in a week?', 'multiple_choice', '5', '6', '7', 'C', 6),
('What do you use to write?', 'multiple_choice', 'pen', 'spoon', 'fork', 'A', 7),
('The color of grass is _____.', 'multiple_choice', 'red', 'green', 'blue', 'B', 8),
('You _____ water when you are thirsty.', 'multiple_choice', 'eat', 'drink', 'cook', 'B', 9),
('A baby dog is called a _____.', 'multiple_choice', 'kitten', 'puppy', 'calf', 'B', 10),
-- Trang 2
('The sun rises in the _____.', 'multiple_choice', 'west', 'north', 'east', 'C', 11),
('How many months are in a year?', 'multiple_choice', '10', '11', '12', 'C', 12),
('We use _____ to see at night.', 'multiple_choice', 'light', 'water', 'food', 'A', 13),
('The first day of the week is _____.', 'multiple_choice', 'Saturday', 'Sunday', 'Monday', 'C', 14),
('An animal that can fly is a _____.', 'multiple_choice', 'dog', 'bird', 'fish', 'B', 15);

-- Câu điền (16-18)
INSERT INTO questions (question_text, question_type, correct_answer, order_number) VALUES
('What color is the sky on a clear day? (Type your answer)', 'fill_in', 'blue', 16),
('Translate "你好" to English:', 'fill_in', 'hello', 17),
('Complete: 2 + 2 = ?', 'fill_in', '4', 18);

-- Câu tự luận (19-20)
INSERT INTO questions (question_text, question_type, order_number) VALUES
('Why do you want to learn Chinese? (Write at least 50 words)', 'essay', 19),
('Describe your future goals and how learning Chinese will help you achieve them.', 'essay', 20);
```

## 🎮 Cách hoạt động

### Flow của người dùng:
1. **Trang 1 (Câu 1-10)**:
   - Làm 10 câu
   - Nút "Trang sau" chỉ active khi đã trả lời hết 10 câu
   
2. **Trang 2 (Câu 11-20)**:
   - Làm 10 câu còn lại
   - Nút "NỘP BÀI" ở câu cuối

3. **Nộp bài**:
   - Chấm điểm tự động
   - Câu essay không tính điểm
   - Lưu kết quả vào `test_results`

### Chấm điểm:
```javascript
// Trắc nghiệm: userAnswer === "A" (chính xác)
// Điền đáp án: "blue" == "Blue" (case-insensitive)
// Tự luận: Không chấm điểm
```

## 🔧 Troubleshooting

### Lỗi: "Không tìm thấy câu hỏi"
→ Chưa có dữ liệu trong bảng `questions`
→ Chạy SQL INSERT ở trên

### Lỗi: Nút "Trang sau" disabled
→ Chưa trả lời hết 10 câu trong trang
→ Kiểm tra progress circles (phải đủ 10 vòng xanh)

### Lỗi: Điểm sai
→ Kiểm tra `question_type`:
  - Essay không được tính điểm
  - Fill-in so sánh case-insensitive
  
### Code không chạy sau khi nhập thông tin
→ Mở Console (F12) xem lỗi
→ Kiểm tra:
  - Bảng `placement` đã tạo chưa
  - RLS policies đã setup chưa

## ✨ Backend không thay đổi

Tôi **GIỮ NGUYÊN 100%** logic backend Supabase của bạn:
- ✅ Insert vào `placement` 
- ✅ Load `questions` theo `order_number`
- ✅ Insert `test_results` với `placement_id`
- ✅ Validation form
- ✅ Timer 20 phút

**Chỉ THÊM**:
- Logic phân trang frontend
- Hỗ trợ question_type mới
- Input/textarea cho fill_in/essay

## 📝 Lưu ý

1. **order_number phải liên tục**: 1,2,3...20 (không bỏ số)
2. **Essay không bắt buộc**: Có thể để trống
3. **Fill-in không phân biệt hoa/thường**: "Blue" = "blue"
4. **Audio vẫn hoạt động**: Thêm `audio_url` vào bất kỳ question_type nào

---

**Code đã sẵn sàng! Chỉ cần thêm câu hỏi vào database là chạy được ngay! 🚀**
