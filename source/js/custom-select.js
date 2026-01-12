const initCustomSelect = (customSelect) => {
  const select = customSelect.closest('.form__group').querySelector('select');

  const button = customSelect.querySelector('.custom-select__button');
  const buttonText = customSelect.querySelector('.custom-select__button-text');
  const list = customSelect.querySelector('.custom-select__list');
  const customOptions = Array.from(customSelect.querySelectorAll('.custom-select__option'));

  let currentIndex = -1;

  const openSelect = () => {
    list.classList.add('custom-select__list--open');
    button.setAttribute('aria-expanded', 'true');
  };

  const closeSelect = () => {
    list.classList.remove('custom-select__list--open');
    button.setAttribute('aria-expanded', 'false');

    currentIndex = -1;

    customOptions.forEach((option) => {
      option.classList.remove('custom-select__option--focused');
    });
  };

  const toggleSelect = () => {
    if (list.classList.contains('custom-select__list--open')) {
      closeSelect();
    } else {
      openSelect();
    }
  };

  const selectOption = (option) => {
    const value = option.dataset.value;
    const text = option.textContent;

    buttonText.textContent = text;
    select.value = value;

    select.dispatchEvent(new Event('change', { bubbles: true }));

    closeSelect();
    button.focus();
  };

  button.addEventListener('click', toggleSelect);

  customOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
      selectOption(option);
    });

    option.addEventListener('mouseenter', () => {
      customOptions.forEach((opt) => opt.classList.remove('custom-select__option--hovered'));

      option.classList.add('custom-select__option--hovered');
      currentIndex = index;
    });
  });

  list.addEventListener('mouseleave', () =>{
    customOptions.forEach((option) => {
      option.classList.remove('custom-select__option--hovered');
    });
  });

  window.addEventListener('click', (evt) => {
    if(!customSelect.contains(evt.target)) {
      closeSelect();
    }
  });

  const focusOption = (index) => {
    if (index < 0) {
      index = customOptions.length - 1;
    }
    if (index >= customOptions.length) {
      index = 0;
    }

    customOptions.forEach((option) => {
      option.classList.remove('custom-select__option--focused');
    });

    customOptions[index].classList.add('custom-select__option--focused');
    customOptions[index].focus();
    currentIndex = index;
  };

  button.addEventListener('keydown', (evt)=> {
    if (evt.key === 'Enter' || evt.key === ' ') {
      evt.preventDefault();
      openSelect();
      focusOption(0);
    }
  });

  list.addEventListener('keydown', (evt) => {
    switch (evt.key) {
      case 'ArrowDown':
        evt.preventDefault();
        focusOption(currentIndex + 1);
        break;

      case 'ArrowUp':
        evt.preventDefault();
        focusOption(currentIndex - 1);
        break;

      case 'Enter':
      case ' ':
        evt.preventDefault();
        if (currentIndex >= 0) {
          selectOption(customOptions[currentIndex]);
        }
        break;

      case 'Escape':
        evt.preventDefault();
        closeSelect();
        button.focus();
        break;
    }
  });

  customSelect.addEventListener('focusout', (evt) => {
    if (!customSelect.contains(evt.relatedTarget)) {
      closeSelect();
    }
  });
};

document.querySelectorAll('.custom-select').forEach(initCustomSelect);
