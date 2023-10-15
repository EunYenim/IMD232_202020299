let bodies = [];
const bodyNum = 30;
const G = 1;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  init();
  background(255);
}

function draw() {
  background(255);

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }

    bodies[i].update();
    bodies[i].display();
    // if (showVector) {
    //   bodies[i].displayVectors();
    // }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    bodies = [];
    init();
  }
}

function init() {
  for (let i = 0; i < bodyNum; i++) {
    bodies.push(new Body(random(width), random(height)));
  }
}
