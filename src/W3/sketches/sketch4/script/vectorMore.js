let pos;
let vel;
let radius = 25;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  //임의의 방향으로 1만큼 뻗은 벡터 만들기 1
  // vel = createVector(0, 1);
  // vel.rotate(random(TAU));

  //두번째 방법
  vel = p5.Vector.random2D();
  vel.mult(5);
  //가속도 추가
  acc = createVector(0, 0.01);

  // x = cos(angle) * distance;
  // y = sin(angle) * distance;
  // vel = createVector(x, y);
  // 45도 방향으로 1만큼 이동
}

function draw() {
  background('white');
  vel.add(acc);
  vel.limit(20);
  pos.add(vel);
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }

  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }

  ellipse(pos.x, pos.y, 2 * radius);
}
