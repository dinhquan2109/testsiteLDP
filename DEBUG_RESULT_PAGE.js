// =====================================================
// DEBUG SCRIPT - PASTE VÀO CONSOLE SAU KHI NỘP BÀI
// =====================================================

console.log('=== DEBUG RESULT PAGE ===');

// 1. Check grids
const listeningGrid = document.getElementById('listeningGrid');
const readingGrid = document.getElementById('readingGrid');
const aiSection = document.getElementById('aiFeedbackSection');
const aiContent = document.getElementById('aiFeedbackContent');

console.log('1. Elements check:');
console.log('   listeningGrid:', listeningGrid);
console.log('   readingGrid:', readingGrid);
console.log('   aiSection:', aiSection);
console.log('   aiContent:', aiContent);

// 2. Check if grids have items
if (listeningGrid) {
    console.log('2. Listening grid:');
    console.log('   Children count:', listeningGrid.children.length);
    console.log('   HTML:', listeningGrid.innerHTML.substring(0, 200));
}

if (readingGrid) {
    console.log('3. Reading grid:');
    console.log('   Children count:', readingGrid.children.length);
    console.log('   HTML:', readingGrid.innerHTML.substring(0, 200));
}

// 3. Check AI section
if (aiSection) {
    console.log('4. AI section:');
    console.log('   Display:', aiSection.style.display);
    console.log('   Visible:', aiSection.offsetHeight > 0);
}

// 4. Check if functions exist
console.log('5. Functions:');
console.log('   renderAnswersGrid:', typeof renderAnswersGrid);
console.log('   getAIFeedback:', typeof getAIFeedback);

// 5. Check questions
console.log('6. Questions data:');
console.log('   listeningQuestions:', listeningQuestions?.length);
console.log('   readingQuestions:', readingQuestions?.length);
console.log('   writingQuestions:', writingQuestions?.length);

// 6. Check user answers
console.log('7. User answers:');
console.log('   Total answers:', Object.keys(userAnswers).length);
console.log('   Answers:', userAnswers);

console.log('\n=== END DEBUG ===');
console.log('\n💡 HÀNH ĐỘNG:');
console.log('Nếu grids.children.length = 0 → renderAnswersGrid() chưa chạy');
console.log('Nếu aiSection.display = "none" → getAIFeedback() chưa chạy hoặc không có essay');
