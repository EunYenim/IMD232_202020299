let pos;
let vel;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  vel = createVector(random(-5, 5), random(-5, 5));
}

function draw() {
  background('salmon');
  pos.add(vel);
  noStroke();
  fill('cornsilk');
  ellipse(pos.x, pos.y, 50);

  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}
