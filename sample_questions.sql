-- Sample questions for the placement test
-- This file shows how to add different types of questions to your Supabase database

-- ===== MULTIPLE CHOICE QUESTIONS (question_type = 'multiple_choice' or NULL) =====
-- These are traditional multiple choice questions with options A, B, C

INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('It''s windy outside. You should take a _______ with you.', 'multiple_choice', 'coat', 'dress', 'T-shirt', 'A', 1),
('What is the capital of China?', 'multiple_choice', 'Beijing', 'Shanghai', 'Guangzhou', 'A', 2),
('Choose the correct grammar: She _____ to school every day.', 'multiple_choice', 'go', 'goes', 'going', 'B', 3);


-- ===== FILL-IN-THE-BLANK QUESTIONS (question_type = 'fill_in') =====
-- These questions require users to type their answer from the keyboard
-- The correct_answer field contains the expected answer (case-insensitive comparison)

INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('What color is the sky? (Type your answer)', 'fill_in', NULL, NULL, NULL, 'blue', 4),
('Complete the sentence: The sun rises in the _____', 'fill_in', NULL, NULL, NULL, 'east', 5),
('Translate to English: 你好', 'fill_in', NULL, NULL, NULL, 'hello', 6);


-- ===== ESSAY QUESTIONS (question_type = 'essay') =====
-- These are free-form text questions with no correct answer
-- Students type their response and it's saved for teacher review
-- The correct_answer field should be NULL for essay questions

INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, order_number) VALUES
('Describe your motivation for learning Chinese (at least 50 words)', 'essay', NULL, NULL, NULL, NULL, 7),
('Tell us about your future goals and how Chinese language will help you achieve them', 'essay', NULL, NULL, NULL, NULL, 8);


-- ===== AUDIO QUESTIONS (can be combined with any type) =====
-- You can add an audio_url field to any question type
-- The audio player will automatically appear when audio_url is provided

INSERT INTO questions (question_text, question_type, option_a, option_b, option_c, correct_answer, audio_url, order_number) VALUES
('Listen to the audio and choose the correct tone:', 'multiple_choice', 'First tone', 'Second tone', 'Third tone', 'B', 'https://example.com/audio1.mp3', 9),
('Listen and type what you hear:', 'fill_in', NULL, NULL, NULL, '你好吗', 'https://example.com/audio2.mp3', 10);


-- ===== NOTES =====
-- 1. question_type can be: 'multiple_choice', 'fill_in', or 'essay'
-- 2. For fill_in questions, answers are compared case-insensitively with whitespace trimmed
-- 3. Essay questions are not scored - they're for evaluation only
-- 4. order_number determines the sequence of questions
-- 5. The system displays 10 questions per page
-- 6. Students must complete all questions on current page before moving to next page
