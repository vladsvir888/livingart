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
import bespokeSlider2 from '../_blocks/organisms/livingart-bespoke-slider-two/livingart-bespoke-slider-two';
import projectsCabinetrySlider from '../_blocks/organisms/livingart-projects-cabinetry/livingart-projects-cabinetry';
import projectsSlider from '../_blocks/organisms/livingart-projects/livingart-projects';
import countStart from '../_blocks/molecules/livingart-number-card/livingart-number-card';
// eslint-disable-next-line no-unused-vars
import LivingartCallback from '../_blocks/organisms/livingart-callback/livingart-callback';
import './vue';

register();
sal();

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);

  projectsHomeSlider();
  materialSlider();
  bespokeSlider();
  bespokeSlider2();
  projectsCabinetrySlider();
  projectsSlider();
  countStart();
});
