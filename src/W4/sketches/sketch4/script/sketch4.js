let moverA;
let moverB;
let gravity;
let wind;
function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 3, height / 2, 10);
  //중력은 물체가 가진 질량에 비례해 적용되어야 하는데
  //여기서는 그게 반영이 안됨 -> 다음 단계에 적용
  moverB = new Mover((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}
function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);

  if (mouseIsPressed && isMouseInsideCanvas()) {
    // 화면 안에서 누를 때만 작동
    moverA.applyForce(wind);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  let gravityB = createVector(gravity.x, gravity.y);
  gravityB.mult(moverB.mass);
  moverB.applyForce(gravityB);

  if (mouseIsPressed && isMouseInsideCanvas()) {
    // 화면 안에서 누를 때만 작동
    moverB.applyForce(wind);
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVectors();
}
