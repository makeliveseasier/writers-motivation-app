// Progress Tracker
let progress = 0;
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');

function updateProgress() {
    progress += 500; // Add 500 words each time the user clicks the "Get Started" button (this is just an example).
    if (progress > 10000) progress = 10000;
    progressBar.value = progress;
    progressText.textContent = `${progress}/10,000 words`;
}

document.getElementById('startButton').addEventListener('click', updateProgress);

// Motivational Quote Function
const quotes = [
    "The only way to finish is to start.",
    "Writing is an exploration. You start from nothing and learn as you go.",
    "You don’t have to be great to start, but you have to start to be great."
];

function showQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-text').textContent = randomQuote;
}

showQuote();

// Writing Timer
let timer;
let seconds = 25 * 60; // 25 minutes

function startTimer() {
    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(timer);
            alert("Time's up! Take a break.");
            seconds = 25 * 60; // Reset timer
        } else {
            seconds--;
            let minutes = Math.floor(seconds / 60);
            let remainingSeconds = seconds % 60;
            document.getElementById('timer-display').textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        }
    }, 1000);
}

document.getElementById('start-timer').addEventListener('click', startTimer);
