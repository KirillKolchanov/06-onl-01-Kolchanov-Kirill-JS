// Задание 3! Семейный бюджет.
// Используя prompt указать сумму, и вы должны
// написать расчет денег на покупку продуктов на всю семью,
// продукты + цена + кол-во указанны в масиве products
// Указать в alerts сколько целых дней смогут прожить семья
// Петровичей на указаннуюу сумму и указать остаток денег.

const goods = [
{
  product : 'Молоко',
  price : 40,
  count : 2,
} ,
{
  product : 'Картошка',
  price : 14,
  count : 10,
} ,
{
  product : 'Минералка',
  price : 29,
  count : 2,
} ,
{
  product : 'Хлеб',
  price : 19,
  count : 1,
} ,
{
  product : 'Конфеты',
  price : 11,
  count : 15,
}
];
let moneyDay = 0;
for (let i = 0; i < goods.length; i++) {
   moneyDay += goods[i].price * goods[i].count;
}

let amount = +prompt('Сколько у вас денег?', 0);
let days = Math.floor(amount / moneyDay);
let rest= amount % moneyDay;
alert (`Семья Петровичей на указанную сумму сможет прожить ${days} дней.

Остаток: ${rest} рублей`);