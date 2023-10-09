let bodyA;
let bodyB;

let G = 1;

let showVector = false;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  bodyA = new Body(width / 2, height / 3);
  bodyB = new Body(width / 2, (2 * height) / 3);
  bodyA.velocity = createVector(1, 0);
  bodyB.velocity = createVector(-1, 0);
}

function draw() {
  background(255);

  let forceForA = bodyB.attract(bodyA);
  bodyA.applyForce(forceForA);
  //b가 a에게 적용하는 중력
  let forceForB = bodyA.attract(bodyB);
  bodyB.applyForce(forceForB);

  bodyA.update();
  bodyB.update();

  bodyA.display();
  bodyB.display();

  if (showVector) {
    bodyA.displayVectors();
    bodyB.displayVectors();
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}
