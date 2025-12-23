const swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  grabCursor: true,

  breakpoints: {
    390: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    640: {
      slidesPerView: "auto",
      spaceBetween: 50,
    },
  },

  pagination: {
    el: ".reviews__slider-pagination",
    clickable: true,
    bulletClass: "pagination__bullet",
    bulletActiveClass: "is-active",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".reviews__arrow-button--next",
    prevEl: ".reviews__arrow-button--prev",
  },
});
