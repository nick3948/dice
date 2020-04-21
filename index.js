var random1=Math.floor(Math.random()*6+1);

var randomcode1="images/dice"+random1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomcode1);




var random2=Math.floor(Math.random()*6+1);

var randomcode2="images/dice"+random2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomcode2);

document.querySelector("h1").InnerHTML="hi";


if(random1>random2){
  document.querySelector("h1").innerHTML="✨player2 fasak..🎉";
}
else if (random2>random1) {
  document.querySelector("h1").innerHTML="✨player1 fasak..🎉";
}
else{
  document.querySelector("h1").innerHTML="ayyayyooooo..";
}
