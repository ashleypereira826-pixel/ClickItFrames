// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


// STAGGER GALLERY
const images = document.querySelectorAll(".gallery img");

images.forEach((img, index) => {
  setTimeout(() => {
    img.classList.add("show");
  }, index * 150);
});


// HERO PARALLAX
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const hero = document.querySelector(".hero");
      hero.style.backgroundPositionY = window.scrollY * 0.3 + "px";
      ticking = false;
    });
    ticking = true;
  }
});

// SCROLL LOGIC
document.getElementById("viewWorkBtn").addEventListener("click", () => {
  const section = document.getElementById("work");

  const offset = 80;
  const topPosition = section.offsetTop - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth"
    });
});

//PORTRAIT IMAGES
document.addEventListener("DOMContentLoaded", () => {
    const portraitImages = [
        { 
            src: "images/sayali.jpg", 
            pos: "50% 20%" 
        },
        { 
            src: "images/sayali2.jpg", 
            pos: "50% 10%" 
        },
        { 
            src: "images/sayali3.jpg",
            pos: "50% 20%" 
        },
        { 
            src: "images/aaron1.jpg", 
            pos: "50% 30%" 
        }
    ];

    function getRandomImage(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const imgElement = document.getElementById("portraitImg");

    const selectedImage = getRandomImage(portraitImages);

    console.log("Trying to load:", selectedImage);
    imgElement.src = selectedImage.src;
    imgElement.style.objectPosition = selectedImage.pos;

});


function goToInstagram() {
  window.open("https://www.instagram.com/clickit.frames/", "_blank");
}