document.addEventListener('DOMContentLoaded', function() {
    const contrastToggle = document.getElementById('contrast-toggle');
    const fontIncrease = document.getElementById('font-increase');
    const fontDecrease = document.getElementById('font-decrease');
    const ttsButton = document.getElementById('text-to-speech');
    const body = document.body;
    const html = document.documentElement;

    // 1. High Contrast Toggle
    contrastToggle.addEventListener('click', () => {
        body.classList.toggle('high-contrast');
    });

    // 2. Font Size Controls
    fontIncrease.addEventListener('click', () => {
        let currentSize = parseFloat(window.getComputedStyle(html).fontSize);
        if (currentSize < 22) { // Set a max size
            html.style.fontSize = (currentSize + 1) + 'px';
        }
    });

    fontDecrease.addEventListener('click', () => {
        let currentSize = parseFloat(window.getComputedStyle(html).fontSize);
        if (currentSize > 14) { // Set a min size
                html.style.fontSize = (currentSize - 1) + 'px';
        }
    });
    
    // 3. Text-to-Speech
    let isSpeaking = false;
    ttsButton.addEventListener('click', () => {
        if (!isSpeaking) {
            const textToRead = document.querySelector('main').innerText;
            const utterance = new SpeechSynthesisUtterance(textToRead);
            speechSynthesis.speak(utterance);
            isSpeaking = true;
            ttsButton.innerHTML = '<i class="fa-solid fa-stop"></i>'; // Change icon to 'stop'
            
            utterance.onend = function() {
                isSpeaking = false;
                ttsButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // Reset icon
            };
        } else {
            speechSynthesis.cancel();
            isSpeaking = false;
            ttsButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // Reset icon
        }
    });
});

// --- Mobile menu toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "block";
    }
    else {
        mobileMenu.style.display = 'none';
    }
});