const popupEdit = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.profile__edit-button');

const popupAdd = document.querySelector('.popup_type_add');
const addButton = document.querySelector('.profile__add-button');

const popupZoom = document.querySelector('.popup_type_zoomimg');

const popupCloseButtonEdit = popupEdit.querySelector('.popup__close-button');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button');
const popupCloseButtonZoom = popupZoom.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

const formName = document.querySelector('.popup__form-text_type_name');
const formOccupation = document.querySelector(
  '.popup__form-text_type_occupation'
);

popupCloseButtonEdit.addEventListener('click', function () {
  popupEdit.classList.remove('popup_opened');
});

popupCloseButtonAdd.addEventListener('click', function () {
  popupAdd.classList.remove('popup_opened');
});

popupCloseButtonZoom.addEventListener('click', function () {
  popupZoom.classList.remove('popup_opened');
});

editButton.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
  formName.value = profileName.textContent;
  formOccupation.value = profileOccupation.textContent;
});

const formTypePlace = document.querySelector('.popup__form-text_type_place');
const formTypePlaceLink = document.querySelector(
  '.popup__form-text_type_place-link'
);

addButton.addEventListener('click', function () {
  popupAdd.classList.add('popup_opened');
  formTypePlace.value = '';
  formTypePlaceLink.value = '';
});

// Находим форму в DOM
let editFormElement = popupEdit.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
// Воспользуйтесь инструментом .querySelector()
// Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
console.log(editFormElement);
function handleFormSubmitEdit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  profileName.textContent = formName.value;
  profileOccupation.textContent = formOccupation.value;
  // Вставьте новые значения с помощью textContent
  popupEdit.classList.remove('popup_opened');
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editFormElement.addEventListener('submit', handleFormSubmitEdit);

// const profilePhotoPlaceName = document.querySelector('.elements__grid-text');

// Находим форму в DOM

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const elements = document.querySelector('.elements');

const createNewElement = function (gridelements) {
  const elementsTemplate = document
    .querySelector('#elements-template')
    .content.cloneNode(true);
  const elementsGridText = elementsTemplate.querySelector(
    '.elements__grid-text'
  );

  elementsGridText.textContent = gridelements.name;

  const elementsPhotoGrid = elementsTemplate.querySelector(
    '.elements__photo-grid'
  );
  elementsPhotoGrid.setAttribute('src', gridelements.link);
  elementsPhotoGrid.setAttribute('alt', gridelements.name);

  const photoZoom = document.querySelector('.popup__photo-zoom');
  const popupPhotoName = document.querySelector('.popup__photo-name');

  elementsPhotoGrid.addEventListener('click', function () {
    popupZoom.classList.toggle('popup_opened');
    photoZoom.setAttribute('src', gridelements.link);
    popupPhotoName.textContent = gridelements.name;
    photoZoom.setAttribute('alt', gridelements.name);
  });

  const elementsTrashButton = elementsTemplate.querySelector(
    '.elements__trash-button'
  );
  elementsTrashButton.addEventListener('click', clickTrashButton);

  const elementsLikeButton = elementsTemplate.querySelector(
    '.elements__like-button'
  );
  elementsLikeButton.addEventListener('click', clickLikeButton);

  elements.append(elementsTemplate);
};

initialCards.forEach(createNewElement);

function clickTrashButton(evt) {
  const trashbutton = evt.target;
  const trashcard = trashbutton.closest('.elements__grid');
  trashcard.remove();
}

function clickLikeButton(evt) {
  evt.target.classList.toggle('elements__like-button_active');
}
let addFormElement = popupAdd.querySelector('.popup__form');

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  let newItem = {};
  newItem.name = formTypePlace.value;
  newItem.link = formTypePlaceLink.value;
  createNewElement(newItem);
  popupAdd.classList.remove('popup_opened');
}
addFormElement.addEventListener('submit', handleFormSubmitAdd);
