let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let lapsList = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function timer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function start() {
  if (interval !== null) clearInterval(interval);
  interval = setInterval(timer, 1000);
}

function pause() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  lapsList.innerHTML = '';
}

function lap() {
  const lapTime = display.innerText;
  const li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  lapsList.appendChild(li);
}
