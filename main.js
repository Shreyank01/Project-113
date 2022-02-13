function preload() {
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.position(20 , 200);
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
}

function draw() {
  image(video, 115, 100, 400, 300);
  fill(0,255,0);
  stroke(0,225,0)
  rect(50, 40, 500, 20);
  
   fill(0,255,0);
  stroke(0,225,0)
  rect(60, 100, 20, 355);
  
   fill(0,255,0);
  stroke(0,225,0)
  rect(60, 435, 500, 20);
  
   fill(0,255,0);
  stroke(0,225,0)
  rect(550, 40, 20, 415);
  
  fill(255,0,0);
  stroke(255,0,0)
  circle(70,65,70)
  
  
  fill(255,0,0);
  stroke(255,0,0)
  circle(560,65,70)
  
  fill(255,0,0);
  stroke(255,0,0)
  circle(560,440,70)
  
   fill(255,0,0);
  stroke(255,0,0)
  circle(70,440,70)
  
}

function take_snapshot() {
    save("image.jpg");
}
