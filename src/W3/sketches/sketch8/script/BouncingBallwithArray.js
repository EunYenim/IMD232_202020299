/* let x;
let y;
let velocityX = 3;
let velocityY = 5;
 */
let pos;
let vel = [3, 5];

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  /*  x = width / 2.0; //초기값 설정
  y = height / 2.0; */
  pos = [width / 2, height / 2];
}

function draw() {
  background('white');
  /*  x += velocityX; // 매 프레임 마다 x값으로
  y += velocityY; */
  ellipse(pos[0], pos[1], 50);

  pos[0] += vel[0];
  pos[1] += vel[1];

  if (pos[0] < 0 || pos[0] > width) {
    // X좌표
    vel[0] *= -1; // pos에게도 값이 들어가기 때문에, pos의 x,y값이 -가 되고, 진행방향에서 반대로 가게됨
  }

  if (pos[1] < 0 || pos[1] > width) {
    //Y 좌표
    vel[1] *= -1;
  }
}
