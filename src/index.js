import Card from '../js/Card.js';
import FormValidator from '../js/FormValidator.js';
import PopupWithForm from '../js/PopupWithForm.js';
import PopupWithImage from '../js/PopupWithImage.js';
import UserInfo from '../js/UserInfo.js';
import Section from '../js/Section.js';

import { initialCards, config } from '../js/constants.js';

// Edit profile

const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const profileFormName = document.querySelector('.popup__form-text_type_name');
const profileFormOccupation = document.querySelector(
  '.popup__form-text_type_occupation'
);
const formEditProfile = popupEditProfile.querySelector('.popup__form');

// Add card

const popupAddCard = document.querySelector('.popup_type_add');
const buttonAddCard = document.querySelector('.profile__add-button');

const formTypePlace = document.querySelector('.popup__form-text_type_place');
const formTypePlaceLink = document.querySelector(
  '.popup__form-text_type_place-link'
);
const formAddCard = popupAddCard.querySelector('.popup__form');

const formValidationAdd = new FormValidator(config, formAddCard);
const formValidationEdit = new FormValidator(config, formEditProfile);
const popupEditElement = new PopupWithForm(
  '.popup_type_edit',
  handleFormSubmitEdit,
  formValidationEdit
);
const popupAddElement = new PopupWithForm(
  '.popup_type_add',
  handleFormSubmitAdd,
  formValidationAdd
);
const popupZoomElement = new PopupWithImage('.popup_type_zoomimg');
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  occupationSelector: '.profile__occupation',
});
const cardSection = new Section(
  {
    items: initialCards.reverse(),
    renderer: makeNewCard,
  },
  '.elements'
);
cardSection.rendererAllItems();

// Functions

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo({
    name: profileFormName.value,
    occupation: profileFormOccupation.value,
  });
  popupEditElement.closePopup();
}

function openZoom(link, name) {
  popupZoomElement.openPopup(link, name);
}

function makeNewCard(element) {
  return new Card(element, '#elements-template', openZoom).createCard();
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const newItem = {};
  newItem.name = formTypePlace.value;
  newItem.link = formTypePlaceLink.value;
  cardSection.addItem(newItem);
  popupAddElement.closePopup();
}

// Function Call

formValidationAdd.enableValidation();

formValidationEdit.enableValidation();

popupEditElement.setEventListeners();
popupAddElement.setEventListeners();
popupZoomElement.setEventListeners();

// Events

buttonEditProfile.addEventListener('click', () => {
  profileFormName.value = userInfo.getUserInfo().name;
  profileFormOccupation.value = userInfo.getUserInfo().occupation;
  popupEditElement.openPopup();
});
buttonAddCard.addEventListener('click', () => popupAddElement.openPopup());
