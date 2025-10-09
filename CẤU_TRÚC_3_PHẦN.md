# CẤU TRÚC BÀI TEST 3 PHẦN

## 📋 TỔNG QUAN

Bài test được chia thành **3 phần**:

| Phần | Tên | Số câu | Loại câu hỏi | Đặc biệt |
|------|-----|--------|--------------|----------|
| **Phần 1** | NGHE (Listening) | 5 câu | Multiple choice | 1 file audio, chỉ nghe 2 lần |
| **Phần 2** | ĐỌC HIỂU (Reading) | 5 câu | Multiple choice | 1 đoạn văn để đọc |
| **Phần 3** | VIẾT (Writing) | 1 bài | Essay | Bài tự luận, đếm số từ |

**Tổng cộng: 11 câu** (10 câu trắc nghiệm + 1 bài tự luận)

---

## 🗄️ CẤU TRÚC DATABASE

### Bảng `questions` cần có thêm các cột:

```sql
CREATE TABLE questions (
  id BIGSERIAL PRIMARY KEY,
  question_text TEXT NOT NULL,
  question_type TEXT DEFAULT 'multiple_choice',  -- Không dùng nữa, dựa vào section
  section TEXT,  -- 'listening', 'reading', 'writing' (OPTIONAL - có thể dùng order_number)
  option_a TEXT,
  option_b TEXT,
  option_c TEXT,
  correct_answer TEXT,
  audio_url TEXT,  -- CHỈ câu đầu tiên của phần Listening
  reading_passage TEXT,  -- CHỈ câu đầu tiên của phần Reading
  order_number INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 📊 VÍ DỤ DỮ LIỆU - HSK 1 (order_number 1-11)

### PHẦN 1: NGHE (Câu 1-5, order_number 1-5)

```sql
-- Câu 1: Có audio_url (file audio chung cho cả 5 câu)
INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, audio_url, order_number, section) 
VALUES 
('Theo đoạn hội thoại, họ đang nói về chủ đề gì?', 
 'Thời tiết', 'Đồ ăn', 'Du lịch', 'A', 
 'https://your-storage.com/hsk1-listening.mp3', 
 1, 'listening');

-- Câu 2-5: Không có audio_url (dùng chung audio từ câu 1)
INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, order_number, section) VALUES
('Người đàn ông cảm thấy thế nào?', 'Vui', 'Buồn', 'Giận', 'A', 2, 'listening'),
('Họ hẹn gặp nhau lúc mấy giờ?', '8 giờ', '9 giờ', '10 giờ', 'B', 3, 'listening'),
('Địa điểm gặp mặt là ở đâu?', 'Nhà hàng', 'Công viên', 'Trường học', 'C', 4, 'listening'),
('Ai là người đề xuất gặp mặt?', 'Nam', 'Nữ', 'Cả hai', 'A', 5, 'listening');
```

### PHẦN 2: ĐỌC HIỂU (Câu 6-10, order_number 6-10)

```sql
-- Câu 6: Có reading_passage (đoạn văn chung cho cả 5 câu)
INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, reading_passage, order_number, section) 
VALUES 
('Đoạn văn chủ yếu nói về gì?', 
 'Học tiếng Trung', 'Văn hóa Trung Quốc', 'Du lịch Trung Quốc', 'A',
 '学习中文是一个很有趣的过程。刚开始的时候，很多人觉得中文很难，因为要学习汉字和声调。但是，如果你每天练习，你会发现中文其实不难。看电影、听音乐、和中国朋友聊天都是很好的学习方法。

(Học tiếng Trung là một quá trình rất thú vị. Lúc mới bắt đầu, nhiều người thấy tiếng Trung khó vì phải học chữ Hán và thanh điệu. Nhưng nếu bạn luyện tập mỗi ngày, bạn sẽ thấy tiếng Trung thực ra không khó. Xem phim, nghe nhạc, trò chuyện với bạn Trung Quốc đều là phương pháp học tốt.)',
 6, 'reading');

-- Câu 7-10: Không có reading_passage (dùng chung đoạn văn từ câu 6)
INSERT INTO questions (question_text, option_a, option_b, option_c, correct_answer, order_number, section) VALUES
('Theo đoạn văn, điều gì khó nhất khi học tiếng Trung?', 'Ngữ pháp', 'Chữ Hán và thanh điệu', 'Từ vựng', 'B', 7, 'reading'),
('Tác giả khuyên nên làm gì?', 'Học nhiều giờ mỗi ngày', 'Luyện tập hàng ngày', 'Đi du lịch Trung Quốc', 'B', 8, 'reading'),
('Phương pháp nào KHÔNG được đề cập?', 'Xem phim', 'Đọc sách', 'Nghe nhạc', 'B', 9, 'reading'),
('Thái độ của tác giả về việc học tiếng Trung là gì?', 'Bi quan', 'Tích cực', 'Trung lập', 'B', 10, 'reading');
```

### PHẦN 3: VIẾT (Câu 11, order_number 11)

```sql
INSERT INTO questions (question_text, order_number, section) 
VALUES 
('Viết một đoạn văn ngắn (100-150 từ) giới thiệu bản thân bằng tiếng Trung. Hãy bao gồm: tên, tuổi, quốc tịch, sở thích và lý do học tiếng Trung.', 
 11, 'writing');
```

---

## 🎯 LOGIC LOAD CÂU HỎI

### Với mỗi HSK level:

**HSK 1:** order_number 1-11
- Listening: 1-5
- Reading: 6-10
- Writing: 11

**HSK 2:** order_number 12-22
- Listening: 12-16
- Reading: 17-21
- Writing: 22

**HSK 3:** order_number 23-33
- Listening: 23-27
- Reading: 28-32
- Writing: 33

... và tiếp tục tương tự

### Query trong code:

```javascript
// Load questions for HSK 1 (order 1-11)
const { data: questions } = await supabase
    .from('questions')
    .gte('order_number', 1)
    .lte('order_number', 11)
    .order('order_number');

// Separate by section
listeningQuestions = questions.filter(q => q.order_number <= 5);
readingQuestions = questions.filter(q => q.order_number > 5 && q.order_number <= 10);
writingQuestions = questions.filter(q => q.order_number > 10);
```

---

## 🎧 CÁCH HOẠT ĐỘNG AUDIO

### Phần Nghe:
1. **Chỉ câu đầu tiên** (order_number 1) có `audio_url`
2. File audio này được dùng chung cho cả 5 câu
3. **Giới hạn:** Chỉ phát được **TỐI ĐA 2 LẦN**
4. Sau 2 lần, audio player bị ẩn

```javascript
// Audio play count tracking
let audioPlayCount = 0;
const MAX_AUDIO_PLAYS = 2;

audio.addEventListener('play', function() {
    audioPlayCount++;
    if (audioPlayCount >= MAX_AUDIO_PLAYS) {
        this.pause();
        // Hide audio player
    }
});
```

---

## 📖 CÁCH HOẠT ĐỘNG READING PASSAGE

### Phần Đọc:
1. **Chỉ câu đầu tiên** (order_number 6) có `reading_passage`
2. Đoạn văn này hiển thị ở đầu phần, dùng chung cho cả 5 câu
3. Đoạn văn có thể dài, sử dụng `TEXT` type
4. Có thể format với `\n` để xuống dòng

---

## ✍️ CÁCH HOẠT ĐỘNG WRITING

### Phần Viết:
1. Chỉ có **1 câu** (order_number 11)
2. `question_type` không cần (hoặc để 'essay')
3. `correct_answer` phải là **NULL**
4. Hiển thị:
   - Đề bài
   - Textarea lớn
   - Đếm số từ real-time

---

## 📊 TỔNG KẾT SETUP DATABASE

### Cho mỗi HSK level (1-6), cần:

**11 câu hỏi** với cấu trúc:

```
HSK 1:  order_number 1-11
HSK 2:  order_number 12-22
HSK 3:  order_number 23-33
HSK 4:  order_number 34-44
HSK 5:  order_number 45-55
HSK 6:  order_number 56-66
```

**Tổng: 66 câu hỏi** (cho 6 level)

### Checklist cho mỗi level:

- [ ] 1 file audio (.mp3) cho phần Listening
- [ ] 1 đoạn văn (text) cho phần Reading
- [ ] 5 câu Listening (order: x+0 đến x+4)
- [ ] 5 câu Reading (order: x+5 đến x+9)
- [ ] 1 câu Writing (order: x+10)

---

## 🎨 GIAO DIỆN

### Phần 1 - Nghe:
```
┌─────────────────────────────────────┐
│  🎧 PHẦN 1: NGHE (Listening)        │
│  Nghe file audio và trả lời 5 câu  │
├─────────────────────────────────────┤
│  ⚠️ File audio chỉ được nghe tối đa │
│     2 lần (Đã nghe: 0/2)            │
│  [▶️ Audio Player]                  │
├─────────────────────────────────────┤
│  1. Theo đoạn hội thoại...          │
│     ○ A. Thời tiết                  │
│     ● B. Đồ ăn                      │
│     ○ C. Du lịch                    │
│                                     │
│  2. Người đàn ông cảm thấy...       │
│     ...                             │
└─────────────────────────────────────┘
```

### Phần 2 - Đọc:
```
┌─────────────────────────────────────┐
│  📖 PHẦN 2: ĐỌC HIỂU (Reading)      │
│  Đọc đoạn văn và trả lời 5 câu     │
├─────────────────────────────────────┤
│  Đọc đoạn văn sau:                  │
│  ┌───────────────────────────────┐  │
│  │ 学习中文是一个很有趣的过程... │  │
│  │ (Học tiếng Trung là...)      │  │
│  └───────────────────────────────┘  │
├─────────────────────────────────────┤
│  6. Đoạn văn chủ yếu nói về gì?    │
│     ...                             │
└─────────────────────────────────────┘
```

### Phần 3 - Viết:
```
┌─────────────────────────────────────┐
│  ✍️ PHẦN 3: VIẾT (Writing)          │
│  Viết bài tự luận theo yêu cầu      │
├─────────────────────────────────────┤
│  Đề bài:                            │
│  Viết một đoạn văn ngắn...          │
├─────────────────────────────────────┤
│  [Textarea lớn để viết]             │
│                                     │
│                                     │
│                        Số từ: 145  │
└─────────────────────────────────────┘
```

---

## 🔧 TROUBLESHOOTING

### Audio không play được
→ Kiểm tra `audio_url` trong câu đầu tiên của phần Listening

### Đoạn văn không hiển thị
→ Kiểm tra `reading_passage` trong câu đầu tiên của phần Reading

### Bài viết không đếm từ
→ Check console, có thể do textarea không có `data-question` attribute

### Navigation button bị disabled
→ Phải trả lời hết 5 câu mới được next section
