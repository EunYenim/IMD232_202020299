// let x;
// let y;
let pos;
let vel;
// let xadd = 5;
// let yadd = 3;
let radius = 25;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector(5, 3);

  // x = width / 2;
  // y = width / 2;
}
function draw() {
  background('white');

  //위치 업데이트
  // x += xadd;
  // y += yadd;
  pos.add(vel);

  //** 화면 밖으로 나가면 다시 들이기
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  //**원의 중심이 캔버스의 너비에서 벗어난 만큼
  //**다시 생성될 때 캔버스의 모서리에서 시작한다.
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }

  ellipse(pos.x, pos.y, 2 * radius);
}
