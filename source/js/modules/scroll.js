const scrollButton = document.querySelector('[data-scroll]');
const scrollTarget = document.querySelector('[data-subscription]');

scrollButton.addEventListener('click', scrollBuy);

function scrollBuy() {
  scrollTarget.scrollIntoView({block: 'center', behavior: 'smooth'});
}
