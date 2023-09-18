// Get elements for countdown
const minutesElm = document.getElementById("minutes");
const secondsElm = document.getElementById("seconds");

const startBtn = document.querySelector(".start-button");
const pauseBtn = document.querySelector(".pause-button");
const restartBtn = document.querySelector(".restart-button");
const hiddenBtns = document.querySelector(".hidden-buttons");


// Define initial values
let minutes = 25;
let seconds = 0;
let countdownInterval;

// update the display so 0 is shown if minutes or seconds are < 10
function updateDisplay() {
    minutesElm.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsElm.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

// Countdown starts when Start button is clicked
startBtn.addEventListener("click", () => {
    startPomodoro();
    startBtn.style.display = "none";
    hiddenBtns.style.display = "block";
})

// Countdown function
function startPomodoro() {
    countdownInterval = setInterval(() => {
        if (seconds === 0) {
            // Countdown stops if time runs out
            if (minutes === 0) {
                clearInterval(countdownInterval);
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);

}

// Countdown stops when Pause button is clicked 
pauseBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    hiddenBtns.style.display = "none";
    startBtn.style.display = "block";
    // startBtn.innerHTML = "Continue";
})

// Countdown resets to initial value when Restart button is clicked
restartBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    minutes = 25;
    seconds = 0;
    updateDisplay();

    hiddenBtns.style.display = "none";
    startBtn.style.display = "block";
})


