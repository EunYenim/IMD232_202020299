let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('255');
  pos = createVector(width / 2, height / 2); // 값이 안들어가도 됨 // 백터기능을 쓸 수 있는 상태로 지정
  vel = createVector(3, 5);
  acc = createVector(0, 0);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background('255');
  update();
  infiniteEdge();
}

function update() {
  pos.add(vel); // 백터지정으로 .add 가 가능해짐
  background('white');
  acc = p5.Vector.random2D();
  acc.mult(2);
  vel.add(acc);
  pos.add(vel);
}

function infiniteEdge() {
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

  //   if(pos.x < 0){

  //   }else(pos.x > 0){
  // vel.x *= -1;
  //   }
  //   ellipse(pos.x, pos.y, 50);
}
