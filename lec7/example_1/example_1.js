//Создать поле ввода и кнопку, при нажатии которой снизу будет появляться тот текст,
// который написан в том самом поле ввода

const containerElement = document.querySelector('.container');
const buttonElement = document.querySelector('.clickMe');
const inputElement = document.querySelector('.input');


buttonElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler () {

  const pElement = document.createElement('p');
  pElement.innerText = `Hello ${inputElement.value}`;

  containerElement.append(pElement);

  inputElement.value = '';
}