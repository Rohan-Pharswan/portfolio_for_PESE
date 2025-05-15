const phrases = ["Web Developer", "Software Developer", "Web designer", "Script writer"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
const typingTextSpan = document.querySelector('.typing-text span');

function type() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        typingTextSpan.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(deleteText, 1000); // Wait before deleting
    }
}

function deleteText() {
    if (currentCharIndex > 0) {
        typingTextSpan.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(deleteText, 50); // Adjust deleting speed here
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        setTimeout(type, 500); // Wait before typing the next phrase
    }
}

// Start the typing effect
type();