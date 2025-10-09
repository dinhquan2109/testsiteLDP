// =====================================================
// DEBUG SCRIPT - PASTE VÀO BROWSER CONSOLE (F12)
// =====================================================

console.log('=== BẮT ĐẦU DEBUG ===');

// 1. Kiểm tra section hiện tại
console.log('1. Current Section:', typeof currentSection !== 'undefined' ? currentSection : 'UNDEFINED');

// 2. Kiểm tra reading questions
console.log('2. Reading Questions:', typeof readingQuestions !== 'undefined' ? readingQuestions : 'UNDEFINED');
if (typeof readingQuestions !== 'undefined') {
    console.log('   - Số lượng:', readingQuestions.length);
    console.log('   - Câu đầu:', readingQuestions[0]);
}

// 3. Kiểm tra DOM elements
const inputs = document.querySelectorAll('.text-input');
const containers = document.querySelectorAll('.text-input-container');

console.log('3. DOM Elements:');
console.log('   - Text inputs:', inputs.length);
console.log('   - Containers:', containers.length);

// 4. Kiểm tra CSS của containers
if (containers.length > 0) {
    const firstContainer = containers[0];
    const styles = window.getComputedStyle(firstContainer);
    console.log('4. CSS của container đầu tiên:');
    console.log('   - display:', styles.display);
    console.log('   - visibility:', styles.visibility);
    console.log('   - opacity:', styles.opacity);
    console.log('   - height:', styles.height);
} else {
    console.log('4. KHÔNG TÌM THẤY CONTAINER!');
}

// 5. Kiểm tra questions container
const questionsContainer = document.getElementById('questionsContainer');
if (questionsContainer) {
    console.log('5. Questions Container HTML (first 500 chars):');
    console.log(questionsContainer.innerHTML.substring(0, 500));
} else {
    console.log('5. KHÔNG TÌM THẤY QUESTIONS CONTAINER!');
}

// 6. Kiểm tra tất cả elements trong phần 2
const questionItems = document.querySelectorAll('.question-item');
console.log('6. Question Items:', questionItems.length);
if (questionItems.length > 0) {
    console.log('   - HTML của item đầu:');
    console.log(questionItems[0].innerHTML);
}

// 7. Test render manually
console.log('7. Test render phần 2:');
if (typeof readingQuestions !== 'undefined' && readingQuestions.length > 0) {
    const testQ = readingQuestions[0];
    console.log('   - Question text:', testQ.question_text);
    console.log('   - Has option_a?', testQ.option_a ? 'YES (SAI!)' : 'NO (ĐÚNG)');
    console.log('   - Has correct_answer?', testQ.correct_answer ? 'YES (ĐÚNG)' : 'NO (SAI!)');
    console.log('   - Section:', testQ.section);
}

// 8. Kiểm tra CSS class definition
const testDiv = document.createElement('div');
testDiv.className = 'text-input-container';
document.body.appendChild(testDiv);
const testStyles = window.getComputedStyle(testDiv);
console.log('8. CSS định nghĩa của .text-input-container:');
console.log('   - display:', testStyles.display);
document.body.removeChild(testDiv);

console.log('=== KẾT THÚC DEBUG ===');
console.log('');
console.log('📋 CÁCH ĐỌC KẾT QUẢ:');
console.log('- Nếu "Text inputs: 0" → Database sai HOẶC code không render');
console.log('- Nếu "display: none" → CSS vẫn ẩn, cần hard refresh');
console.log('- Nếu "Has option_a? YES" → Database chưa đúng, cần update');
console.log('');
console.log('💡 GIẢI PHÁP:');
console.log('1. Nếu DB sai: Chạy file SQL_KIỂM_TRA.sql');
console.log('2. Nếu CSS sai: Hard refresh (Ctrl+Shift+R)');
console.log('3. Nếu vẫn lỗi: Xóa cache browser hoặc dùng Incognito');
