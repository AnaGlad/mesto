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

// Zoom

const popupZoom = document.querySelector('.popup_type_zoomimg');
const popupZoomCloseButton = popupZoom.querySelector('.popup__close-button');
const photoZoom = document.querySelector('.popup__photo-zoom');
const photoNameZoom = document.querySelector('.popup__photo-name');

const elements = document.querySelector('.elements');

// Functions

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopupEditProfile() {
  openPopup(popupEditProfile);
  profileFormName.value = profileName.textContent;
  profileFormOccupation.value = profileOccupation.textContent;
}

function openPopupAddCard() {
  openPopup(popupAddCard);
  formAddCard.reset();
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

function createCard(card) {
  const elementTemplate = document
    .querySelector('#elements-template')
    .content.cloneNode(true);
  const elementGridText = elementTemplate.querySelector('.elements__grid-text');
  elementGridText.textContent = card.name;

  const elementPhotoGrid = elementTemplate.querySelector(
    '.elements__photo-grid'
  );
  elementPhotoGrid.setAttribute('src', card.link);
  elementPhotoGrid.setAttribute('alt', card.name);

  elementPhotoGrid.addEventListener('click', () => openPopupZoom(card));

  const elementTrashButton = elementTemplate.querySelector(
    '.elements__trash-button'
  );
  elementTrashButton.addEventListener('click', handleTrashButton);

  const elementLikeButton = elementTemplate.querySelector(
    '.elements__like-button'
  );
  elementLikeButton.addEventListener('click', handleLikeButton);
  return elementTemplate;
}

function addCard(card) {
  elements.prepend(createCard(card));
}

function handleTrashButton(evt) {
  const trashButton = evt.target;
  const trashCard = trashButton.closest('.elements__grid');
  trashCard.remove();
}

function handleLikeButton(evt) {
  evt.target.classList.toggle('elements__like-button_active');
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const newItem = {};
  newItem.name = formTypePlace.value;
  newItem.link = formTypePlaceLink.value;
  addCard(newItem);
  closePopup(popupAddCard);
}

// Function Call
initialCards.reverse().forEach(addCard);

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
