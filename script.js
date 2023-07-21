let timerInterval;
let timerTime = 0;
let stopwatchInterval;
let stopwatchTime = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById('start-timer').disabled = true;
    document.getElementById('pause-timer').disabled = false;
}

function pauseTimer() {
    clearInterval(timerInterval);
    document.getElementById('start-timer').disabled = false;
    document.getElementById('pause-timer').disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerTime = 0;
    document.getElementById('timer-display').textContent = formatTime(timerTime);
    document.getElementById('start-timer').disabled = false;
    document.getElementById('pause-timer').disabled = true;
}

function updateTimer() {
    timerTime++;
    document.getElementById('timer-display').textContent = formatTime(timerTime);
}

function startStopwatch() {
    stopwatchInterval = setInterval(updateStopwatch, 10);
    document.getElementById('start-stopwatch').disabled = true;
    document.getElementById('pause-stopwatch').disabled = false;
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    document.getElementById('start-stopwatch').disabled = false;
    document.getElementById('pause-stopwatch').disabled = true;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').textContent = formatTime(stopwatchTime);
    document.getElementById('start-stopwatch').disabled = false;
    document.getElementById('pause-stopwatch').disabled = true;
}

function updateStopwatch() {
    stopwatchTime++;
    document.getElementById('stopwatch-display').textContent = formatTime(stopwatchTime);
}

function formatTime(time) {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
