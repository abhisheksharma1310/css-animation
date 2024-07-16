let overlay = document.querySelector(".galleryOverlay");
let imageBox = document.querySelector(".imageBox");
let image = document.querySelector(".imageBox img");
let close = document.querySelector(".imageBox span");
let gallery = document.querySelector("#gallery");
gallery.addEventListener("click", (event) => {
  let currentImagePath = event.target.src;
  if (currentImagePath) {
    overlay.classList.add("galleryOverlayShow");
    imageBox.classList.add("imageBoxShow");
    image.src = currentImagePath;
  }
});
const hideImage = () => {
  overlay.classList.remove("galleryOverlayShow");
  imageBox.classList.remove("imageBoxShow");
};
close.addEventListener("click", hideImage);
overlay.addEventListener("click", hideImage);
