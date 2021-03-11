// Задание 3! Функция-конструктор.
// ● Напишем функцию-конструктор, которая принимает массив, и содержит три метода:
// 1. возвращает количество элементов этого массива.
// 2. выводит новый массив, содержащий количество символов
// каждой строки. Прим на входе [“пирамида”, “юг”, “параллелограмм”] на выходе [8, 2, 14]
// 3. выводит их в виде строки, разделенной запятыми.

function arrayUtils(arr) {
  this.data = arr;
  this.length = () => arr.length;

  this.countSymbals = function () {
    let result =[];

    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i].length);
    }

  return result;
  }

  this.toString = function () {
    return arr.join(', ');
  }
}

let arrayUtils1 = new arrayUtils(['юг', 'параллелограмм']);
let arrayUtils2 = new arrayUtils(['пирамида', 'юг', 'параллелограмм']);
let arrayUtils3 = new arrayUtils(['lol', 'kek', 'cheburek']);

console.log (arrayUtils1.length());
console.log (arrayUtils1.countSymbals());
console.log (arrayUtils1.toString());

console.log (arrayUtils2.length());
console.log (arrayUtils2.countSymbals());
console.log (arrayUtils2.toString());

console.log (arrayUtils3.length());
console.log (arrayUtils3.countSymbals());
console.log (arrayUtils3.toString());
