import '../../vendor';

const jury = document.querySelector('.swiper__jury');
const reviews = document.querySelector('.swiper__reviews');

function jurySlider() {
  if (jury) {
    const swiper = new Swiper(jury, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 1,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}


function reviewsSlider() {
  if (reviews) {
    const swiper = new Swiper(reviews, {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: '1',
      spaceBetween: 40,
      slidesPerGroup: 1,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

export {reviewsSlider, jurySlider};


