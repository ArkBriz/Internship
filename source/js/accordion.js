const faqList = document.querySelector('.faq__list');
const questions = faqList.querySelectorAll('.faq__question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const isOpen = question.classList.toggle('faq__question--open');
    question.setAttribute('aria-expanded', String(isOpen));
  });
});
