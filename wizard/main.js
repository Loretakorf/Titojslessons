// Create a wizard for user to register:    1. Wizard should be be in four steps:

//         a. step 1 three fields:

//             i. first name (required)

//             ii. last name (required)

//             iii. email (required)

//         b. step 2 three fields:

//             i. primary address (required)

//             ii. secondary address (optional)

//             iii. shirt size (required)

//         c. step 3 two fields:

//             i. password (required)

//             ii. repeat password (required)

//         d. step 4 should display final object

//     2. User can click on 'Continue' button to move forward in steps

//         a. User should not be able to move to the next step if his current step has validation errors

//     3. If user is not in step 1 then 'Back' button should be displayed to move backwards in steps

//     4. Validation should be inplemented for each step:

//         a. for required fields, their border should be changed to red if validation doesn't pass

//         b. step 3 should also check if passwords match, if they don't then additionally display error message above 'Passwords should match!'

//         c. email validation should also check if email is of valid format

//     5. Errors should be cleared on step change

// Final object example(step value depends on if you count from 0 or 1, so its final value should be either 3 or 4):
// step 0 content
const step0Content = document.querySelector('.step-0');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');

// step 1 content
const step1Content = document.querySelector('.step-1');
const primaryAddressInput = document.querySelector('#primaryAddress');
const secondaryAddressInput = document.querySelector('#secondaryAddress');
const shirtSizeInput = document.querySelector('#shirtSize');

// step 2 content
const step2Content = document.querySelector('.step-2');
const passwordInput = document.querySelector('#password');
const repeatPasswordInput = document.querySelector('#repeatPassword');
const passwordErrorParagraph = document.querySelector('.password-message');

// step 3 content 
const step3Content = document.querySelector('.step-3');
const resultTextarea = document.querySelector('.result');

// action buttons
const continueBtn = document.querySelector('#confirm-btn');
const backBtn = document.querySelector('#back-btn');

// result object
const result = {
    step: 0,
    user: {},
};

const hiddenClass = 'hidden';
const errorClass = 'error';

continueBtn.addEventListener('click', onContinue);
backBtn.addEventListener('click', onBack);

function onContinue(event) {
    event.preventDefault();
    switch (result.step) {
        case 0:
            if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || emailInput.validity.typeMismatch) {
                if (!firstNameInput.value) {
                    applyErrorToInput(firstNameInput);
                }
                if (!lastNameInput.value) {
                    applyErrorToInput(lastNameInput);
                }
                if (!email.value || emailInput.validity.typeMismatch) {
                    applyErrorToInput(email);
                }
            } else {
                result.user.firstName = firstNameInput.value;
                result.user.lastName = lastNameInput.value;
                result.user.email = emailInput.value;
                result.step += 1;
                displayWizardStep(result.step);
                clearErrors();
            }
            break;
        case 1:
            if (!primaryAddressInput.value || !shirtSizeInput.value) {
                if (!primaryAddressInput.value) {
                    applyErrorToInput(primaryAddressInput);
                }
                if (!shirtSizeInput.value) {
                    applyErrorToInput(shirtSizeInput);
                }
            } else {
                result.user.primaryAddress = primaryAddressInput.value;
                result.user.shirtSize = shirtSizeInput.value;
                if (secondaryAddressInput.value) {
                    result.user.secondaryAddress = secondaryAddressInput.value;                
                }
                result.step += 1;
                displayWizardStep(result.step);
                clearErrors();
            }
            break;
        case 2: 
            if (!passwordInput.value || !repeatPasswordInput.value || passwordInput.value !== repeatPasswordInput.value) {
                if (passwordInput.value !== repeatPasswordInput.value) {
                    passwordErrorParagraph.classList.remove(hiddenClass);
                }
                if (!passwordInput.value) {
                    applyErrorToInput(passwordInput);
                }
                if (!repeatPasswordInput.value) {
                    applyErrorToInput(repeatPasswordInput);
                }
            } else {
                result.user.password = passwordInput.value;
                result.step += 1;
                resultTextarea.value = JSON.stringify(result);
                displayWizardStep(result.step);
                clearErrors();
            }
    }
}

function applyErrorToInput(input) {
    input.classList.add(errorClass);
}

function displayWizardStep(step) {
    switch (step) {
        case 0:
            step0Content.classList.remove(hiddenClass);
            step1Content.classList.add(hiddenClass);
            step2Content.classList.add(hiddenClass);
            step3Content.classList.add(hiddenClass);
            backBtn.classList.add(hiddenClass);
            continueBtn.classList.remove(hiddenClass);
            break;
        case 1:
            step0Content.classList.add(hiddenClass);
            step1Content.classList.remove(hiddenClass);
            step2Content.classList.add(hiddenClass);
            step3Content.classList.add(hiddenClass);
            backBtn.classList.remove(hiddenClass);
            continueBtn.classList.remove(hiddenClass);
            break;
        case 2: 
            step0Content.classList.add(hiddenClass);
            step1Content.classList.add(hiddenClass);
            step2Content.classList.remove(hiddenClass);
            step3Content.classList.add(hiddenClass);
            backBtn.classList.remove(hiddenClass);
            continueBtn.classList.remove(hiddenClass);
            break;
        case 3:
            step0Content.classList.add(hiddenClass);
            step1Content.classList.add(hiddenClass);
            step2Content.classList.add(hiddenClass);
            step3Content.classList.remove(hiddenClass);
            continueBtn.classList.add(hiddenClass);
    }
}

function clearErrors() {
    firstNameInput.classList.remove(errorClass)
    lastNameInput.classList.remove(errorClass)
    emailInput.classList.remove(errorClass)
    primaryAddressInput.classList.remove(errorClass)
    shirtSizeInput.classList.remove(errorClass)
    passwordInput.classList.remove(errorClass);
    repeatPasswordInput.classList.remove(errorClass);
    passwordErrorParagraph.classList.add(hiddenClass);
}

function onBack(event) {
    event.preventDefault();
    displayWizardStep(result.step - 1);
    result.step -= 1;
}
 




