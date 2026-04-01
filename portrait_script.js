
const images = [
  "/images/sayali.jpg",
  "/images/sayali2.jpg",
  "/images/sayali3.jpg",
  "/images/isha1.jpg",
  "/images/isha2.jpg",
  "/images/aaron1.jpg",
  "/images/aaron2.jpg",
  "/images/aaron3.jpg"
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("close");

// Load images dynamically
images.forEach(src => {
  const div = document.createElement("div");
  div.classList.add("item");

  const img = document.createElement("img");
  img.src = src;
  img.loading = "lazy";

  // Click → open lightbox
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
  });

  div.appendChild(img);
  gallery.appendChild(div);
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Smooth scroll
document.getElementById("exploreBtn").addEventListener("click", () => {
  gallery.scrollIntoView({ behavior: "smooth" });
});