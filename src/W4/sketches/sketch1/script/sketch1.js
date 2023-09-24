//f =m*a 힘은 질량*가속도이다.
// f =m*a
//f/m = a*m/m
//f/m=a

//같은 힘을 줄 때 질량이 크면 적은 가속도를 받고
//가벼운 물체는 큰 가속도를 받는다.
let mover;

function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background(255);
  mover = new MoverNoMass(width / 2, height / 2, 50);
}
function draw() {
  background(255);

  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
