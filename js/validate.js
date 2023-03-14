const showInputError = (errorTextTemplate, validationMessage, inputErrorClass)=>{
  errorTextTemplate.textContent = validationMessage;
  errorTextTemplate.classList.add(inputErrorClass);
}

const hideInputError = (errorTextTemplate, inputErrorClass)=>{
  errorTextTemplate.classList.remove(inputErrorClass);
  errorTextTemplate.textContent ='';

}

const checkInputValidation = (input, errorClassTemplate, inputErrorClass) => {
  const errorTextTemplate = document.querySelector(`${errorClassTemplate}${input.name}`);
  console.log(errorTextTemplate);
  if (input.validity.valid) {
    hideInputError(errorTextTemplate,);
    // console.log('валидация успешна');
  }
  else {
    showInputError(errorTextTemplate,input.validationMessage);
    // console.log('валидация не прошла');
  }
}

const setEventListeners = (formList, inputList, errorClassTemplate, inputErrorClass) => {
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  });

  inputList.forEach((input) => {
    input.addEventListener('input', (evt) => {
      checkInputValidation(input, errorClassTemplate, inputErrorClass);
    });
  });
};

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  const inputList = document.querySelectorAll(config.inputSelector);


  setEventListeners(formList, inputList, config.errorClassTemplate, config.inputErrorClass);
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  errorClassTemplate: '.popup__form-text-error_type_',
  // submitButtonSelector: '.popup__button',
  // inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__form-text-error',
  // errorClass: 'popup__error_visible',
});
