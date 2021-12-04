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
    coma: false,
    value: '',
    math: '',
    new: false
}


input.value = 0;

numbers.forEach((item) => {
    item.addEventListener('click', () => {
        if (statusCalc.new === true) {
            input.value = '';
            statusCalc.new = false;
        }
        if (input.value.length < 12) {
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
        if (input.value[0] === ',') {
            statusCalc.coma = false;
        }
        input.value = 0;
    } else {
        if (input.value.substring(input.value.length - 1, input.value.length) === ',') {
            statusCalc.coma = false;
        }
        input.value = input.value.substring(0, input.value.length - 1);
    }
});

allClean.addEventListener('click', () => {
    if (input.value.includes(',')) {
        statusCalc.coma = false;
    }
    input.value = 0;
    statusCalc.value = '';
    statusCalc.math = '';
    statusCalc.new = false;
    input.value = '';
});

coma.addEventListener('click', () => {
    if (statusCalc.coma === false) {
        input.value = input.value + ',';
        statusCalc.coma = true;
    }
});

equals.addEventListener('click', () => {
    switch (statusCalc.math) {
        case '+': 
            input.value = +(statusCalc.value) + +(input.value);
            break;
        case '-': 
            input.value = Number(statusCalc.value) - Number(input.value);
            break;
        case '*': 
            input.value = Number(statusCalc.value) * Number(input.value);
            break;
        case '/': 
            input.value = Number(statusCalc.value) / Number(input.value);
            break;
    }
    statusCalc.new = true;
});

plus.addEventListener('click', () => {
    statusCalc.new = true;
    statusCalc.coma = false;
    if (statusCalc.value) {
        input.value = Number(statusCalc.value) + Number(input.value);
        statusCalc.value = input.value;
    } else {
        statusCalc.value = input.value;
        statusCalc.math = '+';
    }
});

minus.addEventListener('click', () => {
    statusCalc.new = true;
    statusCalc.coma = false;
    if (statusCalc.value) {
        input.value = Number(statusCalc.value) - Number(input.value);
        statusCalc.value = input.value;
    } else {
        statusCalc.value = input.value;
        statusCalc.math = '-';
    }
});