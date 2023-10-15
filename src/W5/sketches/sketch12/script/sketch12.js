let x, y;
const rad = 50;
let isHover = false;
let isDragging = false;
let deltaX, deltaY; //원의 중심에서 마우스 벡터까지의 거리를 저장하는 변수

let movableObj;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  x = width / 2;
  y = height / 2;

  movableObj = new MovableObj(width / 4, height / 4, 50);

  colorMode(HSL, 360, 100, 100, 100);
  background(0, 0, 100);
}

function draw() {
  background(0, 0, 100);
  display();
  movableObj.display();
}

function chkHover(mX, mY) {
  const distSq = (x - mX) ** 2 + (y - mY) ** 2; // 마우스까지의 거리
  return distSq <= rad ** 2;
  //중심에서의 원의 테두리까지 ==rad
  //마우스커서가 반지름의 값보다 작은 지 큰지 판별
}

function display() {
  noStroke();
  if (isHover) {
    fill(30, 80, 50);
  } else {
    fill(30, 60, 50);
  }
  ellipse(x, y, 2 * rad);
}

function mouseMoved() {
  isHover = chkHover(mouseX, mouseY);
  movableObj.mouseMoved(mouseX, mouseY);
}
function mousePressed() {
  if (isHover) {
    isDragging = true;
    deltaX = mouseX - x;
    deltaY = mouseY - y;
  }
  movableObj.mousePressed(mouseX, mouseY);
}
function mouseDragged() {
  if (isDragging) {
    x = mouseX - deltaX;
    // +면 차이가 생겨 끌려오는 느낌이고 -면 정확히 따라옴
    y = mouseY - deltaY;
  }
  movableObj.mouseDragged(mouseX, mouseY);
}
function mouseReleased() {
  isDragging = false;
  movableObj.mouseReleased();
}

//초록은 클래스로 만든것
