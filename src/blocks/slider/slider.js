const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slider__slides');
const buttonLeft = slider.querySelector('.slider__button_left');
const buttonRight = slider.querySelector('.slider__button_right');
let position = 0;
const touchEventDispatcher = new Hammer(slider);

const getMarginStep = function getMarginStep() {
  let step;
  const screenWidth = document.documentElement.clientWidth;

  if (screenWidth > 860) {
    step = 33.30078125;
  }

  if (screenWidth <= 860) {
    step = 50;
  }

  if (screenWidth <= 768) {
    step = 100;
  }

  return step;
};

const moveToLeft = function moveToLeft() {
  const step = getMarginStep();

  switch (step) {
    case 100:
      if (position <= -800) {
        position = -800;
        return;
      }
      break;

    case 50:
      if (position <= -350) {
        position = -350;
        return;
      }
      break;

    case 33.30078125:
      if (position <= -199.8046875) {
        position = -199.8046875;
        return;
      }
      break;

    default: console.log('error');
  }
  position -= step;

  // if (position <= -199.8046875) position = -199.8046875;
  slides.style.marginLeft = position + '%';

  console.log(position);
};

const moveToRight = function moveToRight() {
  const step = getMarginStep();
  position += step;

  if (position >= 0) position = 0;
  slides.style.marginLeft = position + '%';

  console.log(position);
};

const resetLeftMargin = function resetLeftMargin() {
  slides.style.marginLeft = 0;
  position = 0;
};

window.addEventListener('resize', resetLeftMargin);
buttonLeft.addEventListener('click', moveToLeft);
buttonRight.addEventListener('click', moveToRight);
touchEventDispatcher.on('swipeleft', moveToLeft);
touchEventDispatcher.on('swiperight', moveToRight);
