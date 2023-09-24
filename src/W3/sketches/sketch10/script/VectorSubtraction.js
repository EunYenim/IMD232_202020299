let cv; // 센터를 향하는 선
let mv; // 마우스를 향하는 선

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('salmon');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
}

function draw() {
  background('salmon');
  strokeWeight(2);
  stroke('cornflowerblue');
  line(0, 0, cv.x, cv.y); // 화면의 중앙을 향해 뻗어가는 백터

  //벡터는 방향을 가지고 뻗어가는 속도, 힘이다.

  mv.x = mouseX;
  mv.y = mouseY;
  stroke('crimson');
  line(0, 0, mv.x, mv.y); // 마우스를 향해 뻗어가는 벡터

  mv.sub(cv); // cv와 mv를 이어주는 벡터를 시각화한 선
  // 다른 특정 점에서 또 다른 특정 점으로
  //향하는 벡터를 만들 때는 빼기 사용

  // 어떤 지점으로 가기위해 어느방향으로 얼마만큼
  //가야하는지를 계산 할 때 빼기를 사용한다.
  translate(cv.x, cv.y); // 원점을 옮겨주는 함수
  stroke('white');
  line(0, 0, mv.x, mv.y);
}
