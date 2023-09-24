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

  mv.set(mouseX, mouseY);

  cvToMv = p5.Vector.sub(mv, cv);
  let mag = cvToMv.mag();
  // 매그는 벡터가 가지고 있는 길이를 수치로 표현해줌
  fill('white');
  rect(10, 10, mag, 10); // 수치화 된 막대 생성
  //이곳의 원점은 0,0

  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y); // 원점이 중앙으로 감
  line(0, 0, cvToMv.x, cvToMv.y);

  //매그는 양수로만 나옴
}
