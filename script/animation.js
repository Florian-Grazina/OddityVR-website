// BALLOONS
var balloons = document.querySelectorAll(".balloon");
const scoreHtml = document.querySelector("#score");

var height = 100;
var width = 100;

var posX = 0;
var posY = 0;

var score = 0;


function pop(e)
{
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

    posX = 0;
    posY = 0;   

    balloon.style.bottom = posY - 30 + "%";
    balloon.style.right = (Math.random() * 90) + "%";
}

for (let balloon of balloons){
    balloon.addEventListener("click", pop)
    spawn(balloon);
}


// TRAIN

// var train = document.querySelector("#train");
// train.addEventListener("click", startStop);

// var isRunning = true;

// function startStop()
// {
//     if (isRunning)
//     {
//         train.style.animationPlayState = "pause";
//     }
// }