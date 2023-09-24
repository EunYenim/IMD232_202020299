let pos;
let vel;
let acc;
let rad = 40;

let cv;
let mv;
let accPoint;
let posPoint;
let cvToMv;
let cvToPo;
let cvToAc;

function setup() {
  setCanvasContainer('p5-canvas', 100, 100, true);
  background('white');
  reset();
}

function draw() {
  background('white');
  update();
  infiniteEdge();
  display();
}

function display() {
  fill('blue');
  stroke(0);
  ellipse(pos.x, pos.y, rad * 2);

  //원의 중심에서 마우스로 향하는 벡터
  strokeWeight(2);
  stroke('lime');
  cv.set(pos.x, pos.y);
  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  translate(cv.x, cv.y);

  line(0, 0, cvToMv.x, cvToMv.y);

  //원을 중심으로 하는 가속도의 시각화
  strokeWeight(2);
  stroke('red');
  accPoint.set(acc.x + pos.x, acc.y + pos.y);
  cvToAc = p5.Vector.sub(accPoint, cv);
  line(0, 0, cvToAc.x * 100, cvToAc.y * 100);
  console.log(mag(cvToAc.x, cvToAc.y));
  // accPoint.set(acc.x, acc.y);
  // line(0, 0, accPoint.x * 100, accPoint.y * 100);

  //원을 중심으로 하는 속도의 시각화 (움직이는 방향)
  strokeWeight(3);
  stroke('yellow');
  posPoint.set(pos.x + vel.x, pos.y + vel.y);
  cvToPo = p5.Vector.sub(posPoint, cv);

  line(0, 0, cvToPo.x * 10, cvToPo.y * 10);
}

function reset() {
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  cv = createVector();
  mv = createVector();
  accPoint = createVector();
  posPoint = createVector();
  cvToPo = createVector();
}

function update() {
  acc = p5.Vector.random2D();
  // console.log(acc.x, acc.y);
  acc.mult(2); //가속도
  vel.limit(5);
  vel.add(acc); //속력
  pos.add(vel); //속도
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x > width) {
    pos.x -= width;
    // 움직이는 방향은 일정해서 다시 화면 안으로 들어옴
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y > height) {
    pos.y -= height;
  }
}
