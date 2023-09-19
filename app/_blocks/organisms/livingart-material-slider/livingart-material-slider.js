function materialSlider() {
  const sliderElements = document.querySelectorAll('.materials-slider__slider');

  if (!sliderElements.length) return;

  sliderElements.forEach((sliderElement) => {
    const sliderParams = {
      slidesPerView: 6,
      spaceBetween: 10,
    };

    Object.assign(sliderElement, sliderParams);
    sliderElement.initialize();
  });
}

export default materialSlider;
