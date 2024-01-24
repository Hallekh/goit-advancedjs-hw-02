const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

start.addEventListener('click', changeColorHandler);
stop.addEventListener('click', stopChangeColorHandler);
let colorId = null;
stop.disabled = true;
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
