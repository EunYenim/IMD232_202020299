/* let x;
let y; */
let position;
let velocity;
/* let velocityX = 3;
let velocityY = 5; */

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  /*   x = width / 2.0; //초기값 설정
  y = height / 2.0; */
  position = createVector(width / 2, height / 2);
  velocity = createVector(3, 5);
}

function draw() {
  background('white');
  /*  x += velocityX; // 매 프레임 마다 x값으로
  y += velocityY; */
  position.add(velocity);
  ellipse(position.x, position.y, 50);

  if (position.x < 0 || position.x > width) {
    velocity.x *= -1;
  }

  if (position.y < 0 || position.y > width) {
    velocity.y *= -1;
  }
}
