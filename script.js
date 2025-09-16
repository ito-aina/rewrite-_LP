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


(function(){
  const INTERVAL_MS = 4000; // 自動切替の間隔（ミリ秒）

  const slides = Array.from(document.querySelectorAll('.slide'));
  let current = 0;
  let timer = null;

  function show(idx){
    slides.forEach((s,i)=>{
      s.setAttribute('aria-hidden', i===idx ? 'false' : 'true');
    });
    current = idx;
  }

  function next(){ show((current + 1) % slides.length); }

  function startTimer(){ 
    if(timer) clearInterval(timer); 
    timer = setInterval(()=> next(), INTERVAL_MS); 
  }

  // 最初の表示＆開始
  show(0);
  startTimer();
})();

