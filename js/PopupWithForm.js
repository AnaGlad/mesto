import Popup from '../js/Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form')
  }
  _getInputValues() {
    this._inputsArray = this._popup.querySelectorAll('.popup__form-text');
    this._inputValues = [];
    this._inputsArray.forEach((input) => {
      this._inputValues.append(input.value);
    });
    // const newItem = {};
    // newItem.name = formTypePlace.value;
    // newItem.link = formTypePlaceLink.value;
  }
  setEventListeners() {
    // evt.preventDefault();
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleFormSubmit);
  }
  closePopup() {
    super.closePopup();
    this._popupForm.reset();
    // this._popup.resetValidationErrors();
  }
}
