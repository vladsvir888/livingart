/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { register } from 'swiper/element/bundle';

import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import sal from 'sal.js';

import getScrollbarWidth from './helpers/getScrollbarWidth';

import projectsHomeSlider from '../_blocks/organisms/livingart-projects-home/livingart-projects-home';
import materialSlider from '../_blocks/organisms/livingart-material-slider/livingart-material-slider';
import bespokeSlider from '../_blocks/organisms/livingart-bespoke-slider/livingrant-bespoke-slider';
import projectsCabinetrySlider from '../_blocks/organisms/livingart-projects-cabinetry/livingart-projects-cabinetry';
import projectsSlider from '../_blocks/organisms/livingart-projects/livingart-projects';
// eslint-disable-next-line no-unused-vars
import LivingartCallback from '../_blocks/organisms/livingart-callback/livingart-callback';
import './vue';
import materialSliderGrid from '../_blocks/organisms/livingart-material-slider/livingart-material-slider-grid';
import initScrollSpy from './scrollSpy';

register();
sal();

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);

  projectsHomeSlider();
  materialSlider();
  bespokeSlider();
  projectsCabinetrySlider();
  projectsSlider();
  materialSliderGrid();
  initScrollSpy();
});
