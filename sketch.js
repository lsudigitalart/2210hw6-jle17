var img;
var i = 0;
var pig;
var jumpingPig;

function preload(){
  img = loadImage("img/potbelly.jpg");
  pig = loadImage("img/pigface.png");
  jumpingPig = loadImage("img/jumpingpig.jpg");
}

function setup(){
  createCanvas(640, 580);
  background(255, 106, 93);
  textFont("Arial");
}

function draw(){
  fill(random(0,255), random(0,255), 0);
  textSize(50);

  if(keyIsPressed) {
    text(key, random(width), random(height));
  } else {
    background(255, 255, 255, 10);
    image(pig, random(width), random (height),random(width), random (height) );
  }

  image(img, i, 0, mouseX, mouseY);
  i = i+1;

  image(jumpingPig, random(width), random(height), random(width), random(height));







}
