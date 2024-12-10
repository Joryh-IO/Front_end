var a = document.querySelectorAll(".drum");
console.log(a);
for(i=0;i<a.length;i++){
    a[i].addEventListener("click",sound);
}


function sound(){
    var pressed = this.innerHTML;
    makeSound(pressed);
}

var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");

document.addEventListener("keydown",function(e){makeSound(e.key)});

function makeSound(key){
    switch(key){
        case "w":
            kick.play();
            break;
        case "a":
            snare.play();
            break;
        case "s":
            tom1.play();
            break;
        case "d":
            tom2.play();
            break;
        case "j":
            tom3.play();
            break;
        case "k":
            tom4.play();
            break;
        case "l":
            crash.play();
            break;
    }
}