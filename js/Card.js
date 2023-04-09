export default class Card {
  constructor(data, cardTemplateId, handleCardZoom) {
    this._link = data.link;
    this._name = data.name;
    this._cardTemplateId = cardTemplateId;
    this._element = undefined;
    this._handleCardZoom = handleCardZoom;
  }

  _createTemplate() {
    const elementTemplate = document
      .querySelector(this._cardTemplateId)
      .content.cloneNode(true);
    return elementTemplate;
  }

  _handleLike() {
    this._likeButton.classList.toggle('elements__like-button_active');
  }

  _handleDelete(evt) {
    const trashCard = evt.target.closest('.elements__grid');
    trashCard.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    });
    this._trashButton.addEventListener('click', (evt) => {
      this._handleDelete(evt);
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardZoom(this._link, this._name);
    });
  }

  createCard() {
    this._element = this._createTemplate();
    this._cardImage = this._element.querySelector('.elements__photo-grid');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.elements__grid-text').textContent =
      this._name;
    this._likeButton = this._element.querySelector('.elements__like-button');
    this._trashButton = this._element.querySelector('.elements__trash-button');
    this._setEventListeners();
    return this._element;
  }
}
