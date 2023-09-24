let pos;
let vel;
let acc;

//acc는 vel에 더해지고 vel는 pos에 더해진다

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));

  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  // 랜덤한 방향으로 1짜리 길이감을 가진 acc
  acc.mult(0.1);
  console.log('velmag', vel.mag());
  console.log('accmag', acc.mag());
}

function draw() {
  background('salmon');
  update();
  checkEdges();
  display();
  console.log('velmag', vel.mag());
  console.log('accmag', acc.mag());
}

function update() {
  vel.add(acc); //1씩 점점 늘어나는 값(물론 0.1씩 곱해지면서)
  vel.limit(10); //acc의 값이 누적되는 vel에 제한을 걸어야함
  pos.add(vel);

  acc = p5.Vector.random2D();
  // 한번 더 넣어 랜덤한 방향으로 가게함
  acc.mult(1);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  noStroke();
  fill('cornsilk');
  ellipse(pos.x, pos.y, 50);
}
