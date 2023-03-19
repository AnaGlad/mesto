const showInputError = (
  inputErrorClass,
  errorClass,
  formElement,
  inputElement,
  errorMessage
) => {
  const errorElement = formElement.querySelector(
    `${inputErrorClass}${inputElement.name}`
  );
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (
  inputErrorClass,
  errorClass,
  formElement,
  inputElement
) => {
  const errorElement = formElement.querySelector(
    `${inputErrorClass}${inputElement.name}`
  );
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (config, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      config.inputErrorClass,
      config.errorClass,
      formElement,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    hideInputError(
      config.inputErrorClass,
      config.errorClass,
      formElement,
      inputElement
    );
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (config, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

const setEventListeners = (config, formElement) => {
  const inputsList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(config, inputsList, buttonElement);
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(config, formElement, inputElement);
      toggleButtonState(config, inputsList, buttonElement);
    });
  });
};

const enableValidation = (config) => {
  const formsList = Array.from(document.querySelectorAll(config.formSelector));
  formsList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(config, formElement);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__form-save-button',
  inactiveButtonClass: 'popup__form-save-button_inactive',
  inputErrorClass: '.popup__form-text-error_type_',
  errorClass: 'popup__form-text-error_active',
});
