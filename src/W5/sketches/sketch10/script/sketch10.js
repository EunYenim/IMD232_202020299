let angle;
let angleVel;
let amplitude = [100, 100];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  angle = createVector(0, TAU / 4);
  //4분의 파이는 8분의 타우와 같다.
  angleVel = createVector(periodToAngleVel(120), periodToAngleVel(120));
  //x로 2초마다 y로 2초마다 움직임

  background(255);
}

function draw() {
  angle.add(angleVel);

  background(255);

  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);
  ellipse(
    width / 2 + sin(angle.x) * amplitude[0],
    height / 2 + sin(angle.y) * amplitude[1],
    5
  );
  //리사주 도형

  //   console.log(sin(angle));
}

function periodToAngleVel(periodAsFrame) {
  return TAU / periodAsFrame;
}
