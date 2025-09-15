const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  }
});
