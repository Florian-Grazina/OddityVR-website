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


// ON SCROLL

// Add class show on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});


// Add observe to all hidden elem
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// Add delay to softskills
let count = 0;

document.querySelectorAll('.softskill').forEach(el => {
    el.classList.add('delay' + count % 5);
    count++;
})

// Add delay to team
count = 0;

document.querySelectorAll('.card-container').forEach(el => {
    el.classList.add('delay' + count % 3);
    count++;
})

// Add delay to softskills
count = 0;

document.querySelectorAll('.article-container').forEach(el => {
    el.classList.add('delay' + count % 4);
    count++;
})