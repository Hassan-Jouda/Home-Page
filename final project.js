var i = 0;
var txt = 'This site contains some of the people who have succeeded in their lives !!';
var speed = 20;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


