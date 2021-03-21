// Табуляция.
// ● Сверстать три кнопки “таба” и три поля для контента.
// ● Добавить функционал переключения контента по клику на таб.
// ● Контент по клику на кнопку должен меняться.

// Удаление таба.
// ● Добавить функционал удаления кнопки.
// ● Контент, который она включает тоже должен удалиться.
// ● Последнюю кнопку удалить невозможно.

const tabElements = document.querySelectorAll ('.tab');
const removeBtnElements = document.querySelectorAll('.btnRemove');

tabElements.forEach(tabElement => {
  tabElement.addEventListener ('click', tabClickHandler)
})

removeBtnElements.forEach(removeBtnElement => {
  removeBtnElement.addEventListener ('click', removeClickHandler)
})

function tabClickHandler (evt) {
  const contentId = evt.target.dataset.id;
  setActiveTab(contentId);
}

function removeClickHandler (evt) {
  evt.stopPropagation();

  const tabElement = evt.target.parentElement;
  const contentId = tabElement.dataset.id;

  const contentElement = document.querySelector (`.content-${contentId}`);
  contentElement.remove();
  tabElement.remove();

  const tabActiveElement = document.querySelector ('.tab.active');
  if (!tabActiveElement) {
    const tabElement = document.querySelector ('.tab');

    const contentId = tabElement.dataset.id;
    setActiveTab(contentId);
  }

  const tabElements = document.querySelectorAll('.tab');
  if (tabElements.length === 1) {
    document.querySelector('.tab .btnRemove').remove();
  }
}

function setActiveTab (id) {
  const tabActiveElement = document.querySelector ('.tab.active');
  const contentActiveElement = document.querySelector ('.content.active');

  if (tabActiveElement) {
  	tabActiveElement.classList.remove('active');
    contentActiveElement.classList.remove('active');
  }

  const tabElement = document.querySelector (`.tab[data-id = "${id}"]`);
  const contentElement = document.querySelector (`.content-${id}`);
  contentElement.classList.add('active');
  tabElement.classList.add('active');
}
