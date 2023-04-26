import { previous, next } from './slider';
import { fillIndicator } from './indicator';


let track = document.querySelector('.carousel__track');
let slides = Array.from(track.children);
let currentImageIndex = 0;

window.addEventListener('load', e => {
    slides[0].classList.add('visible');
    fillIndicator(currentImageIndex);
});

let leftButton = document.querySelector('.carousel__button--left');
leftButton.addEventListener('click', e => {
    setTimeout(previous(), 5000);
});

let rightButton = document.querySelector('.carousel__button--right');
rightButton.addEventListener('click', e => {
    setTimeout(next(), 5000);
});