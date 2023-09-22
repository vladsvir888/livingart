function materialSlider() {
  const sliderElements = document.querySelectorAll('.materials-slider__slider');

  if (!sliderElements.length) return;

  sliderElements.forEach((sliderElement) => {
    const sliderParams = {
      slidesPerView: 2,
      spaceBetween: 10,
      breakpoints: {
        601: {
          slidesPerView: 3,
        },
        1025: {
          slidesPerView: 4,
        },
        1401: {
          slidesPerView: 6,
        },
      },
    };

    Object.assign(sliderElement, sliderParams);
    sliderElement.initialize();
  });
}

export default materialSlider;
