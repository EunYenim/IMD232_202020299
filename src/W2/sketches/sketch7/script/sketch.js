function setup() {
  setCanvasContainer('canvas-goes-here', 3, 2, true); //위치, 너비 true가 위치,너비(비율값)으로 flexable하게 만들어줌
  background('#ff7733');
}

function draw() {
  background('#ff7733');
  circle(mouseX, mouseY, width * 0.1); // 마우스포인터를 화면 너비에 따라 작아지게 만듦
}
