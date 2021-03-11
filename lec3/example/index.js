// Задание 1! Поиск данных в массиве.
// ● Создадим массив объектов, который будет содержать данные о пользователях;
// ● Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя;
// ● Написать инструкцию поиска по массиву data, с введенными в prompt данными;
// ● Если есть совпадение - вывести все данные этого пользователя в altert;
// прим: user name: Ashton Kutcher. user age: 40.
// ● Если совпадения не произошло вывести alert с ошибкой: “No results found for your request”

var users = [
  {
      firstName: 'Ashton',
      lastName: 'Kutcher',
      age: 40
  }, {
      firstName: 'Bradley',
      lastName: 'Pitt',
      age: 54
  }, {
      firstName: 'Hannah',
      lastName: 'Dakota',
      age: 24
  }, {
      firstName: 'Bob',
      lastName: 'Dod',
      age: 24
  }, {
      firstName: 'Bob',
      lastName: 'Uncle',
      age: 70
  }
];

var username = prompt('please enter user name')
var result = [];

if (username !== null) {
 username = username.toUpperCase();
 console.log('user name exist')
 for (var user of users) {
   if ((user.firstName.toUpperCase() === username) || (user.lastName.toUpperCase() === username)) {
     result.push(user);
   }
 }
}

console.clear();

if (result.length > 0) {
 for (var user of result) {
   console.log('user name: '+user.firstName+' '+user.lastName+'.')
   console.log('user age: '+user.age+'.')
 }
} else {
 console.log('No results found for your request')
}
