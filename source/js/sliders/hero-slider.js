import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import { getPaginationRange, renderBullet } from "./news-slider";

const slides = document.querySelectorAll('.hero__slide');

const updateTitleUpperWidth = () => {
  let widthValue;

  if (slides.length > 3) {
    if (slides.length > 3 && window.matchMedia('(min-width: 1440px)').matches) {
      widthValue = '810px';
    } else if (slides.length > 3 && window.matchMedia('(min-width: 768px)').matches) {
      widthValue = '500px';
    } else {
      widthValue = '170px';
    }
  } else {
    if (slides.length <= 3 && window.matchMedia('(min-width: 1440px)').matches) {
      widthValue = '830px';
    } else if (slides.length <= 3 && window.matchMedia('(min-width: 768px)').matches) {
      widthValue = '520px';
    } else {
      widthValue = '186px';
    }
  }

  slides.forEach((slide) => {
    slide
      .querySelector('.hero__slide-title')
      .style.setProperty('--nb-w', widthValue);
  });
};

updateTitleUpperWidth();
window.addEventListener('resize', updateTitleUpperWidth);

const updatePagination = (slider) => {
  const bullets = slider.pagination.bullets;
  const total = slider.pagination.bullets.length;
  const activeInd = slider.activeIndex;

  const [startInd, endInd] = getPaginationRange(activeInd, total);

  bullets.forEach((bullet, index) => {
    bullet.style.display = index >= startInd && index <= endInd ? 'block' : 'none';
  });
};

const heroSlider = new Swiper('.hero__slider', {
  modules: [Pagination],
  loop: true,
  autoHeight: true,
  speed: 1000,

  pagination: {
    el: '.hero__pagination',
    renderBullet: (index, className) => {
      return renderBullet(index, className, () => '')
    },
  },

  breakpoints: {
    1440: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: false,
    }
  },

  on: {
    init() {
      updatePagination(this);
    },

    slideChange() {
      updatePagination(this);
    },

    breakpoint() {
      setTimeout(() => updatePagination(this), 0);
    }
  },
});
