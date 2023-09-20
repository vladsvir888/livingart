function projectsCabinetrySlider() {
  const sliderElement = document.querySelector('.projects-cabinetry__slider');

  if (!sliderElement) return;

  const sliderParams = {
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
      prevEl: sliderElement?.querySelector('.cursor-nav-button--prev'),
      nextEl: sliderElement?.querySelector('.cursor-nav-button--next'),
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default projectsCabinetrySlider;
