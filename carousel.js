function initCarousels() {
  document.querySelectorAll('.carousel').forEach((carousel) => {
    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let currentIndex = 0;
    let autoTimer;
    let startX = 0;
    let endX = 0;

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

    // Touch events for swipe
    inner.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    inner.addEventListener('touchmove', (e) => {
      if (!startX) return;
      endX = e.touches[0].clientX;
    });

    inner.addEventListener('touchend', (e) => {
      if (!startX || !endX) return;
      const diffX = startX - endX;
      const threshold = 50;
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          goNext();
        } else {
          goPrev();
        }
        resetAuto();
      }
      startX = 0;
      endX = 0;
    });

    prevBtn.addEventListener('click', () => { goPrev(); resetAuto(); });
    nextBtn.addEventListener('click', () => { goNext(); resetAuto(); });

    startAuto();
  });
}

document.addEventListener('DOMContentLoaded', initCarousels);