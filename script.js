let startTime, elapsedTime = 0, timerInterval;
let running = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

function formatTime(ms) {
    let hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    let milliseconds =Math.floor ((ms%1000)/10);

    return `${String(hours).padStart(2, '0')}:
            ${String(minutes).padStart(2, '0')}:
            ${String(seconds).padStart(2, '0')}:
            ${String(milliseconds).padStart(2,'0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startStop() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
        startStopBtn.textContent = "Start";
    } else {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1);
        running = true;
        startStopBtn.textContent = "Stop";
    }
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    updateDisplay();
    startStopBtn.textContent = "Start";
    laps.innerHTML = "";
}

function lap() {
    if (running) {
        const lapTime = formatTime(elapsedTime);
        const lapElement = document.createElement("li");
        lapElement.className = "lap";
        lapElement.textContent = lapTime;
        laps.appendChild(lapElement);
    }
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);

updateDisplay();

  





   



