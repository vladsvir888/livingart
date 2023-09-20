import { Grid } from 'swiper/modules';

function projectsSlider() {
  const sliderElement = document.querySelector('.projects');

  if (!sliderElement) return;

  const sliderParams = {
    modules: [Grid],
    spaceBetween: 11,
    slidesPerView: 4,
    grid: {
      rows: 2,
      fill: 'row',
    },
    navigation: {
      prevEl: '.projects-block__nav-button--prev',
      nextEl: '.projects-block__nav-button--next',
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default projectsSlider;
