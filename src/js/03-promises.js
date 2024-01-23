import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstDelay = parseInt(
    document.querySelector('[name="delay"]').value,
    10
  );
  const step = parseInt(document.querySelector('[name="step"]').value, 10);
  const amount = parseInt(document.querySelector('[name="amount"]').value, 10);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, firstDelay + i * step)
      .then(({ position, delay }) => {
        iziToast.success({
          title: `✅ Fulfilled promise ${position}`,
          message: `in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: `❌ Rejected promise ${position}`,
          message: `in ${delay}ms`,
          position: 'topRight',
        });
      });
  }
});
