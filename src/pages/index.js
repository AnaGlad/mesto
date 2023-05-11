import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Api from '../components/Api.js';
import './index.css';
import {
  config,
  options,
  buttonEditProfile,
  profileFormName,
  profileFormOccupation,
  formEditProfile,
  buttonAddCard,
  formAddCard,
  buttonChangeAvatar,
  formChangeAvatar,
} from '../utils/constants.js';

//Classes

const api = new Api(options);
const formValidationAdd = new FormValidator(config, formAddCard);
const formValidationEdit = new FormValidator(config, formEditProfile);
const formValidationChangeAvatar = new FormValidator(config, formChangeAvatar);
let cardSection = undefined;
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
const popupChangeAvatarElement = new PopupWithForm(
  '.popup_type_change-avatar',
  handleFormSubmitChangeAvatar,
  formValidationChangeAvatar
);

const popupZoomElement = new PopupWithImage('.popup_type_zoomimg');
let userInfo = undefined;

const popupDeleteElement = new PopupWithSubmit('.popup_type_remove');

// Functions
function handleFormSubmitChangeAvatar(itemValues) {
  return api.changeAvatar(itemValues['change-avatar']).then((res) => {
    userInfo.setUserAvatar(res.avatar);
  });
}

function handleFormSubmitEdit(result) {
  return api.changeUserInfo(result.name, result.occupation).then((res) => {
    userInfo.setUserInfo({ name: res.name, occupation: res.about });
  });
}

function handleFormSubmitAdd(itemValues) {
  return api.postNewCard(itemValues.name, itemValues.link).then((res) => {
    cardSection.addItem(res);
  });
}
function handlerDeleteWithSubmit(handleDelete, cardId) {
  popupDeleteElement.setHandler(() => {
    return api.deleteCard(cardId).then(() => {
      handleDelete();
    });
  });
  popupDeleteElement.openPopup();
}
function handleAddLike(cardId) {
  return api.putLike(cardId);
}

function handleDeleteLike(cardId) {
  return api.deleteLike(cardId);
}

function openZoom(link, name) {
  popupZoomElement.openPopup(link, name);
}

function makeNewCard(element) {
  return new Card(
    element,
    '#elements-template',
    openZoom,
    handlerDeleteWithSubmit,
    userInfo.getUserInfo().id,
    handleAddLike,
    handleDeleteLike
  ).createCard();
}

// Function Call

formValidationAdd.enableValidation();
formValidationEdit.enableValidation();
formValidationChangeAvatar.enableValidation();

popupEditElement.setEventListeners();
popupAddElement.setEventListeners();
popupZoomElement.setEventListeners();
popupChangeAvatarElement.setEventListeners();
popupDeleteElement.setEventListeners();

api
  .getUserInfo()
  .then((result) => {
    userInfo = new UserInfo({
      nameSelector: '.profile__name',
      occupationSelector: '.profile__occupation',
      avatarSelector: '.profile__avatar',
      userId: result._id,
    });
    userInfo.setUserInfo({
      name: result.name,
      occupation: result.about,
    });
    userInfo.setUserAvatar(result.avatar);
  })
  .then(() => {
    api
      .getInitialCards()
      .then((vals) => {
        cardSection = new Section(
          {
            items: vals.reverse(),
            renderer: makeNewCard,
          },
          '.elements'
        );
        cardSection.rendererAllItems();
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

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

buttonChangeAvatar.addEventListener('click', () => {
  popupChangeAvatarElement.openPopup();
  formValidationChangeAvatar.resetValidationErrors();
});
