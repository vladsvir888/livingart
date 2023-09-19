function bespokeSlider() {
  const sliderElements = document.querySelectorAll('.bespoke-slider__slider');

  if (!sliderElements.length) return;

  sliderElements.forEach((sliderElement) => {
    const sliderParams = {
      spaceBetween: 10,
      navigation: {
        prevEl: sliderElement?.querySelector('.cursor-nav-button--prev'),
        nextEl: sliderElement?.querySelector('.cursor-nav-button--next'),
      },
    };

    Object.assign(sliderElement, sliderParams);
    sliderElement.initialize();
  });
}

export default bespokeSlider;
