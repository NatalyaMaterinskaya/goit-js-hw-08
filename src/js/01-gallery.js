import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}""
              alt="${description}"
            />
          </a>
        </li>`
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', markup);

var lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const selectedImage = evt => {
  evt.preventDefault();
  const { target } = evt;
  if (!target.classList.contains('gallery__image')) {
    return;
  }
};

galleryEl.addEventListener('click', selectedImage);
