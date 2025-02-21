const buttons = document.querySelectorAll('.button-number');
const p = document.querySelector('p');
const clearBtn = document.querySelector('.reset');
const addBtn = document.querySelector('.add');
const equalBtn = document.querySelector('.equal')
const operatorButtons = document.querySelectorAll('.digit button:not(.button-number):not(.reset):not(.equal)');
let storeValueOne = '';
let storeValueTwo = '';
let numberOne = 0;
let numberTwo = 0;
let operator = '';
let total = 0;

const add = (numberOne, numberTwo) => numberOne + numberTwo;

const subtract = (numberOne, numberTwo) => numberOne - numberTwo;

const multiply = (numberOne, numberTwo) => numberOne * numberTwo;

const divide = (numberOne, numberTwo) => numberOne / numberTwo;

const operate = (numberOne, numberTwo, operator) => {
  let result = 0;
  
  if (operator == '+') {
    result = add(numberOne, numberTwo);
    return result;
  }

  if (operator == '-') {
    result = subtract(numberOne, numberTwo);
    return result;
  }

  if (operator == '*') {
    result = multiply(numberOne, numberTwo);
    return result;
  }

  if (operator == '/') {
    result = divide(numberOne, numberTwo);
    return result;
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (operator) {
      storeValueTwo += value;
      p.innerText = storeValueTwo;
    } else {
      storeValueOne += value;
      p.innerText = storeValueOne;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!storeValueOne) return;

    numberOne = Number(storeValueOne);
    operator = button.value;
    storeValueOne = '';
    p.innerText = '';
  });
});

equalBtn.addEventListener('click', () => {
  if (!storeValueTwo) return;

  numberTwo = Number(storeValueTwo);
  total = operate(numberOne, numberTwo, operator);

  p.innerText = total;

  storeValueOne = total.toString();
  storeValueTwo = '';
  numberOne = total;
  numberTwo = null;
  operator = '';
});

clearBtn.addEventListener('click', () => {
  storeValueOne = '';
  storeValueTwo = '';
  numberOne = null;
  numberTwo = null;
  operator = '';
  total = 0;
  p.innerText = '';
});