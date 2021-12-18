const showError = (form, input, errorMessageText, errorClass, inputErrorClass) => {
    const errorMassage = form.querySelector(`#${input.name}-error`);
    errorMassage.textContent = errorMessageText;
    errorMassage.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}


const hideError = (form, input, errorClass, inputErrorClass) => {
    const errorMassage = form.querySelector(`#${input.name}-error`);
    errorMassage.textContent = '';
    errorMassage.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}

const checkIfInputValid = (form, input, {inputErrorClass, errorClass}) => {
    if(!input.validity.valid){
        showError(form, input, input.validationMessage, inputErrorClass, errorClass);
    }
    else {
        hideError(form, input, inputErrorClass, errorClass);
    }
}

const toggleButtonError = (inputs, button, inactiveButtonClass) => {
    if (hasInvalidInput(inputs)) {
      button.classList.add(inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(inactiveButtonClass);
      button.disabled = false;
    }
}

const hasInvalidInput = (inputs) => {
    return Array.from(inputs).some( (element) => !element.validity.valid);
   }
   


const setInputListeners = (form, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => {
    const inputs = form.querySelectorAll(inputSelector);
    const submitButton = form.querySelector(submitButtonSelector);
    toggleButtonError(inputs, submitButton, inactiveButtonClass);
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkIfInputValid(form, input, rest);
            toggleButtonError(inputs, submitButton, inactiveButtonClass);
        });
    });
}

const enableValidation = ({formSelector, ...rest}) => {
    const forms = document.querySelectorAll(formSelector);
    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        setInputListeners(form, rest);
    });
}

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__btn',
    inactiveButtonClass: 'form__btn_disabled',
    inputErrorClass: 'form__input-error_visible',
    errorClass: 'form__input_error'
  }); 