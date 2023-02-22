let candidateNames1 = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore"];
let candidateNames2 = ["Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul"];
let candidateNames3 = ["Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"];
let candidatePix1 = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg"];
let candidatePix2 = ["graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg"];
let candidatePix3 = ["perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"];

let output1 = document.querySelector('#out1');
let output2 = document.querySelector('#out2');
let output3 = document.querySelector('#out3');
let add1 = document.querySelector('#add1');
let sub1 = document.querySelector('#sub1');
let add2 = document.querySelector('#add2');
let sub2 = document.querySelector('#sub2');
let add3 = document.querySelector('#add3');
let sub3 = document.querySelector('#sub3');

let i = 0;
function canShow(plusMinus, arr1, arr2, output) {
    output.innerHTML = "<li>" + arr1[i] + "<br><img src=pix/" + arr2[i] + "> </li>";
    i += plusMinus;
    if (i == arr1.length) {
        i = 0;
    } else if (i < 0) {
        i = arr1.length - 1;
    } //if
} //canShow
add1.onclick = function() {
    canShow(1, candidateNames1, candidatePix1, output1);
} //onClick
sub1.onclick = function() {
    canShow(-1, candidateNames1, candidatePix1, output1);
} //onClick
add2.onclick = function() {
    canShow(1, candidateNames2, candidatePix2, output2);
    } //onClick
sub2.onclick = function() {
    canShow(-1, candidateNames2, candidatePix2, output2);
} //onClick
add3.onclick = function() {
    canShow(1, candidateNames3, candidatePix3, output3);
} //onClick
sub3.onclick = function() {
    canShow(-1, candidateNames3, candidatePix3, output3);
} //onClick