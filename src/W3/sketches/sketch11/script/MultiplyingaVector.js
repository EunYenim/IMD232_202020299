let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}

function draw() {
  background('slateblue');
  stroke('white');
  strokeWeight(2);
  line(0, 0, cv.x, cv.y);

  mv.set(mouseX, mouseY); // x,y 좌표에 값을 넣는 함수
  stroke('fuchsia');
  line(0, 0, mv.x, mv.y);

  cvToMv = p5.Vector.sub(mv, cv); // mv.sub(cv)와 같음
  stroke('lime');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);

  cvToMv.mult(0.5); // 벡터의 길이를 절반으로 줄이는 함수.
  stroke('black');
  strokeWeight(4);
  line(0, 0, cvToMv.x, cvToMv.y);
}
