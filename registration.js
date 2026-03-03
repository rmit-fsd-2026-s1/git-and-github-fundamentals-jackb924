const firstNameInput = document.querySelector('.first-name-input');
const lastNameInput = document.querySelector('.last-name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');




function submitCheck() {
    const submitButton = document.querySelector('.submit-button');

    const fNameValue = firstNameInput.value;
    const lNameValue = lastNameInput.value;
    const emailInputValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (fNameValue && lNameValue && emailInputValue && passwordValue) {
        submitButton.innerText = 'Submitted';
    }
    else {
        submitButton.innerText = 'Try Again';
        setInterval(function reset() {
            submitButton.innerText = 'Submit';
        }, 1000);
    }
    

}

