const dotNum = 30;
const freq = 1 / 2; //물결이 화면을 동시에 몇번 치는가?
let angleStart = 0;
let angleStartVel;
let amp; // 출렁이는 높이 설정

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  angleStartVel = periodToVel(120); // 몇초마다 칠 것인가?
  //   angleStartVel = 0;
  amp = height / 4;

  background(255);
}

function draw() {
  background(255);

  for (let a = 0; a < dotNum; a++) {
    const ellipseX = (width / (dotNum - 1)) * a;
    const dia = width / (dotNum - 1); //지름
    const angle = angleStart + (TAU / (dotNum - 1)) * a * freq;
    //각도가 계속 바뀌도록 설정하면 움직임
    //angle이 매번 0에서 시작을 해야 움직임(변수로 설정)
    ellipse(ellipseX, height / 2 + sin(angle) * amp, dia);
  }

  angleStart += angleStartVel;
}

function periodToVel(periodAsFrame) {
  return TAU / periodAsFrame;
}
