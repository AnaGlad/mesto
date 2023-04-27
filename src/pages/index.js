import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import { initialCards, config } from '../components/constants.js';
import './index.css';
import {
  popupEditProfile,
  buttonEditProfile,
  profileFormName,
  profileFormOccupation,
  formEditProfile,
  buttonAddCard,
  formTypePlace,
  formTypePlaceLink,
  formAddCard,
} from '../components/globalConstants.js';

//Classes

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

function handleFormSubmitEdit(itemValues) {
  userInfo.setUserInfo(itemValues);
  popupEditElement.closePopup();
}

function openZoom(link, name) {
  popupZoomElement.openPopup(link, name);
}

function makeNewCard(element) {
  return new Card(element, '#elements-template', openZoom).createCard();
}

function handleFormSubmitAdd(itemValues) {
  cardSection.addItem(itemValues);
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
  const profileInfo = userInfo.getUserInfo();
  profileFormName.value = profileInfo.name;
  profileFormOccupation.value = profileInfo.occupation;
  popupEditElement.openPopup();
  formValidationEdit.resetValidationErrors();
});
buttonAddCard.addEventListener('click', () => {
  popupAddElement.openPopup();
  formValidationAdd.resetValidationErrors();
});
