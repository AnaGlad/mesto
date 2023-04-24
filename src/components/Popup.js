export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    this._addListenerClosePopupByEsc();
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    this._removeListenerClosePopupByEsc();
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  _addListenerClosePopupByEsc() {
    document.addEventListener(
      'keydown',
      (this._handleEsc = (evt) => this._handleEscClose(evt))
    );
  }

  _removeListenerClosePopupByEsc() {
    document.removeEventListener('keydown', this._handleEsc);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.closePopup();
      }
    });

    this._popupCloseButton.addEventListener('click', () => this.closePopup());
  }
}
