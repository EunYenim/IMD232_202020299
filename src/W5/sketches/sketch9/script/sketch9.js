let angle = 0;
let angleVel;
let amplitude = 50;
let period = 180;
//몇프레임안에 주기가 반복될 것인가

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  angleVel = periodToAngleVel(period);
  // angleVel = (TAU / 360) * 1;
  // console.log('TAU', angleVel);
  //1초는 60프레임 1초마다 1도 움직여서 한바퀴 도는데 6초 걸림

  background(255);
}

function draw() {
  angle += angleVel;

  background(255);

  line(0, height / 2, width, height / 2);
  ellipse(width / 2, height / 2 + sin(angle) * amplitude, 50);

  //   console.log(sin(angle));
}

function periodToAngleVel(periodAsFrame) {
  return TAU / periodAsFrame;
}
