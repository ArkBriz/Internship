const body = document.querySelector('.page-body');
const modal = document.querySelector('.modal');
const openButton = document.querySelector('.about__block .button');
const closeButton = modal.querySelector('.close-button');

const closeModal = () => {
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.add('modal--closed');
  body.classList.remove('page-body--modal-open');

  closeButton.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onOutsideClick);

  openButton.focus();
};

const openModal = () => {
  modal.classList.remove('modal--closed');
  body.classList.add('page-body--modal-open');
  modal.setAttribute('aria-hidden', 'false');

  closeButton.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onOutsideClick);

  closeButton.focus();
};

function onEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

function onOutsideClick (evt) {
  if (evt.target === modal) {
    closeModal();
  }
};

openButton.addEventListener('click', openModal);
