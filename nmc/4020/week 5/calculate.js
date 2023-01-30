let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let additionButton = document.querySelector('#addButton');
let subtractionButton = document.querySelector('#subButton');
let outputField = document.querySelector('#output');

function add() {
    let addition1 = Number(input1.value);
    let addition2 = Number(input2.value);
    let sum = addition1 + addition2;
    outputField.value = sum;
}

additionButton.onclick = function() {
    add();
}

function sub() {
    let subtraction1 = Number(input1.value);
    let subtraction2 = Number(input2.value);
    let difference = subtraction1 + subtraction2;
    outputField.value = difference;
}

subtractionButton.onclick = function () {
    sub();
}
