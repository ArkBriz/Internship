const resultModal = document.querySelector('.result-modal');
const title = resultModal.querySelector('.result-modal__title');
const message = resultModal.querySelector('.result-modal__message');
const icon = resultModal.querySelector('.result-modal__icon');
const closeButton = resultModal.querySelector('.close-button');

const closeModal = () => {
  resultModal.classList.add('result-modal--closed');

  if (icon.classList.contains('result-modal__icon--success')) {
    icon.classList.remove('result-modal__icon--success');
  } else {
    icon.classList.remove('result-modal__icon--error');
  }

  closeButton.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onOutsideClick);
};

const showResult = (isSuccess) => {
  if (isSuccess) {
    icon.classList.add('result-modal__icon--success');
    title.textContent = 'Успешно!';
    message.innerHTML = 'Ваша форма успешно отправлена.<br>В ближайшее время мы Вам перезвоним';
  } else {
    icon.classList.add('result-modal__icon--error');
    title.textContent = 'Ошибка!';
    message.textContent = 'Что-то пошло не так... Попробуйте еще раз.';
  }

  closeButton.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onOutsideClick);

  resultModal.classList.remove('result-modal--closed');
};

function onEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

function onOutsideClick (evt) {
  if (evt.target === resultModal) {
    closeModal();
  }
}

export { showResult };
