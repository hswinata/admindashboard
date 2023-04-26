const fillIndicator = (imageIndex) => {
    let nav = document.querySelector('.nav');
    let indicators = Array.from(nav.children);
    indicators[imageIndex].classList.add('filled');
};

const removeIndicator = () => {
    let visibleIndicator = document.querySelector('.filled');
    visibleIndicator.classList.remove('filled');
};

export { fillIndicator, removeIndicator };