import flatpickr from 'flatpickr';
import iziToast from "izitoast";
import {convertMs} from './helpers.js';
import 'flatpickr/dist/flatpickr.min.css';
import "izitoast/dist/css/iziToast.min.css";

const inputDateField = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const timeElementsMap = {
  seconds: document.querySelector('[data-seconds]'),
  minutes: document.querySelector('[data-minutes]'),
  hours: document.querySelector('[data-hours]'),
  days: document.querySelector('[data-days]'),
}
const pastDateConstraintErrorMessage = 'Please choose a date in the future';
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const [ selectedDate ] = selectedDates;

    if (selectedDate < Date.now()) {
      startButton.disabled = true;

      return iziToast.error({
        message: pastDateConstraintErrorMessage,
        position: 'topRight',
        timeout: 3000
      });
    }

    startButton.disabled = false;
    userSelectedDate = selectedDate;
  }
};

startButton.addEventListener('click', (event) => {
  const timeInterval = setInterval(() => {
    const timeDiff = userSelectedDate.getTime() - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeDiff);
    const timeEnded = timeDiff <= 0;

    if (timeEnded) {
      inputDateField.disabled = false;
      return clearInterval(timeInterval);
    }

    timeElementsMap.days.innerText = addLeadingZero(days);
    timeElementsMap.hours.innerText = addLeadingZero(hours);
    timeElementsMap.minutes.innerText = addLeadingZero(minutes);
    timeElementsMap.seconds.innerText = addLeadingZero(seconds);
  }, 1000);

  startButton.disabled = true;
  inputDateField.disabled = true;
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

flatpickr(inputDateField, options);

