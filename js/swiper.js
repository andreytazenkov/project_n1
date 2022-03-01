// product swiper
const productSwiperButtonPrev = document.querySelector('.product-swiper-button-prev'),
  productSwiperButtoNext = document.querySelector('.product-swiper-button-next'),
  productSwiperPagination = document.querySelector('.product-swiper-pagination');
const serviceSwiper = new Swiper('.product-swiper', {
  speed: 1200,
  loop: false,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  navigation: {
    nextEl: productSwiperButtoNext,
    prevEl: productSwiperButtonPrev,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      if (number < 10) {
        number = "0" + number;
      }
      return number;
    },
    formatFractionTotal: function (number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    }
  },
  spaceBetween: 30,
  breakpoints: {
    992: {
      spaceBetween: 30,
    },
    320: {
      spaceBetween: 10,
    }
  },
  a11y: {
    prevSlideMessage: 'Предыдущий товар',
    nextSlideMessage: 'Следующий товар',
  },
});

