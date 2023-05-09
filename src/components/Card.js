import PopupWithSubmit from '../components/PopupWithSubmit.js';
export default class Card {
  constructor(
    data,
    cardTemplateId,
    handleCardClick,
    popupWithSubmit,
    userId,
    api
  ) {
    this._link = data.link;
    this._name = data.name;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._api = api;
    this._likes = data.likes;
    this._cardTemplateId = cardTemplateId;
    this._handleCardClick = handleCardClick;
    this._popupWithSubmit = popupWithSubmit;
    this._userId = userId;
  }

  _createTemplate() {
    const elementTemplate = document
      .querySelector(this._cardTemplateId)
      .content.querySelector('.elements__grid')
      .cloneNode(true);
    return elementTemplate;
  }

  _handleLike() {
    this._countLike();
    this._likeButton.classList.toggle('elements__like-button_active');
  }

  _countLike() {
    if (this._likeButton.classList.contains('elements__like-button_active')) {
      this._counter.textContent = Number(this._counter.textContent) - 1;
      this._api.deleteLike(this._cardId);
    } else {
      this._counter.textContent = Number(this._counter.textContent) + 1;
      this._api.putLike(this._cardId);
    }
  }

  _handleDelete() {
    this._element.closest('.elements__grid').remove();
    this._api.deleteCard(this._cardId);
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    });
    this._trashButton.addEventListener('click', () => {
      this._popupWithSubmit.setHandler(() => {
        this._handleDelete();
      });
      this._popupWithSubmit.openPopup();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
  }
  getId() {
    return this._element.id;
  }

  createCard() {
    this._element = this._createTemplate();
    this._cardImage = this._element.querySelector('.elements__photo-grid');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.elements__grid-text').textContent =
      this._name;
    this._likeButton = this._element.querySelector('.elements__like-button');
    this._likes.forEach((like) => {
      if (like._id === this._userId) {
        this._likeButton.classList.toggle('elements__like-button_active');
      }
    });
    this._counter = this._element.querySelector('.elements__like-counter');
    this._counter.textContent = this._likes.length;
    this._trashButton = this._element.querySelector('.elements__trash-button');
    if (this._userId !== this._ownerId) {
      this._trashButton.remove();
    }
    this._setEventListeners();
    return this._element;
  }
}
