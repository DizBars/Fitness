import '../../vendor';

const jury = document.querySelector('.swiper__jury');
const reviews = document.querySelector('.swiper__reviews');


function jurySlider() {
  if (jury) {
    // eslint-disable-next-line
    new Swiper(jury, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.jury__button--next',
        prevEl: '.jury__button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
          initialSlide: 2,
        },
      },
    });
  }
}

function reviewsSlider() {
  if (reviews) {
    // eslint-disable-next-line
    new Swiper(reviews, {
      slidesPerView: 'auto',
      loop: false,
      spaceBetween: 40,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }
}

export {jurySlider, reviewsSlider};


