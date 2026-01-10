// validation for name form field
const nameInput = document.querySelector('.form__input[name="name"]');

nameInput.addEventListener('input', () => {
  nameInput.value = nameInput.value.replace(/[^A-Za-zА-Яа-яЁё \-]+/g, '');
});

nameInput.addEventListener('blur', () => {
  nameInput.value = nameInput.value.trim().replace(/\s+/g, ' ');
});

// +7 mask for phone form field
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

