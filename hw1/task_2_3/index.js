// ● Создадим шесть переменных, в каждой
// из которых будет один из шести типов данных;
// ● Выводим их значение в alert;
// ● Выводим объект в консоль.

// Вывести в консоль все типы данных переменных, созданных в задании выше.

let a = 2;
let b = 'Car';
let c = NaN;
let d;
let e = true;
let user = {
  name: 'Kirill',
  age: 24,
};

alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(user);
console.log(user);

function showType(a) {
  return (typeof a)
};

console.log(showType(a));
console.log(showType(b));
console.log(showType(c));
console.log(showType(d));
console.log(showType(e));
console.log(showType(user));