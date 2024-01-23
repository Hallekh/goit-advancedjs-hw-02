import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// Функція для оновлення інтерфейсу таймера
function updateTimer(endTime) {
  const timeInterval = setInterval(function () {
    const currentTime = new Date().getTime();
    const remainingTime = endTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(timeInterval);
      startButton.disabled = true;
      iziToast.success({
        title: 'Time is up!',
        position: 'topRight',
      });
    } else {
      const { days, hours, minutes, seconds } = convertMs(remainingTime);

      daysElem.textContent = addLeadingZero(days);
      hoursElem.textContent = addLeadingZero(hours);
      minutesElem.textContent = addLeadingZero(minutes);
      secondsElem.textContent = addLeadingZero(seconds);
    }
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const flatpickrInstance = flatpickr(datetimePicker, options);

startButton.addEventListener('click', function () {
  flatpickrInstance.close();
  const selectedDate = flatpickrInstance.selectedDates[0];

  if (selectedDate) {
    startButton.disabled = true;
    updateTimer(selectedDate.getTime());
  }
  if (selectedDate < new Date()) {
    iziToast.error({
      title: 'Please choose a date in the future',
      position: 'topRight',
    });
    startButton.disabled = true;
  } else {
    startButton.disabled = false;
    updateTimer(selectedDate.getTime());
  }
});
