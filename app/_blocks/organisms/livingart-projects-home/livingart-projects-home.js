function projectsHomeSlider() {
  const sliderElement = document.querySelector('.projects-home__slider');

  if (!sliderElement) return;

  const sliderParams = {
    speed: 800,
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      prevEl: '.projects-home__nav-button--prev',
      nextEl: '.projects-home__nav-button--next',
    },
    pagination: {
      el: '.projects-home__pagination',
    },
    breakpoints: {
      601: {
        slidesPerView: 3,
      },
      1025: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
      },
      1201: {
        slidesPerView: 'auto',
        slidesPerGroup: 4,
      },
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default projectsHomeSlider;
