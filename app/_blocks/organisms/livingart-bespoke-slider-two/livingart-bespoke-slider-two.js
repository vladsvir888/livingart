function bespokeSlider2() {
  const sliderElement = document.querySelector('.bespoke-slider-two__slider');

  if (!sliderElement) return;

  const sliderParams = {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      prevEl: sliderElement?.querySelector('.cursor-nav-button--prev'),
      nextEl: sliderElement?.querySelector('.cursor-nav-button--next'),
    },
    breakpoints: {
      1201: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default bespokeSlider2;
