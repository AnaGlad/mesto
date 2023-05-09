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

export {
  buttonEditProfile,
  profileFormName,
  profileFormOccupation,
  formEditProfile,
  buttonAddCard,
  formAddCard,
  buttonChangeAvatar,
  formChangeAvatar,
};
