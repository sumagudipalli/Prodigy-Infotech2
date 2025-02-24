let startTime;

let elapsedTime = 0;

let timerInterval;



const display = document.getElementById('display');

const startStopBtn = document.getElementById('startStopBtn');

const resetBtn = document.getElementById('resetBtn');

const lapBtn = document.getElementById('lapBtn');

const laps = document.getElementById('laps');



function formatTime(ms) {

    let hours = Math.floor(ms / 3600000);

    let minutes = Math.floor((ms % 3600000) / 60000);

    let seconds = Math.floor((ms % 60000) / 1000);

    let milliseconds = Math.floor((ms % 1000) / 10);



    return (

        String(hours).padStart(2, '0') + ':' +

        String(minutes).padStart(2, '0') + ':' +

        String(seconds).padStart(2, '0') + ':' +

        String(milliseconds).padStart(2, '0')

    );   

}



function updateDisplay() {

    display.textContent = formatTime(elapsedTime);

}



function startStop() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;

        startStopBtn.textContent = 'Start';

    } else {

        startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(() => {

            elapsedTime = Date.now() - startTime;

            updateDisplay();

        }, 10);

        startStopBtn.textContent = 'Stop';

    }

}



function reset() {

    clearInterval(timerInterval);

    timerInterval = null;

    elapsedTime = 0;

    updateDisplay();

    startStopBtn.textContent = 'Start';

    laps.innerHTML = '';

}



function lap() {

    if (timerInterval) {

        const lapTime = formatTime(elapsedTime);

        const lapElement = document.createElement('div');

        lapElement.className = 'lap';

        lapElement.textContent = lapTime;

        laps.appendChild(lapElement);

    }

}



startStopBtn.addEventListener('click', startStop);

resetBtn.addEventListener('click', reset);

lapBtn.addEventListener('click', lap);



updateDisplay();
