import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

new Swiper('.programs__slider', {
  modules: [Navigation, Scrollbar],

  speed: 700,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 15,

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 30,
    },

    1440: {
      speed: 1000,
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      spaceBetween: 32,
      allowTouchMove: false,
    },
  },

  scrollbar: {
    el: '.programs__scrollbar',
    dragSize: 'auto',
    draggable: true,
    hide: false,
  },

  navigation: {
    prevEl: '.programs__navigation .swiper-button-prev',
    nextEl: '.programs__navigation .swiper-button-next',
  }
});
