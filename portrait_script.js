// Smooth scroll when clicking button
document.querySelector("button").addEventListener("click", () => {
  document.querySelector(".gallery").scrollIntoView({
    behavior: "smooth"
  });
});