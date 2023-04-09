export default class FormValidator {
  constructor(constConfig, form) {
    this._formSelector = constConfig.formSelector;
    this._inputSelector = constConfig.inputSelector;
    this._submitButtonSelector = constConfig.submitButtonSelector;
    this._inactiveButtonClass = constConfig.inactiveButtonClass;
    this._inputErrorClass = constConfig.inputErrorClass;
    this._errorClass = constConfig.errorClass;
    this._errorUnderline = constConfig.errorUnderline;
    this._form = form;
  }

  _hasInvalidInput() {
    return this._inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _activateButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _deactivateButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._deactivateButton();
    } else {
      this._activateButton();
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(
      `${this._inputErrorClass}${inputElement.name}`
    );
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._errorUnderline);
  }

  resetValidationErrors() {
    this._inputsList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._errorUnderline);
    const errorElement = this._form.querySelector(
      `${this._inputErrorClass}${inputElement.name}`
    );
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputsList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this.toggleButtonState();
    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
