// создать поле 10 на 10, заполненное случайными цифрами от 1 до 4
// ниже располагается палитра из 4ех цветов, к каждому цвету своя цифра
// при нажатии на нужный цвет реализовать возможность закрашивания секции в нашем поле
// согласно той цифры что мы выбрали

const gameElement = document.querySelector('.game');
const selectedColorElement = document.querySelector('.color-selected');
let selectedColor = '';

const SIZE_X = 10;
const SIZE_Y = 10;
const COLORS = [1,2,3,4];

for (let i = 0; i < SIZE_X; i++) {
	for(let j = 0; j < SIZE_Y; j++) {
  	const cellElement = document.createElement('div');
    cellElement.classList.add('field');
    cellElement.innerText = getRandomColor(COLORS);
    gameElement.append(cellElement);

    cellElement.addEventListener('click', () => {
    console.log('filled with ' + selectedColor);
		setColorForElement(cellElement, selectedColor);
    })
  }
}

console.log(`done ${SIZE_X}x${SIZE_Y}`);

function getRandomColor (list) {
	const index = Math.floor(Math.random() * list.length);

  return list[index];
}

document.querySelectorAll('.colors .field').forEach((element) => {
	element.addEventListener('click', pickColor);
})

function pickColor(event) {
	console.log(event.target.dataset.color);
  selectedColor = event.target.dataset.color;
  setColorForElement(selectedColorElement, selectedColor);
}

function setColorForElement(element, color) {
  element.classList.remove('color1');
	element.classList.remove('color2');
	element.classList.remove('color3');
	element.classList.remove('color4');
	element.classList.add(color);
}