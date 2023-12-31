function bespokeSlider() {
  const sliderElements = document.querySelectorAll('.bespoke-slider__slider');

  if (!sliderElements.length) return;

  sliderElements.forEach((sliderElement) => {
    const sliderParams = {
      speed: 800,
      navigation: {
        prevEl: sliderElement?.querySelector('.cursor-nav-button--prev'),
        nextEl: sliderElement?.querySelector('.cursor-nav-button--next'),
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    };

    Object.assign(sliderElement, sliderParams);
    sliderElement.initialize();
  });
}

export default bespokeSlider;
