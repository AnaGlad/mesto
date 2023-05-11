import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleCardRemove()
        .then(() => {
          this.closePopup();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  setHandler(handler) {
    this._handleCardRemove = handler;
  }
}
