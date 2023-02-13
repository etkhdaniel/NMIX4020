let answer = document.querySelector('#userInput');
answer = Number(answer); 
let reaction = document.querySelector('#response')

/** if (answer < 24 && answer > 20) {
    reaction.innerHTML = "The answer is too low but close";
} else if (answer < 19) {
    reaction.innerHTML = "The answer is way to low"
} else if (answer > 24 && answer < 28) {
    reaction.innerHTML = "The answer is too high but close"
} else if (answer > 29) {
    reaction.innerHTML = "The answer is way too high";
} else {
    reaction.innerHTML = "The answer is correct"
} */

switch(true) {
    case (answer == 24):
        reaction.innerHTML = "correct";
        break;
    case (answer < 24):
        reaction.innerHTML = "too low";
        break;
    case (answer > 24 && answer < 28):
        reaction.innerHTML = "too high";
        break;
}