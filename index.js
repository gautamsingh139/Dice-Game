let randomNumber1 =Math.floor((Math.random()*6)+1);
let num1=Math.round(randomNumber1);
let randomNumber2 =Math.floor((Math.random()*6)+1);
let num2=Math.round(randomNumber2);


var images1 = "images/dice"+ num1 +".png";
var images2 = "images/dice"+ num2 +".png";
 
document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);

if(num1<num2){
    document.querySelector("h1").innerHTML="Player 2 is win"
}
else if(num1==num2){
    document.querySelector("h1").innerHTML="Refresh Me"

}
else{
    document.querySelector("h1").innerHTML="Player 1 is win"

}
