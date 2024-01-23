const start = document.querySelector('.startBtn');
const stop = document.querySelector('.stopBtn');
const body = document.querySelector('body');

start.addEventListener('click', changeColorHandler);
stop.addEventListener('click', stopChangeColorHandler);
let colorId = null;
function changeColorHandler() {
  stop.disabled = false;
  colorId = setInterval(() => {
    const currentColor = getRandomHexColor();
    body.style.backgroundColor = currentColor;
  }, 1000);
  start.disabled = true;
}
function stopChangeColorHandler() {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(colorId);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
