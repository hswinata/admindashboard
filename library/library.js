let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.hasRead = hasRead
};

Book.prototype.toggleRead = function() {
    this.hasRead == 1 ? this.hasRead = 0 : this.hasRead = 1
};

function toggleCard() {
    let items = bookContainer.querySelectorAll('.card');
    items.forEach(item => {
        let indexNumber = item.getAttribute('data-index');
        item.addEventListener('click', e => {
            if(e.target.classList.contains('eyeopen-icon')) {
                e.target.classList.remove('eyeopen-icon');
                e.target.classList.toggle('eyeslash-icon');
                e.target.setAttribute('src', 'images/eye-slash.svg');
                myLibrary[indexNumber].toggleRead();
            } else if (e.target.classList.contains('eyeslash-icon')) {
                e.target.classList.remove('eyeslash-icon');
                e.target.classList.toggle('eyeopen-icon');
                e.target.setAttribute('src', 'images/eye-open.svg');
                myLibrary[indexNumber].toggleRead();
            };
        })
    });
};

function deleteCard() {
    let items = bookContainer.querySelectorAll('.card');
    items.forEach(item => {
        item.addEventListener('click', e => {
            if(e.target.classList.contains('trash-icon')) {
                let cardIndex = item.getAttribute('data-index');
                myLibrary.splice(cardIndex, 1);
                item.remove();
            };
        });
    });
};

let bookContainer = document.querySelector('.book-container');
let buttonNew = document.querySelector('.button-new');
buttonNew.addEventListener('click', () => activateModal());

function activateModal() {
    let modal = document.querySelector('.modal');
    let overlay = document.querySelector('#overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
};

let buttonClose = document.querySelector('.button-close');
buttonClose.addEventListener('click', () => closeModal());

function closeModal() {
    let modal = document.querySelector('.modal');
    let overlay = document.querySelector('#overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
};

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let hasRead = document.getElementById('hasRead').value;
    let newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    render();
};

function render() {
    bookContainer.innerHTML = "";
    myLibrary.forEach((card, index) => {
        let cardContainer = document.createElement('div');
        bookContainer.append(cardContainer);
        cardContainer.classList.add('card');

        cardContainer.setAttribute('data-index', index);

        let sentence = `${card.title} by ${card.author}`;
        cardContainer.append(sentence);

        let actionIcons = document.createElement('div');
        let trashIcon = document.createElement('img');
        let eyeOpenIcon = document.createElement('img');
        let eyeSlashIcon = document.createElement('img');

        cardContainer.append(actionIcons);
        actionIcons.classList.add('action-icons');

    if (card.hasRead == "1") {
        actionIcons.append(eyeOpenIcon);
        eyeOpenIcon.setAttribute('src', 'images/eye-open.svg');
        eyeOpenIcon.classList.add('eyeopen-icon');
        eyeOpenIcon.setAttribute('title', 'I have read this book');

    } else if (card.hasRead == "0") {
        actionIcons.append(eyeSlashIcon);
        eyeSlashIcon.setAttribute('src', 'images/eye-slash.svg');
        eyeSlashIcon.classList.add('eyeslash-icon');
        eyeSlashIcon.setAttribute('title', 'Have not read');
        };

        actionIcons.append(trashIcon);
        trashIcon.classList.add('trash-icon');
        trashIcon.setAttribute('src', 'images/trash.svg');
        trashIcon.setAttribute('title', 'Delete');
    })
};

let form = document.querySelector('form'); 
form.addEventListener('submit', e => {
    e.preventDefault();
    addBookToLibrary();
    form.reset();
    closeModal();
    deleteCard();
    toggleCard();
});