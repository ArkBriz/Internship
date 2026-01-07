import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

new Swiper('.reviews__slider', {
  modules: [Navigation, Scrollbar],

  speed: 700,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 15,

  breakpoints: {
    768: {
      spaceBetween: 30,
    },

    1440: {
      spaceBetween: 32,
      allowTouchMove: false,
    },
  },

  scrollbar: {
    el: '.reviews__scrollbar',
    dragSize: 'auto',
    draggable: true,
    hide: false,
  },

  navigation: {
    prevEl: '.reviews__navigation .swiper-button-prev',
    nextEl: '.reviews__navigation .swiper-button-next',
  }
});
