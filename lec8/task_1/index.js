// ● Расширим функционал модального окна из занятия #7.
// ● При добавлении пользователя через модальное окно, добавим полученный объект в массив пользователей.
// ● Снова отрисуем массив, уже с новым пользователем.

const addUserBtnElement = document.querySelector('.add-user');
const modalElement = document.querySelector('.modal');
const closeBtnElements = document.querySelectorAll('.close');
const okBtnElement = document.querySelector('.ok');
const formInputElements = document.querySelectorAll('.popup-form input');
const tableElement = document.querySelector('.table');
const popupFormElement = document.querySelector('.popup-form');

// Сюда записываются созданные юзеры
 const users = [ ];

addUserBtnElement.addEventListener('click', showModalHandler);
closeBtnElements.forEach(closeBtnElement => closeBtnElement.addEventListener('click', hideModalHandler));
okBtnElement.addEventListener('click', addUserHandler);

/* popupFormElement.addEventListener('submit', submitHandler); */

// Закрытие модального окна по кнопке "ESC"
document.addEventListener ('keydown', evt => {
  if (evt.code == 'Escape') {
  hideModalHandler();
  }
})

// Функция по открытию модального окна
function showModalHandler() {
  modalElement.classList.add('active');
}

// Функция по закрытию модального окна
function hideModalHandler() {
  modalElement.classList.remove('active');
  formCleanup();
}

//создание юзеров
function addUserHandler(evt) {
  const newUser = {};

  formInputElements.forEach(formInputElement => {
    newUser[formInputElement.name] = formInputElement.value;
})

  users.push(newUser);

  renderUser(newUser);

  console.log(users);

  hideModalHandler();
}

// Функция по зачистке инпутов в модальном окне
function formCleanup() {
  formInputElements.forEach(formInputElement => formInputElement.value = '');
}

function initTable(usersList) {
  usersList.forEach(renderUser);
}

function renderUser(user) {
  const template = (`<tr><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.age}</td>`);

  const templateElement = createElement(template);

  tableElement.append(templateElement);
}

function createElement(template) {
  const element = document.createElement('table');
  element.innerHTML = template;

  return element.firstElementChild;
}

initTable(users);

