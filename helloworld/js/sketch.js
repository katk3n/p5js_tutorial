let x, y;
 
function setup() {
  createCanvas(800, 400);
  x = 200;
  y = 10;
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