// BALLOONS
var balloons = document.querySelectorAll(".balloon");
const scoreHtml = document.querySelector("#score");
var audio = new Audio('./img/pop-sound.wav');

var height = 90;
var width = 90;

var score = 0;

function pop(e)
{
    audio.play();
    score+=100;
    scoreHtml.innerHTML = score;

    e.target.style.animation = "none";
    e.target.offsetHeight;
    e.target.style.animation = null;

    spawn(e.target);
}

function spawn(balloon)
{
    balloon.style.visibility = 'visible';
    balloon.style.height = height + "px";
    balloon.style.width = width + "px";

    balloon.style.bottom = - 30 + "%";
    balloon.style.right = (Math.random() * 90) + "%";
}

for (let balloon of balloons){
    balloon.addEventListener("click", pop)
    spawn(balloon);
}