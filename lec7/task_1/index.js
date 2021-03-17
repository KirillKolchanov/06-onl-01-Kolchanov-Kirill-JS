// Вывод модального окна.
// ● Скачать заготовку по ссылке;
// ● Сверстано модальное окно, для отображения требуется убрать (display: none) у .modal;
// ● Добавим функционал появления модального окна, по клику на кнопку “Add User”.
// Закрытие модального окна.
// ● Добавим функционал закрытия модального окна.
// ○ по клику на знак “Х” в правом верхнем углу;
// ○ по клику на кнопку “close”;
// ○ При закрытии окна поля ввода должны очищаться.

const addUserBtnElement = document.querySelector('.add-user');
const modalElement = document.querySelector('.modal');
const closeBtnElements = document.querySelectorAll('.close');
const formInputElements = document.querySelectorAll('.popup-form input');

addUserBtnElement.addEventListener('click', showModalHandler);
closeBtnElements.forEach(closeBtnElement => closeBtnElement.addEventListener('click', hideModalHandler));

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

// Функция по зачистке инпутов в модальном окне
function formCleanup() {
  formInputElements.forEach(formInputElement => formInputElement.value = '');
}

