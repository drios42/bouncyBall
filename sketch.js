var x = 50;
var y = 50;

var xsize;
var speed = 4;

var c;

function setup() {
  createCanvas(640,360);
  c = color(255,255,255);
}

function draw() {
  background(255);
  fill(0);
  noStroke();
  
  text("X coodinate is :" + x,20,20);
  
  stroke(255,0,0);
  fill(c);
  
  xsize=mouseX;
  
  ellipse(x,y,xsize,50);
  
  if(x >= width-25){
    speed = speed * -1;
   
  }
   if(x <= 0){
    speed = speed * -1;
  }
    
  x = x + speed;
}

function mousePressed(){
     c = color(random(255),random(255),random(255));
}

function keyTyped(){
  if (key === 'a' ){
  speed = 100;
  }
    if (key ==='s' ){
  speed = 2;
  }
}



