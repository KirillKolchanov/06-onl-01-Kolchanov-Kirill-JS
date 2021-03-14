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