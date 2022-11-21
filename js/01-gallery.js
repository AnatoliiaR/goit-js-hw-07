import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRefs = document.querySelector('.gallery');

function createGalerry(items) {
    return items.map(({ preview, original, description }) => 
        
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
            
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

    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600">`
    );
    instance.show();

    const closeEcsPress = (e) => {
        e.preventDefault();
        if (e.code === 'Escape') {
            instance.close();
        }
    };
    window.addEventListener('keydown', closeEcsPress);

}