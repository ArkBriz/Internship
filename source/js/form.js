const phoneInput = document.querySelector('.form__input[name="phone"]');

phoneInput.addEventListener('focus', () => {
  if (!phoneInput.value) {
    phoneInput.value = '+7';
  }
});

phoneInput.addEventListener('input', () => {
  let value = phoneInput.value.replace(/[^\d+]/g, '');

  if (!value.startsWith('+7')) {
    value = '+7';
  }

  phoneInput.value = value.slice(0, 12);
});

phoneInput.addEventListener('blur', () => {
  if (phoneInput.value === '+7') {
    phoneInput.value = '';
  }
});
