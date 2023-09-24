let pos;
let vel;
let acc;
let rad = 50; //원의 반지름

//acc는 vel에 더해지고 vel는 pos에 더해진다

let anIstance;
let anotherInstance;
let instanceArray = []; //array로 만듦

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  reset(); //값을 초기화시키는 함수
  anIstance = new Mover();
  anotherInstance = new Mover();
  for (let i = 0; i < 10; i++) {
    instanceArray.push(new Mover());
  }
}

function draw() {
  background('white');
  update();
  infiniteEdge();
  //다시 화면 안으로 들어오게 하는 함수
  display();
  anIstance.update();
  anIstance.infiniteEdge();
  anIstance.display();

  anotherInstance.update();
  anotherInstance.infiniteEdge();
  anotherInstance.display();

  instanceArray.forEach((eachInstance) => {
    eachInstance.update();
    eachInstance.infiniteEdge();
    eachInstance.display();
  });
}

function reset() {
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = createVector();
}

function display() {
  ellipse(pos.x, pos.y, 2 * rad);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5); // 0.1의 길이감을 가진 acc
  vel.add(acc);
  vel.limit(10); //acc의 값이 누적되는 vel에 제한을 걸어야함
  pos.add(vel);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x > width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y > height) {
    pos.y -= height;
  }
}
