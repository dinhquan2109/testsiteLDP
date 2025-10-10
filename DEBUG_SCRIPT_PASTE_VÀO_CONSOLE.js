// =====================================================
// DEBUG SCRIPT - PASTE VÀO CONSOLE (F12)
// =====================================================

console.log('=== DEBUG AUDIO COUNT ===');

// 1. Check current state
console.log('📊 audioPlayCount:', audioPlayCount);
console.log('📊 MAX_AUDIO_PLAYS:', MAX_AUDIO_PLAYS);
console.log('🚩 audioEndedFlag:', audioEndedFlag);

// 2. Check audio element
const audio = document.getElementById('mainAudio');
if (audio) {
    console.log('✅ Audio found');
    console.log('   Duration:', audio.duration);
    console.log('   Current:', audio.currentTime);
    console.log('   Paused:', audio.paused);
    console.log('   Ended:', audio.ended);
} else {
    console.log('❌ Audio NOT found');
}

// 3. Manual test
console.log('\n📋 COMMANDS:');
console.log('Check count: checkAudioCount()');
console.log('Reset count: resetAudioCount()');

// 4. Watch for ended event
if (audio) {
    console.log('\n👂 Listening for ended event...');
    audio.addEventListener('ended', function() {
        console.log('🔔 ENDED EVENT DETECTED (via addEventListener)');
        console.log('   Time:', new Date().toLocaleTimeString());
    }, {once: false});
}

console.log('\n✅ Debug script complete');
console.log('Play audio và xem log...');
