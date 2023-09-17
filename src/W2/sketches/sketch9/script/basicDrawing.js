function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  // 루프로 인해 아래서 적용한 설정이 타고 넘어오는 것을 방지하기 위해
  //초기화
  fill(255);
  colorMode(RGB);
  stroke(0); // 스트로크 값 활성화
  strokeWeight(1);

  rectMode(CORNER); // 앞의 두 매개변수를 기준으로 왼쪽위를 중심으로 잡음
  ellipse(100, 100, 50, 50); // 원은 원 중심을 기준으로 그림
  rect(100, 100, 50, 50); //사각형은 왼쪽위를 중심으로 그림
  ellipse(200, 100, 50, 25);
  rect(200, 100, 25, 50);

  rectMode(CENTER); // 앞의 두 매개변수의 중심이 다음 매개 변수의 중심이 됨
  rect(300, 100, 50, 50);
  ellipse(300, 100, 50, 50);
  rect(400, 100, 50, 25);
  ellipse(400, 100, 25, 50);

  fill(255, 127, 0);
  ellipse(100, 200, 50);
  fill('#00EE40');
  circle(200, 200, 50);
  colorMode(HSL);
  fill(200, 100, 50);
  rect(300, 200, 50);
  noStroke(); // 스트로크 값 비활성화
  square(400, 200, 50);

  rect(100, 300, 50, 50, 10); // 10은 corner radius 값
  rect(200, 300, 50, 50, 5, 10, 15, 20);

  stroke(0); // 0은 색상값
  line(100, 400, 150, 450);

  stroke('blue');
  line(200, 400, 250, 400);
  stroke('salmon');
  strokeWeight(5);
  line(250, 400, 250, 450);
  stroke('slateBlue');
  strokeWeight(10);
  line(200, 450, 250, 450);

  stroke(50, 100, 10);
  strokeWeight(2);
  point(300, 400);
  point(310, 400);
  point(320, 400);
  point(330, 400);
  point(340, 400);
  point(350, 400);
  stroke(50, 100, 20);
  strokeWeight(3);
  point(300, 410);
  point(310, 410);
  point(320, 410);
  point(330, 410);
  point(340, 410);
  point(350, 410);
  stroke(50, 100, 30);
  strokeWeight(4);
  point(300, 420);
  point(310, 420);
  point(320, 420);
  point(330, 420);
  point(340, 420);
  point(350, 420);
  stroke(50, 100, 40);
  strokeWeight(5);
  point(300, 430);
  point(310, 430);
  point(320, 430);
  point(330, 430);
  point(340, 430);
  point(350, 430);
  stroke(50, 100, 50);
  strokeWeight(6);
  point(300, 440);
  point(310, 440);
  point(320, 440);
  point(330, 440);
  point(340, 440);
  point(350, 440);
  stroke(50, 100, 60);
  strokeWeight(7);
  point(300, 450);
  point(310, 450);
  point(320, 450);
  point(330, 450);
  point(340, 450);
  point(350, 450);
}

//X, Y, W, H -> X좌표값 Y좌표값, 너비, 높이
