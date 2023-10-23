import { Grid } from 'swiper/modules';

function projectsSlider() {
  const sliderElement = document.querySelector('.projects');

  if (!sliderElement) return;

  const sliderParams = {
    modules: [Grid],
    slidesPerView: 1,
    spaceBetween: 11,
    grid: {
      rows: 2,
      fill: 'row',
    },
    navigation: {
      prevEl: '.nav-buttons__button--prev',
      nextEl: '.nav-buttons__button--next',
    },
    breakpoints: {
      601: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      901: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1201: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default projectsSlider;
