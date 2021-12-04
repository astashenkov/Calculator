'use strict'

const input = document.querySelector('input');
const numbers = document.querySelectorAll('.number');
const changeSign = document.querySelector('.CS');
const backSpase = document.querySelector('.BS');
const allClean = document.querySelector('.AC');
const coma = document.querySelector('.coma');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const equals = document.querySelector('.equals');

const statusCalc = {
    coma: false,    // Запоминаем использовалась ли запятая при вводе значения
    x: '',          // Значение первого ввод
    y: '',          // Значение второго ввода / Результат вычислений
    math: '',       // Знак арифметического действия
    new: false      // Флаг false говорит о вводе первого значения; флаг true говорит о вводе второго значения
}


console.log('Calculator by Astashenkov Viacheslav');
input.value = 0;

numbers.forEach((item) => {
    item.addEventListener('click', () => {
        if (statusCalc.new === true) {
            input.value = '';
            statusCalc.new = false;
        }
        if (input.value.length < 11) {
            if (input.value === '0') {
                input.value = item.textContent;
            } else {
                input.value += item.textContent;
            }
        }
    });
});

changeSign.addEventListener('click', () => {
    if (input.value[0] === '-') {
        input.value = input.value.substring(1);
    } else {
        input.value = '-' + input.value;
    }
})

backSpase.addEventListener('click', () => {
    if (input.value.length === 1) {
        if (input.value[0] === '.') {
            statusCalc.coma = false;
        }
        input.value = 0;
    } else {
        if (input.value.substring(input.value.length - 1, input.value.length) === '.') {
            statusCalc.coma = false;
        }
        input.value = input.value.substring(0, input.value.length - 1);
    }
});

allClean.addEventListener('click', () => {
    statusCalc.coma = false;
    input.value = 0;
    statusCalc.x = '';
    statusCalc.y = '';
    statusCalc.math = '';
    statusCalc.new = false;
});

coma.addEventListener('click', () => {
    if (statusCalc.coma === false) {
        input.value = input.value + '.';
        statusCalc.coma = true;
    }
});

equals.addEventListener('click', () => {
    statusCalc.coma = false;
    statusCalc.new = true;
    statusCalc.y = input.value;
    switch (statusCalc.math) {
        case '+': 
            statusCalc.y = +statusCalc.x + +statusCalc.y;
            input.value = statusCalc.y.toFixed(1);
            statusCalc.x = '';
            break;
        case '-': 
            statusCalc.y = +statusCalc.x - +statusCalc.y;
            input.value = statusCalc.y.toFixed(1);
            statusCalc.x = '';
        break;
        case '*': 
            statusCalc.y = +statusCalc.x * +statusCalc.y;
            input.value = statusCalc.y.toFixed(1);
            statusCalc.x = '';
            break;
        case '/': 
            statusCalc.y = +statusCalc.x / +statusCalc.y;
            input.value = statusCalc.y.toFixed(1);
            statusCalc.x = '';
            break;
    }
});

plus.addEventListener('click', () => {
    statusCalc.new = true;
    statusCalc.coma = false;
    statusCalc.math = '+';
    if (statusCalc.x) {
        statusCalc.y = input.value;
        statusCalc.x = +(statusCalc.x) + +(statusCalc.y);
        input.value = statusCalc.x.toFixed(1);
    } else {
        statusCalc.x = input.value;
    }
});

minus.addEventListener('click', () => {
    statusCalc.new = true;
    statusCalc.coma = false;
    statusCalc.math = '-';
    if (statusCalc.x) {
        statusCalc.y = input.value;
        statusCalc.x = +(statusCalc.x) - +(statusCalc.y);
        input.value = statusCalc.x.toFixed(1);  
    } else {
        statusCalc.x = input.value;
    }
});

multiply.addEventListener('click', () => {
    statusCalc.new = true;
    statusCalc.coma = false;
    statusCalc.math = '*';
    if (statusCalc.x) {
        statusCalc.y = input.value;
        statusCalc.x = +(statusCalc.x) * +(statusCalc.y);
        input.value = statusCalc.x.toFixed(1);
    } else {
        statusCalc.x = input.value;
    }
});

divide.addEventListener('click', () => {
    statusCalc.new = true;
    statusCalc.coma = false;
    statusCalc.math = '/';
    if (statusCalc.x) {
        statusCalc.y = input.value;
        statusCalc.x = +(statusCalc.x) / +(statusCalc.y);
        input.value = statusCalc.x.toFixed(1);  
    } else {
        statusCalc.x = input.value;
    }
});
