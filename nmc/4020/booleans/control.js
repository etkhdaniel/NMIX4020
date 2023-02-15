let sq = document.querySelector('#square');
sq.style.backgroundColor = 'red';
function changeCSS(bg,radius) {
    sq.style.backgroundColor = bg;
    sq.style.borderRadius = radius;
}