const slogan = document.querySelector("#slogan");

slogan.style.opacity = "0";

window.onload = () => {
    setTimeout(DisplaySlogan, 2000)
};

function DisplaySlogan(){
    slogan.style.opacity = "1";
}