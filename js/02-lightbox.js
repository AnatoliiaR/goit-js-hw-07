import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRefs = document.querySelector('.gallery');

function createGalerry(items) {
    return items.map(({ preview, original, description }) => 
        
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    ).join('');
};

const galleryMarkup = createGalerry(galleryItems);
galleryRefs.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRefs.addEventListener('click', onItemClick);


function onItemClick(e) {

    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }

    const gallery = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        docClose: true,


    });
    // gallery.next();
    // gallery.on('show.simplelightbox',  );
    

}