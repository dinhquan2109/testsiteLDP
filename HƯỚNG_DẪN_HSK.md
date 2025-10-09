# HƯỚNG DẪN THÊM CÂU HỎI THEO TRÌNH ĐỘ HSK

## 📋 CẤU TRÚC CÂU HỎI

Mỗi trình độ HSK có **20 câu hỏi** với `order_number` riêng:

| Trình độ | Tên | order_number | Số câu |
|----------|-----|--------------|--------|
| **HSK 1** | Cơ bản | 1-20 | 20 câu |
| **HSK 2** | Sơ cấp | 21-40 | 20 câu |
| **HSK 3** | Trung cấp thấp | 41-60 | 20 câu |
| **HSK 4** | Trung cấp | 61-80 | 20 câu |
| **HSK 5** | Trung cấp cao | 81-100 | 20 câu |
| **HSK 6** | Nâng cao | 101-120 | 20 câu |

---

## 💾 SQL MẪU - THÊM CÂU HỎI

### HSK 1 (order_number 1-20)

```sql
-- Trang 1: Câu 1-10
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('你好 nghĩa là gì?', 'multiple_choice', 'Hello', 'Goodbye', 'Thank you', 'A', 1),
('谢谢 đọc là gì?', 'multiple_choice', 'Nǐ hǎo', 'Xiè xie', 'Zài jiàn', 'B', 2),
('再见 nghĩa là gì?', 'multiple_choice', 'Hello', 'Thank you', 'Goodbye', 'C', 3),
('我 nghĩa là gì?', 'multiple_choice', 'I/me', 'You', 'He', 'A', 4),
('你 nghĩa là gì?', 'multiple_choice', 'I', 'You', 'She', 'B', 5),
('他 nghĩa là gì?', 'multiple_choice', 'I', 'You', 'He', 'C', 6),
('好 nghĩa là gì?', 'multiple_choice', 'Good', 'Bad', 'Big', 'A', 7),
('不 nghĩa là gì?', 'multiple_choice', 'Yes', 'No/Not', 'Maybe', 'B', 8),
('是 nghĩa là gì?', 'multiple_choice', 'Is/am/are', 'Not', 'Have', 'A', 9),
('吗 có chức năng gì?', 'multiple_choice', 'Question particle', 'Negation', 'Emphasis', 'A', 10);

-- Trang 2: Câu 11-18 (Trắc nghiệm + Điền)
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('一 đọc là gì?', 'multiple_choice', 'yī', 'èr', 'sān', 'A', 11),
('二 nghĩa là gì?', 'multiple_choice', '1', '2', '3', 'B', 12),
('三 nghĩa là gì?', 'multiple_choice', '2', '3', '4', 'B', 13),
('大 nghĩa là gì?', 'multiple_choice', 'Small', 'Big', 'Good', 'B', 14),
('小 nghĩa là gì?', 'multiple_choice', 'Big', 'Small', 'Good', 'B', 15);

-- Câu điền (16-18)
INSERT INTO questions (question_text, question_type, correct_answer, order_number) VALUES
('"Hello" trong tiếng Trung là gì? (gõ pinyin)', 'fill_in', 'ni hao', 16),
('"Thank you" trong tiếng Trung là gì? (gõ pinyin)', 'fill_in', 'xie xie', 17),
('"Goodbye" trong tiếng Trung là gì? (gõ pinyin)', 'fill_in', 'zai jian', 18);

-- Câu tự luận (19-20)
INSERT INTO questions (question_text, question_type, order_number) VALUES
('Viết 5 từ tiếng Trung bạn biết và nghĩa của chúng', 'essay', 19),
('Tại sao bạn muốn học tiếng Trung?', 'essay', 20);
```

### HSK 2 (order_number 21-40)

```sql
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('昨天 nghĩa là gì?', 'multiple_choice', 'Yesterday', 'Today', 'Tomorrow', 'A', 21),
('今天 nghĩa là gì?', 'multiple_choice', 'Yesterday', 'Today', 'Tomorrow', 'B', 22),
('明天 nghĩa là gì?', 'multiple_choice', 'Yesterday', 'Today', 'Tomorrow', 'C', 23),
-- ... thêm 17 câu nữa đến câu 40
('Viết 1 đoạn văn ngắn giới thiệu bản thân bằng tiếng Trung', 'essay', 40);
```

### HSK 3 (order_number 41-60)

```sql
INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('虽然...但是... có nghĩa là gì?', 'multiple_choice', 'Although...but...', 'Because...so...', 'If...then...', 'A', 41),
-- ... thêm câu 42-60
```

### HSK 4, 5, 6 tương tự
Tiếp tục với các câu hỏi nâng cao hơn cho HSK 4 (61-80), HSK 5 (81-100), HSK 6 (101-120).

---

## 🎯 CÁCH HOẠT ĐỘNG

### 1. Màn hình chọn trình độ
```
┌─────────────────────────────────┐
│ VUI LÒNG CHỌN TRÌNH ĐỘ MUỐN TEST│
├─────────────────────────────────┤
│  [HSK 1]   [HSK 2]   [HSK 3]    │
│  Cơ bản    Sơ cấp    Trung cấp  │
│                                  │
│  [HSK 4]   [HSK 5]   [HSK 6]    │
│  Trung cấp Trung cấp    Nâng cao│
│            cao                   │
├─────────────────────────────────┤
│        [BẮT ĐẦU] (disabled)     │
└─────────────────────────────────┘
```

### 2. Khi chọn HSK
- Click vào 1 level → Button "BẮT ĐẦU" được enable
- Click "BẮT ĐẦU" → Load 20 câu hỏi tương ứng
- Ví dụ: Chọn HSK 2 → Load câu 21-40

### 3. Kết quả hiển thị
```
HSK 2 - Xuất sắc
18/18 điểm
```

---

## 📊 QUERY SUPABASE

Khi user chọn HSK level, hệ thống sẽ query:

```javascript
// HSK 1: order_number 1-20
.gte('order_number', 1)
.lte('order_number', 20)

// HSK 2: order_number 21-40
.gte('order_number', 21)
.lte('order_number', 40)

// HSK 3: order_number 41-60
.gte('order_number', 41)
.lte('order_number', 60)

// ... và tiếp tục
```

---

## ✅ CHECKLIST SETUP

- [ ] Tạo đủ 120 câu hỏi trong database (20 câu x 6 level)
- [ ] HSK 1: Câu 1-20
- [ ] HSK 2: Câu 21-40
- [ ] HSK 3: Câu 41-60
- [ ] HSK 4: Câu 61-80
- [ ] HSK 5: Câu 81-100
- [ ] HSK 6: Câu 101-120
- [ ] Test từng level xem có load đúng 20 câu không

---

## 🐛 TROUBLESHOOTING

### Vấn đề: Không load được câu hỏi cho HSK X
**Giải pháp:**
```sql
-- Kiểm tra có câu hỏi trong range không
SELECT COUNT(*) FROM questions 
WHERE order_number >= 21 AND order_number <= 40;
-- Phải trả về 20
```

### Vấn đề: Button "BẮT ĐẦU" bị disabled
**Nguyên nhân:** Chưa chọn level
**Giải pháp:** Click vào 1 trong 6 level HSK

### Vấn đề: Muốn thêm level khác
**Sửa code tại:**
```html
<div class="level-option" data-level="7" data-range="121-140">
    <div class="level-name">HSK 7</div>
    <div class="level-desc">Chuyên nghiệp</div>
</div>
```

---

## 💡 GỢI Ý

1. **HSK 1-2:** Câu hỏi cơ bản về từ vựng, chào hỏi
2. **HSK 3-4:** Ngữ pháp trung cấp, câu ghép
3. **HSK 5-6:** Thành ngữ, văn học, nâng cao

**Mỗi level nên có:**
- 15 câu trắc nghiệm
- 3 câu điền
- 2 câu tự luận
