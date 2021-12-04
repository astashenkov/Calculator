// 

'use strict'

const input = document.querySelector('input');
const numbers = document.querySelectorAll('.number');
const changeSign = document.querySelector('.CS');
const backSpase = document.querySelector('.BS');
const allClean = document.querySelector('.AC');
const coma = document.querySelector('.coma');

const statusCalc = {
    coma: 'false',
}


input.value = 0;

numbers.forEach((item) => {
    item.addEventListener('click', () => {
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
        input.value = 0;
    } else {
        input.value = input.value.substring(0, input.value.length - 1);
    }
});

allClean.addEventListener('click', () => {
    input.value = 0;
});

coma.document.addEventListener('click', () => {
    if (statusCalc.coma === 'false') {
        input.value = input.value + ',';
        statusCalc.coma = true;
    }
});
