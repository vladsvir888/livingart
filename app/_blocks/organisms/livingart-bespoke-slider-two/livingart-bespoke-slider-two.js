function bespokeSlider2() {
  const sliderElements = document.querySelectorAll('.bespoke-slider-two__slider');

  if (!sliderElements.length) return;

  sliderElements.forEach((sliderElement) => {
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
  });
}

export default bespokeSlider2;
