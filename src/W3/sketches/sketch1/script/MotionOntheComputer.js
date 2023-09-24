let posx;
let posy;
let posxAdd = 3;
let posyAdd = -2;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('255');
  posx = width / 2; //초기값 설정
  posy = height / 2;
}

function draw() {
  posx;
  background('white');
  posx += posxAdd;
  posy += posyAdd;
  ellipse(posx, posy, 50); // 계산먼저 -> 중앙에 없음
  // 도형 먼저 -> 중앙부터 시작
  // posx ++;
}
