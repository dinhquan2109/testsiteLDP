# TÍNH NĂNG MỚI - PLACEMENT TEST

## 🎯 Các tính năng đã thêm:

### 1. PHÂN TRANG
- **Mỗi trang:** 10 câu hỏi
- **Điều hướng:** Phải hoàn thành hết trang hiện tại mới chuyển được sang trang sau
- **Hiển thị:** "Trang 1/2", "Trang 2/2"
- **Nút "Trang sau →"** xuất hiện ở câu 10, 20, 30... (câu cuối mỗi trang)

### 2. CÂU HỎI ĐIỀN ĐÁP ÁN
- **Loại:** `question_type: 'fill_in'`
- **Giao diện:** Input text để gõ đáp án
- **Chấm điểm:** So sánh không phân biệt HOA/thường

### 3. CÂU HỎI TỰ LUẬN
- **Loại:** `question_type: 'essay'`
- **Giao diện:** Textarea lớn
- **Chấm điểm:** KHÔNG tính điểm (chỉ lưu để giáo viên đánh giá)

---

## 📊 CẤU TRÚC DATABASE

### Bảng `questions` cần có các cột:

```sql
CREATE TABLE questions (
  id BIGSERIAL PRIMARY KEY,
  question_text TEXT NOT NULL,
  question_type TEXT DEFAULT 'multiple_choice',  -- 'multiple_choice', 'fill_in', 'essay'
  option_a TEXT,
  option_b TEXT,
  option_c TEXT,
  correct_answer TEXT,  -- NULL cho essay
  audio_url TEXT,
  order_number INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 💡 CÁCH THÊM CÂU HỎI VÀO DATABASE

### Câu trắc nghiệm (Multiple Choice):
```sql
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) 
VALUES 
('What is the capital of Vietnam?', 'multiple_choice', 'Hanoi', 'Ho Chi Minh', 'Da Nang', 'A', 1);
```

### Câu điền đáp án (Fill-in):
```sql
INSERT INTO questions (question_text, question_type, correct_answer, order_number) 
VALUES 
('What color is the sky? (Type your answer)', 'fill_in', 'blue', 2);
```
**Lưu ý:** option_a, option_b, option_c để NULL

### Câu tự luận (Essay):
```sql
INSERT INTO questions (question_text, question_type, order_number) 
VALUES 
('Describe your motivation for learning English', 'essay', 3);
```
**Lưu ý:** correct_answer phải là NULL

---

## 🔄 LOGIC CHẤM ĐIỂM

```javascript
// Câu trắc nghiệm: So sánh chính xác
if (question_type === 'multiple_choice') {
    if (userAnswer === correctAnswer) score++;
}

// Câu điền: So sánh không phân biệt hoa/thường
if (question_type === 'fill_in') {
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) score++;
}

// Câu tự luận: KHÔNG tính điểm
if (question_type === 'essay') {
    // Bỏ qua, chỉ lưu vào database
}
```

---

## 📋 VÍ DỤ THÊM 20 CÂU HỎI

```sql
-- Trang 1 (câu 1-10): Trắc nghiệm
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('It''s windy outside. You should take a _______ with you.', 'multiple_choice', 'coat', 'dress', 'T-shirt', 'A', 1),
('What is the capital of Vietnam?', 'multiple_choice', 'Hanoi', 'Ho Chi Minh', 'Da Nang', 'A', 2),
('She _____ to school every day.', 'multiple_choice', 'go', 'goes', 'going', 'B', 3),
('Which one is a fruit?', 'multiple_choice', 'Carrot', 'Apple', 'Potato', 'B', 4),
('The opposite of "hot" is _____.', 'multiple_choice', 'warm', 'cold', 'cool', 'B', 5),
('How many days are in a week?', 'multiple_choice', '5', '6', '7', 'C', 6),
('What do you use to write?', 'multiple_choice', 'pen', 'spoon', 'fork', 'A', 7),
('The color of grass is _____.', 'multiple_choice', 'red', 'green', 'blue', 'B', 8),
('You _____ water when you are thirsty.', 'multiple_choice', 'eat', 'drink', 'cook', 'B', 9),
('A baby dog is called a _____.', 'multiple_choice', 'kitten', 'puppy', 'calf', 'B', 10);

-- Trang 2 (câu 11-18): Trắc nghiệm + điền
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('The sun rises in the _____.', 'multiple_choice', 'west', 'north', 'east', 'C', 11),
('How many months are in a year?', 'multiple_choice', '10', '11', '12', 'C', 12),
('We use _____ to see at night.', 'multiple_choice', 'light', 'water', 'food', 'A', 13),
('The first day of the week is _____.', 'multiple_choice', 'Saturday', 'Sunday', 'Monday', 'C', 14),
('An animal that can fly is a _____.', 'multiple_choice', 'dog', 'bird', 'fish', 'B', 15);

-- Câu điền (16-18)
INSERT INTO questions (question_text, question_type, correct_answer, order_number) VALUES
('What color is the sky on a clear day? (Type your answer)', 'fill_in', 'blue', 16),
('Translate "Hello" to Vietnamese:', 'fill_in', 'Xin chào', 17),
('Complete: 2 + 2 = ?', 'fill_in', '4', 18);

-- Câu tự luận (19-20)
INSERT INTO questions (question_text, question_type, order_number) VALUES
('Why do you want to learn English? (Write at least 50 words)', 'essay', 19),
('Describe your future goals.', 'essay', 20);
```

---

## ✅ TEST THỬ

1. **Mở file `index.html`** trong browser
2. **Điền form** đăng ký
3. **Làm bài test:**
   - Trang 1: 10 câu trắc nghiệm
   - Trang 2: 5 câu trắc nghiệm + 3 câu điền + 2 câu tự luận
4. **Kết quả:** 
   - Điểm = số câu đúng (trừ essay)
   - Ví dụ: 15 câu trắc nghiệm đúng + 3 câu điền đúng = 18/18 điểm

---

## 🐛 TROUBLESHOOTING

### Vấn đề: Không chuyển được sang trang 2
→ Kiểm tra đã trả lời hết 10 câu trang 1 chưa

### Vấn đề: Câu điền luôn sai
→ Kiểm tra `correct_answer` trong database, đảm bảo đúng chính tả

### Vấn đề: Câu essay không lưu
→ Kiểm tra `question_type` phải là 'essay' và `correct_answer` phải NULL

---

**CODE HOÀN TOÀN TƯƠNG THÍCH VỚI BACKEND CŨ!** 
Backend Supabase không thay đổi gì cả, chỉ thêm tính năng mới vào frontend.
