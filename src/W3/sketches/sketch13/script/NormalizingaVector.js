let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('pink');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}

function draw() {
  background('pink');

  mv.set(mouseX, mouseY);

  cvToMv = p5.Vector.sub(mv, cv);
  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);

  cvToMv.normalize(); // 1의 값으로 고정
  cvToMv.mult(50); //mult는 곱하기
  strokeWeight(4);
  stroke('black');
  line(0, 0, cvToMv.x, cvToMv.y);
}
//nomalizing은 0 - 1 사이의 값을 바꾼다
