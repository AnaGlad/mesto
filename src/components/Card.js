import PopupWithSubmit from '../components/PopupWithSubmit.js';
export default class Card {
  constructor(
    data,
    cardTemplateId,
    handleCardClick,
    handlerDeleteWithSubmit,
    userId,
    handlerPutLike,
    handlerDeleteLike
  ) {
    this._link = data.link;
    this._name = data.name;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._handlerPutLike = handlerPutLike;
    this._handlerDeleteLike = handlerDeleteLike;
    this._likes = data.likes;
    this._cardTemplateId = cardTemplateId;
    this._handleCardClick = handleCardClick;
    this._handlerDeleteWithSubmit = handlerDeleteWithSubmit;
    this._userId = userId;
  }

  _createTemplate() {
    const elementTemplate = document
      .querySelector(this._cardTemplateId)
      .content.querySelector('.elements__grid')
      .cloneNode(true);
    return elementTemplate;
  }

  _handleLikeContent(res) {
    this._counter.textContent = res.likes.length;
    this._likeButton.classList.toggle('elements__like-button_active');
  }

  _countLike() {
    if (this._likeButton.classList.contains('elements__like-button_active')) {
      this._handlerDeleteLike(this._cardId)
        .then((res) => {
          this._handleLikeContent(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this._handlerPutLike(this._cardId)
        .then((res) => {
          this._handleLikeContent(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  _handleDelete() {
    this._element.closest('.elements__grid').remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._countLike();
    });
    this._trashButton.addEventListener('click', () => {
      this._handlerDeleteWithSubmit(() => {
        return this._handleDelete();
      }, this._cardId);
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
