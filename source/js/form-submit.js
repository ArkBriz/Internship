import { showResult } from './result-modal';

const initFormSending = (form) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        showResult(true);
        form.reset();
      } else {
        showResult(false);
      }
    } catch (error) {
      showResult(false);
    }
  });
};

document.querySelectorAll('.form').forEach(initFormSending);
