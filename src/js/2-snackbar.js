'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const promiseType = form.elements.state.value;
  const promiseDelay = form.elements.delay.value;

  getNewSnackOrder(promiseDelay, promiseType === 'fulfilled' ? true : false)
    .then(value =>
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${value}ms`,
      })
    )
    .catch(value =>
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${value}ms`,
      })
    );

  form.reset();
}

function getNewSnackOrder(delay, success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
