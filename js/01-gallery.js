import { galleryItems } from './gallery-items.js';
// Change code below this line




const GalleryRefs = document.querySelector('.gallery');





function CreateGalerry(item) {
    return item.map(({ preview, original, description }) => {
        
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
            ;
    }).join('');
};
// console.log(CreateGalerry(galleryItems));

const GalleryMarkup = CreateGalerry(galleryItems);
GalleryRefs.insertAdjacentHTML('beforeend', GalleryMarkup);




const onItemClick = (e) => {

    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600">`
    );
    instance.show();
}
GalleryRefs.addEventListener('click', onItemClick);





