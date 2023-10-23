import { Grid } from 'swiper/modules';

function materialSliderGrid() {
  const sliderElement = document.querySelector('.materials-slider__slider-grid');

  if (!sliderElement) return;

  const sliderParams = {
    modules: [Grid],
    spaceBetween: 10,
    slidesPerView: 2,
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
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      901: {
        slidesPerView: 6,
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

export default materialSliderGrid;
