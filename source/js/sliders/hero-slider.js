import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const heroSlider = new Swiper('.hero__slider', {
  modules: [Pagination],
  loop: true,
  autoHeight: true,
  speed: 1000,

  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
  },

  breakpoints: {
    1440: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: false,
    }
  }
});
