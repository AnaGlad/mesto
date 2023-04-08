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

  _hasInvalidInput(inputsList) {
    return inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _activateButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  deactivateButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _toggleButtonState(inputsList) {
    if (this._hasInvalidInput(inputsList)) {
      this.deactivateButton();
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

  hideInputError(inputElement) {
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
      this.hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    const inputsList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputsList);
    inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputsList);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
