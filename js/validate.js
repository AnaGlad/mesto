// const showInputError = (
//   errorTextTemplate,
//   validationMessage,
//   inputErrorClass
// ) => {
//   errorTextTemplate.textContent = validationMessage;
//   errorTextTemplate.classList.add(inputErrorClass);
// };

// const hideInputError = (errorTextTemplate, inputErrorClass) => {
//   errorTextTemplate.classList.remove(inputErrorClass);
//   errorTextTemplate.textContent = '';
// };

// const disableButton = (submitButton, validSubmitButton) => {
//   console.log(submitButton);
//   submitButton.forEach((buttonElement) => {
//     buttonElement.classList.remove(validSubmitButton);
//     buttonElement.disabled = true;
//   });
// };

// const enableButton = (submitButton, validSubmitButton) => {
//   submitButton.forEach((buttonElement) => {
//     buttonElement.classList.add(validSubmitButton);
//     buttonElement.disabled = false;
//   });
// };

// const disableButton2 = (submitButton2, validSubmitButton) => {
//   submitButton2.classList.remove(validSubmitButton);
//   submitButton2.disabled = true;
// };

// const enableButton2 = (submitButton2, validSubmitButton) => {
//   submitButton2.classList.add(validSubmitButton);
//   submitButton2.disabled = false;
// };

// const checkInputValidation = (input, errorClassTemplate, inputErrorClass) => {
//   const errorTextTemplate = document.querySelector(
//     `${errorClassTemplate}${input.name}`
//   );
//   // console.log(errorTextTemplate);
//   // console.log(input);
//   // console.log(input.validationMessage);
//   // console.log(input.validity);

//   if (input.validity.valid) {
//     hideInputError(errorTextTemplate, inputErrorClass);
//     // console.log('валидация успешна');
//   } else {
//     showInputError(errorTextTemplate, input.validationMessage, inputErrorClass);
//     // console.log('валидация не прошла');
//   }
// };

// const hasInvalidInput = (inputList) => {
//   console.log(inputList);
//   const arrayInputs = Array.from(inputList);
//   return arrayInputs.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (submitButton, validSubmitButton, inputList) => {
//   // console.log(submitButton);
//   submitButton.forEach((button) => {
//     if (!hasInvalidInput(inputList)) {
//       //здесь нужно проверить, что все input валидны, например через аналог функции hasInvalidInput
//       enableButton(button, validSubmitButton);
//     } else {
//       disableButton(button, validSubmitButton);
//     }
//   });
// };

// const toggleButtonState2 = (submitButton2, validSubmitButton, inputList) => {
//   console.log("submitButton2");
//   console.log(submitButton2);
//     if (!hasInvalidInput(inputList)) {
//       //здесь нужно проверить, что все input валидны, например через аналог функции hasInvalidInput
//       enableButton2(submitButton2, validSubmitButton);
//     } else {
//       disableButton2(submitButton2, validSubmitButton);
//     }
// };

// const setEventListeners = (
//   formList,
//   inputList,
//   errorClassTemplate,
//   inputErrorClass,
//   submitButton,
//   validSubmitButton
// ) => {
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//   });
//   inputList.forEach((input) => {
//     const submitButton2 = input.parentElement.parentElement.querySelector('.popup__form-save-button');

//     console.log(submitButton2);
//     // console.log(input.parentElement.parentElement.querySelector('.popup__form-save-button'));
//     input.addEventListener('input', (evt) => {
//       checkInputValidation(input, errorClassTemplate, inputErrorClass);
//       toggleButtonState2(submitButton2, validSubmitButton, inputList); //добавить inputList, чтобы внутри проверять validity.valid
//     });
//   });
// };

// const enableValidation = (config) => {
//   const formList = document.querySelectorAll(config.formSelector);
//   const inputList = document.querySelectorAll(config.inputSelector);
//   const submitButton = document.querySelectorAll(config.submitButtonSelector);
//   console.log(submitButton);
//   //это массив!!!

//   setEventListeners(
//     formList,
//     inputList,
//     config.errorClassTemplate,
//     config.inputErrorClass,
//     submitButton,
//     config.validSubmitButton
//   );
// };

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__form-text',
//   errorClassTemplate: '.popup__form-text-error_type_',
//   submitButtonSelector: '.popup__form-save-button',
//   validSubmitButton: 'popup__form-save-button_valid',
//   // inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__form-text-error',
//   // errorClass: 'popup__error_visible',
// });

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('form__input_type_error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('form__input-error_active');
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('form__input_type_error');
//   errorElement.classList.remove('form__input-error_active');
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const hasInvalidInput=(inputList)=> {
//   return inputList.some((inputElement)=> {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState=(inputList,buttonElement)=>{
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('button_inactive');}
//     else {
//     buttonElement.classList.remove('button_inactive');
//     };
//   };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.form__input'));
//   const buttonElement = formElement.querySelector('.form__submit');
//   console.log(buttonElement);
//   toggleButtonState(inputList,buttonElement);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList,buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.form'));
//   //formList пустой массив
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });
//     // setEventListeners(formElement);
//     const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
//     fieldsetList.forEach((formElement)=> {
//       setEventListeners(formElement);
//     }
//   );
// });
// }

// enableValidation();

// const form = document.querySelector('.popup__form');
// const formInput = form.querySelector('.popup__form-text');
// const formError = form.querySelector (`.popup__form-text-error_type_${formInput.name}`)

// console.log(form);
// console.log(formInput);
// console.log(formError);

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(
    `.popup__form-text-error_type_${inputElement.name}`
  );
  console.log(errorElement);
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__form-text-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(
    `.popup__form-text-error_type_${inputElement.name}`
  );
  errorElement.classList.remove('popup__form-text-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__form-save-button_inactive');
  } else {
    buttonElement.classList.remove('popup__form-save-button_inactive');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll('.popup__form-text')
  );
  const buttonElement = formElement.querySelector('.popup__form-save-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation({
  formSelector: '.popup__form',//
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
