let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let additionButton = document.querySelector('#addButton');
let outputField = document.querySelector('#output');

function add() {
    let addition1 = input1.value;
    let addition2 = input2.value;
    let sum = addition1 + addition2;
    outputField.value = sum;
}

additionButton.onclick = function() {
    add();
}