function initCarousels() {
  document.querySelectorAll('.carousel').forEach((carousel) => {
    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let currentIndex = 0;
    let autoTimer;

    function show(index) {
      currentIndex = index;
      const offset = -index * 100;
      inner.style.transform = `translateX(${offset}%)`;
      items.forEach((item, idx) => {
        item.classList.toggle('active', idx === index);
      });
    }

    function goNext() {
      show((currentIndex + 1) % items.length);
    }

    function goPrev() {
      show((currentIndex - 1 + items.length) % items.length);
    }

    function startAuto() {
      if (carousel.dataset.auto === 'true') {
        clearInterval(autoTimer);
        autoTimer = setInterval(goNext, 2500);
      }
    }

    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    prevBtn.addEventListener('click', () => { goPrev(); resetAuto(); });
    nextBtn.addEventListener('click', () => { goNext(); resetAuto(); });

    startAuto();
  });
}

document.addEventListener('DOMContentLoaded', initCarousels);