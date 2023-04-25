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

export {
  popupEditProfile,
  buttonEditProfile,
  profileFormName,
  profileFormOccupation,
  formEditProfile,
  buttonAddCard,
  formTypePlace,
  formTypePlaceLink,
  formAddCard,
};
