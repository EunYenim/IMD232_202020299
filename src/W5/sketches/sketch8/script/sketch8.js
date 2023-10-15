let nGon = 8; // 꼭짓점의 갯수
let rad = 250; // 다각형의 크기는 rad값으로 정한다.
let x;
let y;
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
}

function draw() {
  x = width / 2;
  y = height / 2;

  background(255);

  noFill();
  stroke(0);
  strokeWeight(1);
  ellipse(x, y, 2 * rad);
  noStroke();
  fill(0);
  for (let a = 0; a < nGon; a++) {
    const angle = (TAU / nGon) * a - (TAU / 360) * 90;
    //시작점 조정가능
    //360도는 TWoPI ==TAU
    const pointX = cos(angle) * rad + x; //x값 구하기
    const pointY = sin(angle) * rad + y; //y값 구하기
    ellipse(pointX, pointY, 10);
  }
  stroke('red');
  noFill();
  beginShape();
  for (let a = 0; a < nGon; a++) {
    const angle = (TAU / nGon) * a - (TAU / 360) * 90;
    const pointX = cos(angle) * rad + x;
    //X값을 더한 이유는 원의 중심을 원점으로 하기위해
    //어느 좌표 x,y에서 임의의 방향(각도) a로, 특정 거리 r만큼 떨어진 좌표(m,n)를 찍으려면
    //m = cos(a) * r + x
    //n = sin(a) * r +y
    const pointY = sin(angle) * rad + y;
    vertex(pointX, pointY);
  }
  endShape(CLOSE);
}
