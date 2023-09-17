function setup() {
  let canvas;
  canvas = createCanvas(400, 300);
  let canvasParent;
  canvasParent = select('#canvas-goes-here'); // #은 id를 가리킴
  canvas.parent(canvasParent); // canvas-goes-here에 canvas가 들어감
  background(255);
} // 한번만 실행

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, 50);
} //여러번 실행
