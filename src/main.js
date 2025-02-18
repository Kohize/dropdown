import './slider.js';
let button = document.querySelector('.dropdown__button');
let content = document.querySelector('.dropdown__content');

button.addEventListener('click', () => {
  content.classList.toggle('is-hidden');
});
