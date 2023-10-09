let movers = [];
let liquid;
let showVector = false;

function setup() {
  setCanvasContainer('p5-canvas', 2, 1, true);
  reset();
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(255);

  liquid.display();
  for (let i = 0; i < movers.length; i++) {
    if (liquid.contains(movers[i])) {
      let dragForce = liquid.calculateDrag(movers[i]);
      movers[i].applyForce(dragForce);
    }
    // 각 공마다 다르게 적용되는 중력 계산 (액체안에 있을때)

    let gravity = createVector(0, 0.1 * movers[i].mass);
    movers[i].applyForce(gravity);

    movers[i].update();
    movers[i].bounceEdges();
    movers[i].display();
    if (showVector) {
      movers[i].displayVectors();
    }
    // 액체 밖 각 공의 중력 계산
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  for (let i = 0; i < 9; i++) {
    movers[i] = new Mover((width / 10) * (i + 1), 0, random(0.5, 3));
  }
  // 랜덤하게 달라지는 공의 크기
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}
