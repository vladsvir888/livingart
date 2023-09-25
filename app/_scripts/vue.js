// eslint-disable-next-line import/no-extraneous-dependencies
import { createApp, reactive } from 'petite-vue';
import throttle from 'lodash.throttle';

const store = reactive({
  isBespokeVideoPlay: true,
  isHeroVideoPlay: true,
  isHeaderHasActiveClass: false,
  isProjectPopupShow: false,
  isMenuShow: false,
  handleScroll() {
    const changeColorHeader = () => {
      if (window.scrollY > 0) {
        this.isHeaderHasActiveClass = true;
      } else {
        this.isHeaderHasActiveClass = false;
      }
    };

    changeColorHeader();

    window.addEventListener('scroll', throttle(changeColorHeader, 250));
  },
});

createApp({
  store,
}).mount();
