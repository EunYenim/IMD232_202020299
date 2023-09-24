let pos;
let vel;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  // random에는 최솟값을 넣을수도 있고 최댓값을 넣을 수도 있다.
  //random(최솟값,최댓값)
  //넣은 값의 '미만'인 숫자가 나온다

  //속도,방향의 방법 3
  vel = p5.Vector.random2D();
  //임의의 각도에서 새로운 2D 단위 벡터 생성, 벡터를 이미 만듦
  vel.mult(5);

  //속도, 방향의 방법 1
  // vel = createVector(random(-5, 5), random(-5, 5));

  //속도,방향의 방법2
  // vel = createVector(1, 0);
  // vel.rotate(random(TAU)); // pI *2 ->360과 같다 /방향
  // vel.mult(5); //속도
  // //속도는 같게하되, 방향을 다르게 하는 식
}

function draw() {
  background('salmon');
  update();
  checkEdges();
  display();

  //vel의 값이 양수만 있을 경우,왼쪽에서 시작해서 오른쪽으로 가게하는 수식,
  //random 때문에 방향과 속도는 랜덤이다.
}

function update() {
  // 함수를 직접 만듦
  pos.add(vel); //속도를 부여하는 식
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
