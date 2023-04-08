import Card from './Card.js';
import FormValidator from './FormValidator.js';

// Edit profile

const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfileCloseButton = popupEditProfile.querySelector(
  '.popup__close-button'
);
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const profileFormName = document.querySelector('.popup__form-text_type_name');
const profileFormOccupation = document.querySelector(
  '.popup__form-text_type_occupation'
);
const formEditProfile = popupEditProfile.querySelector('.popup__form');

// Add card

const popupAddCard = document.querySelector('.popup_type_add');
const buttonAddCard = document.querySelector('.profile__add-button');
const popupAddCardCloseButton = popupAddCard.querySelector(
  '.popup__close-button'
);
const formTypePlace = document.querySelector('.popup__form-text_type_place');
const formTypePlaceLink = document.querySelector(
  '.popup__form-text_type_place-link'
);
const formAddCard = popupAddCard.querySelector('.popup__form');
const buttonCreateCard = popupAddCard.querySelector('.popup__form-save-button');

// Zoom

const popupZoom = document.querySelector('.popup_type_zoomimg');
const popupZoomCloseButton = popupZoom.querySelector('.popup__close-button');
const photoZoom = document.querySelector('.popup__photo-zoom');
const photoNameZoom = document.querySelector('.popup__photo-name');

const cardsContainer = document.querySelector('.elements');

// Functions

function openPopup(popup) {
  popup.classList.add('popup_opened');
  addListenerClosePopupByEsc();
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeListenerClosePopupByEsc();
}

function addListenerClosePopupByEsc() {
  document.addEventListener('keydown', closePopupByEsc);
}

function removeListenerClosePopupByEsc() {
  document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function closePopupByMouse() {
  document.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
    }
  });
}

function openPopupEditProfile() {
  openPopup(popupEditProfile);
  profileFormName.value = profileName.textContent;
  profileFormName.dispatchEvent(new Event('input'));
  profileFormOccupation.value = profileOccupation.textContent;
  profileFormOccupation.dispatchEvent(new Event('input'));
}

function openPopupAddCard() {
  openPopup(popupAddCard);
  formAddCard.reset();
  resetValidationErrors();
  formValidationAdd.deactivateButton();
}

function resetValidationErrors() {
  formValidationAdd.hideInputError(formTypePlace);
  formValidationAdd.hideInputError(formTypePlaceLink);
}

function openPopupZoom(card) {
  openPopup(popupZoom);
  photoZoom.setAttribute('src', card.link);
  photoNameZoom.textContent = card.name;
  photoZoom.setAttribute('alt', card.name);
}

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = profileFormName.value;
  profileOccupation.textContent = profileFormOccupation.value;
  closePopup(popupEditProfile);
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const newItem = {};
  newItem.name = formTypePlace.value;
  newItem.link = formTypePlaceLink.value;
  const card = new Card(newItem, '#elements-template');
  cardsContainer.prepend(card.createCard());
  closePopup(popupAddCard);
}

// Function Call

closePopupByMouse();

initialCards.reverse().forEach((item) => {
  const card = new Card(item, '#elements-template');
  cardsContainer.prepend(card.createCard());
});

const formValidationAdd = new FormValidator(config, formAddCard);
formValidationAdd.enableValidation();

const formValidationEdit = new FormValidator(config, formEditProfile);
formValidationEdit.enableValidation();

// Events

buttonEditProfile.addEventListener('click', openPopupEditProfile);
buttonAddCard.addEventListener('click', openPopupAddCard);
popupEditProfileCloseButton.addEventListener('click', () =>
  closePopup(popupEditProfile)
);

popupAddCardCloseButton.addEventListener('click', () =>
  closePopup(popupAddCard)
);
popupZoomCloseButton.addEventListener('click', () => closePopup(popupZoom));
formEditProfile.addEventListener('submit', handleFormSubmitEdit);
formAddCard.addEventListener('submit', handleFormSubmitAdd);
