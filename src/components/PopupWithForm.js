import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputsArray = this._popup.querySelectorAll('.popup__form-text');
    this._submitButton = this._popup.querySelector('.popup__form-save-button');
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputsArray.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const initialText = this._submitButton.textContent;
      this._submitButton.textContent = 'Сохранение...';
      this._handleFormSubmit(this._getInputValues())
        .then(() => {
          this.closePopup();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this._submitButton.textContent = initialText;
        });
    });
  }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }
}
