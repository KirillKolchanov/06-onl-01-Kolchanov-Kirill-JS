// Напишите функцию, принимающую на вход строку, и
// возвращающую первый символ, который встречается
// в строке только один раз. Если это буква, то она
// должна быть в том регистре, в котором она встретилась
// в строке. Например, для строки mAmaN вернуть N.
// Если все символы встречаются больше одного раза, вернуть пустую строку.

function firstNonRepeatingLetter(str) {

  const arr = str.split();

  for(let index in arr) {
    let isRepeated = isExistInArray(index, arr);

    if(!isRepeated) {
      return arr[index];
    } else {
      return ('');
    }
  }

  function isExistInArray (index, array) {
    let x = array[index].toUpperCase();

    for (let key in array){
      if ((key != index) && (array[key].toUpperCase() === x)) {
        return true;
      }
    }

    return false;
  }

}

console.log(firstNonRepeatingLetter('mAmaN'));
console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('paPA'));
console.log(firstNonRepeatingLetter('Go hang a salami, I\'m a lasagna hog!'));
