import { fillIndicator, removeIndicator } from './indicator';

let track = document.querySelector('.carousel__track');
let slides = Array.from(track.children);
let currentImageIndex = 0;

const next = () => {
    const arrayLength = slides.length;
    let visibleImage = document.querySelector('.visible');
    visibleImage.classList.toggle('visible');
    removeIndicator();
    currentImageIndex = (currentImageIndex + 1) % arrayLength;
    let currentImage = slides[currentImageIndex];
    currentImage.classList.toggle('visible');
    fillIndicator(currentImageIndex);
};

const previous = () => {
    const arrayLength = slides.length;
    let visibleImage = document.querySelector('.visible');
    visibleImage.classList.toggle('visible');
    removeIndicator();
    currentImageIndex = (currentImageIndex - 1 + arrayLength) % arrayLength;
    let currentImage = slides[currentImageIndex];
    currentImage.classList.add('visible');
    fillIndicator(currentImageIndex);
};

export { next, previous };