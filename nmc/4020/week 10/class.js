let classDiv = document.getElementById("class");

$.getJSON('https://raw.githubusercontent.com/emuel/api/master/5110', function(data) {
    data.forEach(element => {
        classDiv.innerHTML += "<div class='student_container'><h1>"+ element.stu_name + " " + element.last_name +"</h1><br><img src='https://www." + element.domain + "/images/me.jpg' width='200px'><br><p>"+ element.fact +"</p></div>";
    });
});