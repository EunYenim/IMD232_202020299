let noiseXA = 0;
let noiseXB = 0;
let noiseXAVel = 0.005;
let noiseXBVel = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}

function draw() {
  background(255);

  // ellipse(width / 2 + random(100, 200), height / 2, 50);
  // ellipse(width / 2 + random() * 100 + 100, height / 2 + 100, 50);
  ellipse(width / 2 + noise(noiseXA) * 100 + 100, height / 2, 50);
  ellipse(width / 2 + noise(noiseXB) * 100 + 100, height / 2 + 100, 50);
  // 결과값은 항상 0.0과 1.0 사이 <- * 100
  //+ 는 고정 위치값을 위한 것
  noiseXA += noiseXAVel;
  noiseXB += noiseXBVel;
}
