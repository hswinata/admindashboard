let errorMessage = document.querySelector('.errorMessage');
let overlay = document.querySelector('.overlay')
let passwordInput = document.querySelector('#password');
let cpasswordInput = document.querySelector('#cpassword');
let passwordValid = document.querySelector('#password:valid');

passwordInput.addEventListener('input', () => {
    let passwordPattern = new RegExp(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,};
    if (passwordPattern.test(passwordInput.value)) {
        console.log('right');
        overlay.textContent = 'Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters';
        };
    })

function checkPassword() {
    if (passwordInput.value == null || cpasswordInput.value == null){
    } else if (passwordInput.value == cpasswordInput.value) {
        errorMessage.textContent = 'passwords match!';
        errorMessage.style.color = '#2a69fe';
        // cpasswordInput.style.border = '3px solid #2a69fe';
    } else {
        errorMessage.textContent= 'passwords do not match!';
        errorMessage.style.color = '#9B2701';
        // cpasswordInput.style.border = '3px solid #9B2701;';
    };
};