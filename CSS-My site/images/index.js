var randomNumer1 = Math.floor(Math.random()*6)+1;
var randomNumer2 = Math.floor(Math.random()*6)+1;
// console.log(randomNumer);

if (randomNumer1 > randomNumer2) {
    document.querySelector("h1").innerHTML = " Player 1 Wins";
    document.querySelector("div.container").classList.add("container2");

}else if (randomNumer1 < randomNumer2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    document.querySelector("div.container").classList.add("container2");
} else{
    document.querySelector("h1").innerHTML = "Draw";
    document.querySelector("div.container").classList.add("container2");
}

document.querySelector(".img1").setAttribute("src", "images1/dice"+randomNumer1+".png");
document.querySelector(".img2").setAttribute("src", "images1/dice"+randomNumer2+".png");
