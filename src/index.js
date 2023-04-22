import Card from '../js/Card.js';
import FormValidator from '../js/FormValidator.js';
import Popup from '../js/Popup.js';
import PopupWithForm from '../js/PopupWithForm.js';
import PopupWithImage from '../js/PopupWithImage.js';
import UserInfo from '../js/UserInfo.js';

import { initialCards, config } from '../js/constants.js';

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
const popupOverlay = document.querySelectorAll('.popup');

const formValidationAdd = new FormValidator(config, formAddCard);
const formValidationEdit = new FormValidator(config, formEditProfile);
const popupEditElement = new PopupWithForm(
  '.popup_type_edit',
  handleFormSubmitEdit
);
const popupAddElement = new PopupWithForm(
  '.popup_type_add',
  handleFormSubmitAdd
);
const popupZoomElement = new PopupWithImage('.popup_type_zoomimg');
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  occupationSelector: '.profile__occupation',
});

// Functions

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   addListenerClosePopupByEsc();
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   removeListenerClosePopupByEsc();
// }

// function addListenerClosePopupByEsc() {
//   document.addEventListener('keydown', closePopupByEsc);
// }

// function removeListenerClosePopupByEsc() {
//   document.removeEventListener('keydown', closePopupByEsc);
// }

// function closePopupByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const popup = document.querySelector('.popup_opened');
//     closePopup(popup);
//   }
// }

// function closePopupByMouse() {
//   popupOverlay.forEach((overlay) => {
//     overlay.addEventListener('mousedown', function (evt) {
//       if (evt.target.classList.contains('popup')) {
//         closePopup(evt.target);
//       }
//     });
//   });
// }

// function openPopupEditProfile() {
//   openPopup(popupEditProfile);
//   profileFormName.value = profileName.textContent;
//   profileFormOccupation.value = profileOccupation.textContent;
//   formValidationEdit.resetValidationErrors();
// }

// function openPopupAddCard() {
//   openPopup(popupAddCard);
//   formAddCard.reset();
//   formValidationAdd.resetValidationErrors();
// }

// function openPopupZoom(link, name) {
//   // openPopup(popupZoom);
//   popupZoomElement.openPopup(link, name)
//   // photoZoom.setAttribute('src', link);
//   // photoNameZoom.textContent = name;
//   // photoZoom.setAttribute('alt', name);
// }

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo({
    name: profileFormName.value,
    occupation: profileFormOccupation.value,
  });
  // profileName.textContent = profileFormName.value;
  // profileOccupation.textContent = profileFormOccupation.value;
  popupEditElement.closePopup();
}

function makeNewCard(element) {
  return new Card(
    element,
    '#elements-template',
    popupZoomElement.openPopup
  ).createCard();
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const newItem = {};
  newItem.name = formTypePlace.value;
  newItem.link = formTypePlaceLink.value;
  const card = makeNewCard(newItem);
  cardsContainer.prepend(card);
  popupAddElement.closePopup();
}

// Function Call

initialCards.reverse().forEach((item) => {
  const card = makeNewCard(item);
  cardsContainer.prepend(card);
});

formValidationAdd.enableValidation();

formValidationEdit.enableValidation();

popupEditElement.setEventListeners();
popupAddElement.setEventListeners();
popupZoomElement.setEventListeners();

// closePopupByMouse();

// Events

buttonEditProfile.addEventListener('click', () => {
  profileFormName.value = userInfo.getUserInfo().name;
  profileFormOccupation.value = userInfo.getUserInfo().occupation;
  popupEditElement.openPopup();
});
buttonAddCard.addEventListener('click', () => popupAddElement.openPopup());
// popupEditProfileCloseButton.addEventListener('click', () =>
//   closePopup(popupEditProfile)
// );

// popupAddCardCloseButton.addEventListener('click', () =>
//   closePopup(popupAddCard)
// );
// popupZoomCloseButton.addEventListener('click', () => closePopup(popupZoom));
// formEditProfile.addEventListener('submit', handleFormSubmitEdit);
// formAddCard.addEventListener('submit', handleFormSubmitAdd);
