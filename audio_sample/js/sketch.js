let song, x, y;

function preload() {
  song = loadSound('assets/impro10.mp3');
}
 
function setup() {
  song.loop();
  createCanvas(800, 400);
  background(255, 255, 0);
  x = 200;
  y = 100;
}
 
function draw() {
  background(0);
  stroke(100, 100, 100);
  fill(255, 255, 255, 255);
  ellipse(x, y, 100, 100);
  fill(100, 255, 255, 255);
  ellipse(x, 200, 200, 200);

  x++;
  y++;

  if (x > 800) {
    x = 0;
  }
  if (y > 600) {
    y = 0;
  }
}