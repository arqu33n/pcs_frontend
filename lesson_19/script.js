`use strict`;
let firstNumber = prompt(`Введите первое значение`);
// do {
//   console.log(`Первое значение не указано`);
//   firstNumber = prompt(`Нужно ввести значение!`);
//   console.log(firstNumber);
// } while (!firstNumber);

while (isNaN(Number(firstNumber)) || firstNumber === ``) {
  if (!firstNumber) {
    console.log(`Первое значение не указано`);
    firstNumber = prompt(`Нужно ввести значение!`);
  } else {
    console.log(`Некорректный ввод значения`);
    firstNumber = prompt(`Введите числовое значение`);
  }
}
console.log(firstNumber);

let operation = prompt(`Введите знак операции`);

function isOperatorValid(operator) {
  switch (operator) {
    case ``:
      console.log(`Не введен знак`);
      return false;
    case `+`:
      console.log(`Введено сложение`);
      return true;
    case `-`:
      console.log(`Введено вычитание`);
      return true;
    case `/`:
      console.log(`Введено деление`);
      return true;
    case `*`:
      console.log(`Введено умножение`);
      return true;
    default:
      console.log(`Программа не поддерживает данную операцию`);
      return false;
  }
}

while (!isOperatorValid(operation)) {
  if (operation === ``) {
    operation = prompt(`Нужно ввести знак операции!`);
  } else {
    operation = prompt(`Введите знак операции`);
  }
  console.log(isOperatorValid(operation));
}
console.log(isOperatorValid(operation));

let secondNumber = prompt(`Введите второе значение`);

while (isNaN(Number(secondNumber)) || secondNumber === ``) {
  if (!secondNumber) {
    console.log(`Второе значение не указано`);
    secondNumber = prompt(`Нужно ввести значение!`);
  } else {
    console.log(`Некорректный ввод значения`);
    secondNumber = prompt(`Введите числовое значение`);
  }
}
console.log(secondNumber);

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
let result;
switch (operation) {
  case `+`:
    result = firstNumber + secondNumber;
    break;
  case `-`:
    result = firstNumber - secondNumber;
    break;
  case `/`:
    result = firstNumber / secondNumber;
    break;
  case `*`:
    result = firstNumber * secondNumber;
    break;
}

console.log(result);
alert(result);
