let emitter;
let particles = [];
let g;
let angle;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100);

  g = createVector(0, 0.1);

  background('#332F39');
  rectMode(CENTER);
}

function draw() {
  background('#332F39');
  particles.push(
    new particle(
      random(width),
      -height / 12,
      (TAU / 360) * random(360),
      //회전을 얼마나 할 것인가
      0,
      //얼마나 튕길 것인가
      1,
      random(360),
      100,
      80,
      random(0.01, 0.18)
    )
  );

  for (let i = particles.length - 1; i >= 0; i--) {
    const scaledG = p5.Vector.mult(g, particles[i].mass);
    particles[i].applyForce(scaledG);
    particles[i].update();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
    particles[i].display();
  }
  console.log(particles.length);
}
