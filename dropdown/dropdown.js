const dropDown = () => {
    let menu = document.querySelector('.menu');
    menu.addEventListener('click', e => {
        document.querySelector('.dropdown').classList.toggle('visible');
    });
};

export { dropDown };