import Swiper from "swiper";
import { Pagination, Navigation, Grid } from "swiper/modules";
import 'swiper/css/grid';


export const getPaginationRange = (activeInd, total) => {
  if (total <= 4) {
    return [0, total - 1];
  }

  if (activeInd <= 2) {
    return [0, 3];
  }

  if (activeInd >= total - 2) {
    return [total - 4, total - 1];
  }

  return [activeInd - 2, activeInd + 1];
};

export const renderBullet = (index, className, getContent = (i) => i + 1) => {
  return `
    <button class="${className}" type="button" aria-label="Перейти к слайду ${index + 1}">${getContent(index)}</button>
  `;
};

const updatePagination = (slider) => {
  const bullets = slider.pagination.bullets;
  const total = slider.pagination.bullets.length;
  const activeInd = slider.activeIndex;

 const moveElem = (elem, elemClass) => {
    if (activeInd === 0) {
      elem.classList.add(elemClass);
    } else {
      elem.classList.remove(elemClass);
    }
 }

 moveElem(document.querySelector('.news__pagination'), 'news__pagination--top');
 moveElem(document.querySelector('.news__navigation'), 'news__navigation--top');

  const [startInd, endInd] = getPaginationRange(activeInd, total);

  bullets.forEach((bullet, index) => {
    bullet.style.display = index >= startInd && index <= endInd ? 'inline-flex' : 'none';
  });
};

new Swiper('.news__slider', {
  modules: [Pagination, Navigation, Grid],

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 500,
  grid: {
    rows: 2,
    fill: 'row',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
      speed: 700,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },

    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 32,
      speed: 1000,
      grid: {
        rows: 1,
      }
    },
  },

  navigation: {
    prevEl: '.news__navigation .swiper-button-prev',
    nextEl: '.news__navigation .swiper-button-next',
  },

  pagination: {
    el: '.news__pagination',
    clickable: true,
    renderBullet,
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
