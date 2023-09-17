let x;
let y;
let velocityX = 3;
let velocityY = 5;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  x = width / 2.0; //초기값 설정
  y = height / 2.0;
}

function draw() {
  background('white');
  x += velocityX; // 매 프레임 마다 x값으로
  y += velocityY;
  ellipse(x, y, 50);

  //if (x < 0) {
  // velocityX *= -1;
  //} else if (x > width) {
  // velocityX *= -1;
  //}
  if (x < 0 || x > width) {
    velocityX *= -1;
  }

  //if (y < 0) {
  // velocityY *= -1;
  //} else if (y > height) {
  // velocityY *= -1;
  // }
  if (y < 0 || y > width) {
    velocityY *= -1;
  }
}
