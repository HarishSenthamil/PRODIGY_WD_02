
let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const hours = String(Math.floor(time / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
    document.getElementById('startStopBtn').textContent = 'Start';
  } else {
    startTime = Date.now();
    timer = setInterval(updateDisplay, 1000);
    document.getElementById('startStopBtn').textContent = 'Stop';
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('startStopBtn').textContent = 'Start';
}
