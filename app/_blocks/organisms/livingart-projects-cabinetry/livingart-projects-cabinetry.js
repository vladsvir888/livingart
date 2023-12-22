function projectsCabinetrySlider() {
  const sliderElement = document.querySelector('.projects-cabinetry__slider');

  if (!sliderElement) return;

  const sliderParams = {
    speed: 800,
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      prevEl: sliderElement?.querySelector('.cursor-nav-button--prev'),
      nextEl: sliderElement?.querySelector('.cursor-nav-button--next'),
    },
    breakpoints: {
      601: {
        slidesPerView: 2,
      },
      901: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default projectsCabinetrySlider;
