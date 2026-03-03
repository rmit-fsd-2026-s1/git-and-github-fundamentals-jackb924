let firstNameInput = document.getElementById('.first-name-input');
let lastNameInput = document.getElementById('.last-name-input');
let emailInput = document.getElementById('.email-input');
let passwordInput = document.getElementById('.password-input');


//sample values

firstNameInput.value = 'jeff';
lastNameInput.value = 'jeff';
emailInput.value = 'jeff';
passwordInput.value = 'jeff';


function submitCheck() {
    const submitButton = document.querySelector('.submit-button');

    const fNameValue = firstNameInput.value;
    const lNameValue = firstNameInput.value;
    const emailInputValue = firstNameInput.value;
    const passwordValue = firstNameInput.value;

    if (fNameValue && lNameValue && emailInputValue && passwordValue) {
        submitButton.innerText = 'Submitted';
    }

    console.log('should be working');

}