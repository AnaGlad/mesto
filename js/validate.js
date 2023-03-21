const showInputError = (
  inputErrorClass,
  errorClass,
  formElement,
  inputElement,
  errorMessage,
  errorUnderline
) => {
  const errorElement = formElement.querySelector(
    `${inputErrorClass}${inputElement.name}`
  );
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
  inputElement.classList.add(errorUnderline);
};

const hideInputError = (
  inputErrorClass,
  errorClass,
  formElement,
  inputElement,
  errorUnderline
) => {
  const errorElement = formElement.querySelector(
    `${inputErrorClass}${inputElement.name}`
  );
  errorElement.classList.remove(errorClass);
  inputElement.classList.remove(errorUnderline);
  errorElement.textContent = '';
};

const checkInputValidity = (config, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      config.inputErrorClass,
      config.errorClass,
      formElement,
      inputElement,
      inputElement.validationMessage,
      config.errorUnderline
    );
  } else {
    hideInputError(
      config.inputErrorClass,
      config.errorClass,
      formElement,
      inputElement,
      config.errorUnderline
    );
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const activateButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
};

const deactivateButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
};

const toggleButtonState = (config, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    deactivateButton(buttonElement, config.inactiveButtonClass);
  } else {
    activateButton(buttonElement, config.inactiveButtonClass);
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

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__form-save-button',
  inactiveButtonClass: 'popup__form-save-button_inactive',
  inputErrorClass: '.popup__form-text-error_type_',
  errorClass: 'popup__form-text-error_active',
  errorUnderline: 'popup__form-text-underline_active',
};

enableValidation(config);
