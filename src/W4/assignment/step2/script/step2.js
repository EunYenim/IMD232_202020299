let mover;
let gravity;
let mVec;
let pMVec;
let throwingForce;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  console.log('width', width);

  mover = new Mover(width / 2, height / 2, 100);
  gravity = createVector(0, 0.5);
  // mVec = createVector(mouseX, mouseY);
  // PMVec = createVector(pmouseX, pmouseY);
  throwingForce = createVector();
  mVec = createVector();
  pMVec = createVector();

  background(255);
}

function draw() {
  background(255);

  //중력, 마찰력 적용
  let g = p5.Vector.mult(gravity, mover.mass);
  mover.applyForce(g);
  // console.log('g', g);

  // if (mover.contactEdge()) {
  //   let c = move.vel.mag() * 0.1; // 마찰 계수
  //   let friction = mover.vel.copy().mult(-1).nomalize.mult(c);
  //   mover.applyForce(friction);
  //   console.log('friction', friction);
  // }

  mover.update();
  mover.edgeBounce();
  mover.display();
}

// 마우스 드래그
function mouseMoved() {
  if (!isMouseInsideCanvas()) return;
  mover.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  mover.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  if (!isMouseInsideCanvas()) return;
  mover.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  if (!isMouseInsideCanvas()) return;
  mover.mouseReleased();

  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  throwingForce = p5.Vector.sub(mVec, pMVec);
  throwingForce.mult(40);

  mover.applyForce(throwingForce);
  // console.log('Throwing Force:', throwingForce);
  //드래그 방향으로 힘이 가해지도록 수정
}
