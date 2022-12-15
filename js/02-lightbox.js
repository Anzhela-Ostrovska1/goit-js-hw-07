import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const imagesMarkup = makeImagesMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function makeImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }, i) => {
      return `<a ="rel${i}" class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const galleryImages = document.getElementsByClassName("gallery__image");
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250ms",
});

function onGalleryImageClick(evt) {
  evt.preventDefault();
  lightbox.open(evt.target.src);
}

for (let image of galleryImages) {
  image.addEventListener("click", onGalleryImageClick);
}
