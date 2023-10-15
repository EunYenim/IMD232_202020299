function setup() {
  //캔버스는 왼쪽을 기준으로 움직임
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  line(200, 0, 200, height);
  line(0, 100, width, 100);

  push(); // 어레이랑 상관없음
  translate(width / 2, height / 2); // 캔버스 이동
  rotate((TAU / 360) * 25);
  noStroke();
  fill('salmon');
  rect(0, 0, 50);
  stroke('salmon');
  line(200, 0, 200, height);
  line(0, 100, width, 100);
  pop(); // push와 함께 쓰임
  //push 이후의 것들을 초기화

  //   rotate((TAU / 360) * -25);
  //   translate(-width / 2, -height / 2);

  translate(200, 100);
  rotate((TAU / 360) * -15);
  noStroke();
  fill('slateblue');
  rect(0, 0, 50);
  rect(100, 100, 50);
}

function draw() {}
