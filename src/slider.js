let buttonBack = document.querySelector('.slider__previous');
let buttonNext = document.querySelector('.slider__next');
let dots = document.querySelectorAll('.slider__dot');
let currentSlide = document.querySelector('.visible');
let activeDot = document.querySelector('.active');

const moveSlide = (currentElement, nextElement) => {
  currentElement.classList.remove('visible');
  currentElement.classList.add('hidden');
  nextElement.classList.remove('hidden');
  nextElement.classList.add('visible');
};

const moveDots = (currentDot, nextDot) => {
  currentDot.classList.remove('active');
  nextDot.classList.add('active');
};

buttonNext.addEventListener('click', () => {
  let currentSlide = document.querySelector('.visible');
  let nextSlide = currentSlide.nextElementSibling;
  let currentDot = document.querySelector('.active');
  let nextDot = currentDot.nextElementSibling;
  if (currentSlide && nextSlide) {
    moveSlide(currentSlide, nextSlide);
    moveDots(currentDot, nextDot);
  }
});

buttonBack.addEventListener('click', () => {
  let currentSlide = document.querySelector('.visible');
  let previousSlide = currentSlide.previousElementSibling;
  let currentDot = document.querySelector('.active');
  let previousDot = currentDot.previousElementSibling;
  if (currentSlide && previousSlide) {
    moveSlide(currentSlide, previousSlide);
    moveDots(currentDot, previousDot);
  }
});

dots.forEach((el) =>
  el.addEventListener('click', (event) => {
    let slides = document.querySelectorAll('.image');
    slides.forEach((el) => {
      el.classList.add('hidden');
      el.classList.remove('visible');
    });
    let currentDotId = event.currentTarget.getAttribute('data-image');
    let neededSlide = document.querySelector(
      `.image[data-image="${currentDotId}"]`
    );
    let currentSlideId = neededSlide.getAttribute('data-image');
    let neededDot = document.querySelector(
      `.slider__dot[data-image="${currentSlideId}"]`
    );

    dots.forEach((el) => el.classList.remove('active'));
    neededDot.classList.add('active');
    neededSlide.classList.add('visible');
    neededSlide.classList.remove('hidden');
  })
);

const autoSlideSwitch = () => {
  let currentSlide = document.querySelector('.visible');
  let nextSlide = currentSlide.nextElementSibling;
  let currentDot = document.querySelector('.active');
  let nextDot = currentDot.nextElementSibling;
  if (currentSlide && nextSlide) {
    moveSlide(currentSlide, nextSlide);
    moveDots(currentDot, nextDot);
  }
  if (!nextSlide && !nextDot) {
    return;
  }
};

let slides = document.querySelectorAll('.image');

setInterval(autoSlideSwitch, 5000);
