import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      // console.log(evt);
      // console.log(this);
      evt.preventDefault();
      this._handleCardRemove();
      this.closePopup();
    });
  }
  setHandler(handler) {
    this._handleCardRemove = handler;
  }
}
