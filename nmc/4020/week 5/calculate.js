let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let additionButton = document.querySelector('#addButton');
let subtractionButton = document.querySelector('#subButton');
let divisionButton = document.querySelector('#divButton');
let multiplyButton = document.querySelector('#timesButton');
let outputField = document.querySelector('#output');
let outputField2 = document.querySelector('#output2');

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
    outputField2.value = difference;
}

subtractionButton.onclick = function() {
    sub();
}

function div() {
    let division1 = Number(input1.value);
    let division2 = Number(input2.value);
    let quotient = division1 / division2;
    outputField.value = quotient;
}

divisionButton.onclick = function() {
    div();
}

function times() {
    let multiply1 = Number(input1.value);
    let multiply2 = Number(input2.value);
    let product = multiply1 * multiply2;
    outputField.value = product;
}

timesButton.onclick = function() {
    times();
}