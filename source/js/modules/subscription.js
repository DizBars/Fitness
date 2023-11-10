const subButtons = document.querySelectorAll('[data-subscription-control]');
const subCards = document.querySelectorAll('[data-subscription-element]');


function openSubType() {
  if (subButtons || subCards) {
    subButtons.forEach((button) => {
      button.addEventListener('click', function (evt) {
        evt.preventDefault();
        const id = evt.target.getAttribute('data-index-sub');

        subButtons.forEach((card) => {
          card.classList.remove('is-active');
        });

        subCards.forEach((card) => {
          card.classList.remove('is-active');
        });

        button.classList.add('is-active');
        document.getElementById(id).classList.add('is-active');
      });
    });
  }
}

export {openSubType};
