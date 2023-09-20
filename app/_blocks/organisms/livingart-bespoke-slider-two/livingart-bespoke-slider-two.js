function bespokeSlider2() {
  const sliderElement = document.querySelector('.bespoke-slider-two__slider');

  if (!sliderElement) return;

  const sliderParams = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
      prevEl: sliderElement?.querySelector('.cursor-nav-button--prev'),
      nextEl: sliderElement?.querySelector('.cursor-nav-button--next'),
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default bespokeSlider2;
