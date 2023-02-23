const popup = document.querySelector(".popup"); // открыть по кнопке
const editButton = document.querySelector(".profile__edit-button");

const popupCloseButton = document.querySelector(".popup__close-button");
popupCloseButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

const formName = document.querySelector(".popup__form-text_name");
const formOccupation = document.querySelector(".popup__form-text_occupation");

editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  formName.value = profileName.textContent;
  formOccupation.value = profileOccupation.textContent;
});

// Находим форму в DOM
let formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
// Воспользуйтесь инструментом .querySelector()
// Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  profileName.textContent = formName.value;
  profileOccupation.textContent = formOccupation.value;
  // Вставьте новые значения с помощью textContent
  popup.classList.remove("popup_opened");
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
