const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__form-save-button',
  inactiveButtonClass: 'popup__form-save-button_inactive',
  inputErrorClass: '.popup__form-text-error_type_',
  errorClass: 'popup__form-text-error_active',
  errorUnderline: 'popup__form-text_underline-active',
};

const options = {
  baseUrl: `https://mesto.nomoreparties.co/v1/cohort-65/` ,
  headers: {
    authorization: '457787a8-c64b-43bb-94d0-8ef91e28713a',
    'Content-Type': 'application/json',
  }
}
// Edit profile popup
const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const profileFormName = document.querySelector('.popup__form-text_type_name');
const profileFormOccupation = document.querySelector(
  '.popup__form-text_type_occupation'
);
const formEditProfile = popupEditProfile.querySelector('.popup__form');

//Change Avatar popup
const popupChangeAvatar = document.querySelector('.popup_type_change-avatar');
const buttonChangeAvatar = document.querySelector('.profile__avatar');
const formChangeAvatar = popupChangeAvatar.querySelector('.popup__form');

// Add card popup
const popupAddCard = document.querySelector('.popup_type_add');
const buttonAddCard = document.querySelector('.profile__add-button');
const formAddCard = popupAddCard.querySelector('.popup__form');

export {config, options,
  buttonEditProfile,
  profileFormName,
  profileFormOccupation,
  formEditProfile,
  buttonAddCard,
  formAddCard,
  buttonChangeAvatar,
  formChangeAvatar,
};