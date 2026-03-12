let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;
let isRunning = false;
const display = document.getElementById('timerDisplay');
const startButton = document.getElementById('btn-start');
const stopButton = document.getElementById('btn-stop');
const resetButton = document.getElementById('btn-reset');
const saveButton = document.getElementById('btn-save');

function updateDisplay() {
  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedHours = String(hours).padStart(2, '0');
  display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

startButton.addEventListener('click', function() {
  if (isRunning) return;

  isRunning = true;
  timerInterval = setInterval(function() {
    seconds++;
    if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
}
    updateDisplay();
  }, 1000);
});

resetButton.addEventListener('click', function() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
});

stopButton.addEventListener('click', function() {
  if (!isRunning) return;

  clearInterval(timerInterval);
  isRunning = false;
  console.log('Стоп');
});
