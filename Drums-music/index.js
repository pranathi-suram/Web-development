for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(e){
    playSound(e.key);
    buttonAnimation(e.key);
});

function playSound (str){
    switch (str) {
        case "p":
            var audio = new Audio("sounds/tom-1.mp3")
            break;
        case "r":
            var audio = new Audio("sounds/tom-2.mp3")
            break;
        case "a":
            var audio = new Audio("sounds/tom-3.mp3")
            break;
        case "n":
            var audio = new Audio("sounds/tom-4.mp3")
            break;
        case "aa":
            var audio = new Audio("sounds/kick-bass.mp3")
            break;
        case "t":
            var audio = new Audio("sounds/crash.mp3")
            break;
        case "i":
            var audio = new Audio("sounds/snare.mp3")
            break;

        default:
            break;
    }
    audio.play();
}

function buttonAnimation(str) {
    document.querySelector("."+str).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("."+str).classList.remove("pressed");
    }, 100);
}
