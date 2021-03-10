// ● Создадим массив для семи элементов;
// ● Заполним его случайными цифрами от 0 до 10;
// ● Цифры в массиве не должны повторяться;
// ● Вывести этот массив в консоль;
// ● Упорядочить массив;
// ● Еще раз вывести его в консоль.

const arr = [];

while (arr.length < 7){
  const random = Math.round(Math.random() * 10);

  if (! arr.includes(random)) {
    arr.push(random);
  }
}


console.log(arr)
console.log(arr.slice().sort((a, b) => a - b));