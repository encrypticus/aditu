const banner = document.querySelector('.banner');
const toggles = banner.querySelectorAll('.banner__toggle');
const slides = banner.querySelector('.banner__slides');
const togglesLength = toggles.length;
const { forEach } = Array.prototype;
const touchEventDispatcher = new Hammer(slides);
let percentForMarginLeft = 0;

touchEventDispatcher.on('swipeleft', () => {
  percentForMarginLeft -= 100;

  if (percentForMarginLeft < -400) {
    percentForMarginLeft = -400;
    return;
  }

  slides.style.marginLeft = `${percentForMarginLeft}%`;

  let currentButton = Math.abs((percentForMarginLeft));
  currentButton = String(currentButton).substr(0, 1);

  for (let i = 0; i < togglesLength; i += 1) {
    toggles[i].classList.remove('banner__toggle_active');
  }

  toggles[currentButton].classList.add('banner__toggle_active');
});

touchEventDispatcher.on('swiperight', () => {
  percentForMarginLeft += 100;

  if (percentForMarginLeft > 0) {
    percentForMarginLeft = 0;
    return;
  }

  slides.style.marginLeft = `${percentForMarginLeft}%`;

  let currentButton = Math.abs((percentForMarginLeft));
  currentButton = String(currentButton).substr(0, 1);

  for (let i = 0; i < togglesLength; i += 1) {
    toggles[i].classList.remove('banner__toggle_active');
  }

  toggles[currentButton].classList.add('banner__toggle_active');
});

forEach.call(toggles, (toggle, index) => {
  toggle.addEventListener('click', () => {
    for (let i = 0; i < togglesLength; i += 1) {
      toggles[i].classList.remove('banner__toggle_active');
    }

    toggle.classList.add('banner__toggle_active');

    const left = -100 * index;
    percentForMarginLeft = left;
    const marginLeft = `${left}%`;

    slides.style.marginLeft = marginLeft;
  });
});
