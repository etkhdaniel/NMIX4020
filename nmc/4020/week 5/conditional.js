let buildList = document.querySelector('#userInput');

for (var i=0; i < 100; i++) {
    buildList.innerHTML += "<option value="+i+">"+i+"</option>";
}
function compare() {
let answer = document.querySelector('#userInput');
let reaction = document.querySelector('#response');
 answer = answer.value;
 answer = Number(answer);
// if (answer === 24) {
//     reaction.innerHTML = "correct";
// }
// if (answer > 28) {
//     reaction.innerHTML = answer + " is way too high.";
// }
// if (answer < 20) {
//     reaction.innerHTML = answer + " is way too low.";
// }
// if (answer > 24 && answer < 28) {
//     reaction.innerHTML = answer + " is too high but pretty close";
// }
// if (answer < 24 && answer > 20) {
//     reaction.innerHTML = answer + " is too low but pretty close";
// }
switch(true) {
    case (answer === 14):
        reaction.innerHTML = "correct";
        break;
    case (answer > 18):
        reaction.innerHTML = answer + " is way too high.";
        break;
    case (answer < 10):
        reaction.innerHTML = answer + " is way too low.";
        break;
    case (answer > 14 && answer <= 18):
        reaction.innerHTML = answer + " is too high but pretty close";
        break;
    case (answer < 14 && answer >= 10):
        reaction.innerHTML = answer + " is too low but pretty close";
        break;
     }
}