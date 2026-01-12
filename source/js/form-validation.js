// validation for name form field
const initNameValidation = (nameInput) => {
  nameInput.addEventListener('input', () => {
    nameInput.value = nameInput.value.replace(/[^A-Za-zА-Яа-яЁё -]+/g, '');
  });

  nameInput.addEventListener('blur', () => {
    nameInput.value = nameInput.value.trim().replace(/\s+/g, ' ');
  });
};

document.querySelectorAll('.form__input[name="name"]').forEach(initNameValidation);


// +7 mask for phone form field
const initPhoneInputMask = (phoneInput) => {
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
};

document.querySelectorAll('.form__input[name="phone"]').forEach(initPhoneInputMask);
