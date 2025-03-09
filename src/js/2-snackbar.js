import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector('[name="delay"]');
const states = document.querySelectorAll('[name="state"]');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delayValue = Number(delayInput.value);
  const checkedValue = Array.from(states).find(elem => elem.checked);

  const promiseMap = {
    'rejected': () => Promise.reject().catch(
      () => iziToast.error({ message: `✅ Rejected promise in ${delayValue}ms`})
    ),
    'fulfilled': () => Promise.resolve().then(
      () => iziToast.success({ message: `❌ Fulfilled promise in ${delayValue}ms`})
    )
  }

  setTimeout(() => {
    promiseMap[checkedValue.value]()
  }, delayValue);
});