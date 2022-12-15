import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const imagesMarkup = makeImagesMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function makeImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const galleryImages = document.getElementsByClassName("gallery__image");

function onGalleryImageClick(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" alt="${evt.target.getAttribute(
      "alt"
    )}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  }
}

for (let image of galleryImages) {
  image.addEventListener("click", onGalleryImageClick);
}
