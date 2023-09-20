// eslint-disable-next-line import/no-unresolved
import { register } from 'swiper/element/bundle';

import getScrollbarWidth from './helpers/getScrollbarWidth';

import projectsHomeSlider from '../_blocks/organisms/livingart-projects-home/livingart-projects-home';
import materialSlider from '../_blocks/organisms/livingart-material-slider/livingart-material-slider';
import bespokeSlider from '../_blocks/organisms/livingart-bespoke-slider/livingrant-bespoke-slider';
import bespokeSlider2 from '../_blocks/organisms/livingart-bespoke-slider-two/livingart-bespoke-slider-two';
import projectsCabinetrySlider from '../_blocks/organisms/livingart-projects-cabinetry/livingart-projects-cabinetry';
// eslint-disable-next-line no-unused-vars
import LivingartCallback from '../_blocks/organisms/livingart-callback/livingart-callback';
import projectsSlider from '../_blocks/organisms/livingart-projects/livingart-projects';

register();

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);

  projectsHomeSlider();
  materialSlider();
  bespokeSlider();
  bespokeSlider2();
  projectsCabinetrySlider();
  projectsSlider();
});
