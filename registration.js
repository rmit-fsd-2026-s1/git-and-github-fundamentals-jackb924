const firstNameInput = document.querySelector('.first-name-input');
const lastNameInput = document.querySelector('.last-name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');


didSucceed = false;

function submitCheck() {
    const submitButton = document.querySelector('.submit-button');
    const successElement = document.querySelector('.success-container');
    const fNameValue = firstNameInput.value;
    const lNameValue = lastNameInput.value;
    const emailInputValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (fNameValue && lNameValue && emailInputValue && passwordValue) {
        submitButton.innerText = 'Submitted';
        successElement.innerText = 'Success!';
        didSucceed = true;
    }
    else {
        submitButton.innerText = 'Try Again';
        setInterval(function reset() {
            submitButton.innerText = 'Submit';
        }, 1000);

        if (didSucceed) {
            successElement.innerText = '';
        }
    }
    

}

