'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;

function addLeadingZero(num, targetLength) {
  return num.toString().padStart(targetLength, '0');
}

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

const startBtn = document.querySelector('button.start-btn');
const inputDate = document.querySelector('input#datetime-picker');

const dataDays = document.querySelector('span.value[data-days]');
const dataHours = document.querySelector('span.value[data-hours]');
const dataMinutes = document.querySelector('span.value[data-minutes]');
const dataSeconds = document.querySelector('span.value[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= Date.now()) {
      startBtn.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      userSelectedDate = selectedDates[0];
      startBtn.disabled = false;
    }
  },
};

flatpickr('input#datetime-picker', options);

startBtn.addEventListener('click', onStartBtn);

function onStartBtn(event) {
  startBtn.disabled = true;
  inputDate.disabled = true;

  const intervalId = setInterval(() => {
    const restTime = userSelectedDate.getTime() - Date.now();
    if (restTime >= 0) {
      const { days, hours, minutes, seconds } = convertMs(restTime);
      dataDays.textContent = addLeadingZero(
        days,
        Math.max(days.toString().length, 2)
      );
      dataHours.textContent = addLeadingZero(hours, 2);
      dataMinutes.textContent = addLeadingZero(minutes, 2);
      dataSeconds.textContent = addLeadingZero(seconds, 2);
    } else {
      clearInterval(intervalId);
      inputDate.disabled = false;
      iziToast.success({
        title: 'OK',
        message: `The countdown to the chosen date has ended!`,
      });
    }
  }, 1000);
}
