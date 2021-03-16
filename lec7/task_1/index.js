const addUserBtnElement = document.querySelector('.add-user');
const modalElement = document.querySelector('.modal');
const closeBtnElements = document.querySelectorAll('.close');
const formInputElements = document.querySelectorAll('.popup-form input');

addUserBtnElement.addEventListener('click', showModalHandler);
closeBtnElements.forEach(closeBtnElement => closeBtnElement.addEventListener('click', hideModalHandler));

// Закрытие модального окна по кнопке "ESC"
document.addEventListener ('keydown', evt => {
	if (evt.keyCode === 27) {
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

