let errorMessage = document.querySelector('.errorMessage');
let overlay = document.querySelector('.overlay')
let passwordInput = document.querySelector('#password');
let cpasswordInput = document.querySelector('#cpassword');

passwordInput.addEventListener('input', () => {
    if(!passwordInput.checkValidity()) {
        overlay.textContent = 'Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters';
        overlay.style.color = '#9B2701';
    } else if (passwordInput.checkValidity()) {
        overlay.textContent = 'Great!';
        overlay.style.color = '#2a69fe';
    }
    })

function checkPassword() {
    if (passwordInput.value == null || cpasswordInput.value == null){
        errorMessage.textContent = '';
    } else if (passwordInput.value == cpasswordInput.value) {
        errorMessage.textContent = 'passwords match!';
        errorMessage.style.color = '#2a69fe';
    } else {
        errorMessage.textContent= 'passwords do not match!';
        errorMessage.style.color = '#9B2701';
    };
};