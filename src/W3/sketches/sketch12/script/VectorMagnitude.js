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
  fill('white');
  rect(10, 10, mag, 10);

  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y); //매그는 양수로만 나옴
}
