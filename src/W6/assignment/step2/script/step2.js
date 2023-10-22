let emitters = [];
let g;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  colorMode(HSL, 360, 100, 100);
  g = createVector(0, 0.1);

  background('#252229');
  // emitters.push(new Emitter(width / 2, height / 2)); // Create an initial emitter
}

function draw() {
  background('#252229');
  console.log('createdEmittersNum :', emitters.length);

  for (let i = emitters.length - 1; i >= 0; i--) {
    emitters[i].createBall();
    emitters[i].applyGravity(g);
    emitters[i].update();
    emitters[i].display();

    if (emitters[i].isDead()) {
      emitters.splice(i, 1);
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    for (let i = 0; i < 100; i++) {
      const emitter = new Emitter(mouseX, mouseY);
      emitters.push(emitter);
    }
  }
}
