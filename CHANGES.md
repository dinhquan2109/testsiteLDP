# Thay đổi mới trong hệ thống Placement Test

## Tổng quan các tính năng mới

### 1. **Phân trang (Pagination)**
- Bài test được chia thành nhiều trang, mỗi trang 10 câu hỏi
- Hiển thị "Trang 1/2", "Trang 2/2" để người dùng biết vị trí hiện tại
- Nút "Trang sau →" chỉ hiện khi ở câu cuối của trang (câu 10, 20, 30...)
- **Bắt buộc hoàn thành tất cả 10 câu trong trang hiện tại** mới được chuyển sang trang tiếp theo
- Progress circles (vòng tròn tiến độ) chỉ hiển thị 10 câu của trang hiện tại

### 2. **Loại câu hỏi mới: Fill-in-the-blank (Điền đáp án)**
- Người dùng gõ đáp án từ bàn phím vào ô input
- So sánh đáp án **không phân biệt chữ hoa/thường** (case-insensitive)
- Tự động loại bỏ khoảng trắng thừa khi so sánh
- Hiển thị tiêu đề: "Điền đáp án"
- Ví dụ: "What color is the sky?" → người dùng gõ "blue" hoặc "Blue" đều đúng

### 3. **Loại câu hỏi tự luận (Essay)**
- Textarea lớn cho phép người dùng nhập câu trả lời dài
- **Không có đáp án đúng/sai** - chỉ lưu lại để giáo viên đánh giá
- **Không tính điểm** cho câu hỏi này
- Hiển thị tiêu đề: "Câu tự luận"
- Kết quả được lưu vào database để review sau

### 4. **Định dạng đáp án đúng (Text Formatting)**
- Đáp án đúng được hiển thị với:
  - Font chữ đậm (bold)
  - Màu xanh lá (#4caf50)
  - Viền/background nổi bật
- CSS class: `.correct-answer-format`, `.correct-answer-display`

## Cách sử dụng

### Thêm câu hỏi vào database

Tham khảo file `sample_questions.sql` để xem ví dụ chi tiết.

#### 1. Câu hỏi trắc nghiệm (Multiple Choice)
```sql
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) 
VALUES 
('What is the capital of China?', 'multiple_choice', 'Beijing', 'Shanghai', 'Guangzhou', 'A', 1);
```

#### 2. Câu hỏi điền đáp án (Fill-in)
```sql
INSERT INTO questions (question_text, question_type, correct_answer, order_number) 
VALUES 
('What color is the sky?', 'fill_in', 'blue', 2);
```
*Lưu ý: option_a, option_b, option_c có thể để NULL*

#### 3. Câu hỏi tự luận (Essay)
```sql
INSERT INTO questions (question_text, question_type, order_number) 
VALUES 
('Describe your motivation for learning Chinese', 'essay', 3);
```
*Lưu ý: correct_answer phải là NULL*

### Cấu trúc database

Bảng `questions` cần có các cột:
- `question_text` (text): Nội dung câu hỏi
- `question_type` (text): 'multiple_choice', 'fill_in', hoặc 'essay'
- `option_a`, `option_b`, `option_c` (text, nullable): Các lựa chọn (chỉ cho multiple choice)
- `correct_answer` (text, nullable): Đáp án đúng (NULL cho essay)
- `audio_url` (text, nullable): Link audio nếu có
- `order_number` (integer): Thứ tự câu hỏi

## Tính năng chi tiết

### Navigation (Điều hướng)
- **Câu trước**: Luôn có thể quay lại câu trước (trừ câu đầu tiên)
- **Câu sau**: Chuyển câu tiếp theo trong cùng trang
- **Trang sau**: Xuất hiện ở câu 10, 20... - chỉ hoạt động khi đã trả lời hết trang hiện tại
- **Nộp bài**: Chỉ xuất hiện ở câu cuối cùng

### Chấm điểm
- **Multiple Choice**: So sánh chính xác với đáp án (A, B, hoặc C)
- **Fill-in**: So sánh không phân biệt hoa/thường, bỏ qua khoảng trắng
- **Essay**: Không chấm điểm, chỉ lưu lại
- Điểm tối đa = số câu hỏi không phải essay
- Ví dụ: 18 câu trắc nghiệm/điền + 2 câu tự luận = điểm tối đa 18

### Progress Tracking
- Vòng tròn xám: Chưa trả lời
- Vòng tròn xanh lá: Đã trả lời
- Vòng tròn vàng: Câu hỏi hiện tại
- Chỉ hiển thị 10 vòng tròn của trang hiện tại

## Các thay đổi về giao diện

### Đã thêm:
- Input field cho câu điền đáp án
- Textarea cho câu tự luận
- Nút "Trang sau →"
- Hiển thị "Trang X/Y"
- Style mới cho các loại input

### Không thay đổi:
- Layout tổng thể
- Màu sắc chủ đạo
- Header và footer
- Form đăng ký ban đầu
- Trang hướng dẫn
- Trang kết quả

## Lưu ý khi sử dụng

1. **Phải hoàn thành trang hiện tại**: Người dùng không thể qua trang mới nếu còn câu chưa trả lời trong trang hiện tại
2. **Câu tự luận không bắt buộc có nội dung**: Để trống vẫn được, nhưng sẽ lưu giá trị rỗng
3. **Câu điền đáp án phân biệt nội dung**: Chỉ không phân biệt hoa/thường, nhưng vẫn phải đúng chính tả
4. **Order number**: Phải liên tục từ 1 để câu hỏi hiển thị đúng thứ tự

## Troubleshooting

### Nút "Trang sau" bị disabled
→ Kiểm tra xem đã trả lời hết 10 câu trong trang chưa

### Câu fill-in luôn sai
→ Kiểm tra `correct_answer` trong database, đảm bảo đúng chính tả

### Câu essay không lưu
→ Kiểm tra `question_type` phải là 'essay' và `correct_answer` phải NULL

### Progress circles không đúng
→ Xóa cache trình duyệt và reload lại trang
