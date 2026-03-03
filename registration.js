let firstNameInput = document.getElementById('.first-name-input');
let lastNameInput = document.getElementById('.first-name-input');
let emailInput = document.getElementById('.first-name-input');
let passwordInput = document.getElementById('.first-name-input');

function submitCheck() {
    const submitButton = document.querySelector('.submit-button');

    const fNameValue = firstNameInput.value;
    const lNameValue = firstNameInput.value;
    const emailInputValue = firstNameInput.value;
    const passwordValue = firstNameInput.value;

    if (fNameValue && lNameValue && emailInputValue && passwordValue) {
        submitButton.innerText = 'Submitted';
    }

}