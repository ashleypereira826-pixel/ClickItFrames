import './style.css'

// Initialize carousels for each gallery section
function initCarousel(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  
  const carousel = section.querySelector('.carousel-inner');
  const images = section.querySelectorAll('.carousel img');
  const prevBtn = section.querySelector('.prev');
  const nextBtn = section.querySelector('.next');

  let currentIndex = 0;

  function showImage(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  // Initialize
  showImage(0);

  // Auto-play carousel
  setInterval(nextImage, 4000);
}

// Initialize both galleries
initCarousel('portrait');
initCarousel('product');

console.log('Photography Portfolio loaded');