import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, formValidator) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._formValidator = formValidator;
  }
  _getInputValues() {
    this._inputsArray = this._popup.querySelectorAll('.popup__form-text');
    this._inputValues = [];
    this._inputsArray.forEach((input) => {
      this._inputValues.append(input.value);
    });
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleFormSubmit);
  }
  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }
  openPopup() {
    super.openPopup();
    this._formValidator.resetValidationErrors();
  }
}
