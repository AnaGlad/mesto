import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photoZoom = document.querySelector('.popup__photo-zoom');
    this._photoNameZoom = document.querySelector('.popup__photo-name');
  }

  openPopup(link, name) {
    super.openPopup();
    this._photoZoom.setAttribute('src', link);
    this._photoNameZoom.textContent = name;
    this._photoZoom.setAttribute('alt', name);
  }
}
