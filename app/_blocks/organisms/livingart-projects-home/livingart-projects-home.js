function projectsHomeSlider() {
  const sliderElement = document.querySelector('.projects-home__slider');

  if (!sliderElement) return;

  const sliderParams = {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      prevEl: '.projects-home__nav-button--prev',
      nextEl: '.projects-home__nav-button--next',
    },
    pagination: {
      el: '.projects-home__pagination',
    },
    breakpoints: {
      901: {
        slidesPerView: 'auto',
      },
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default projectsHomeSlider;
