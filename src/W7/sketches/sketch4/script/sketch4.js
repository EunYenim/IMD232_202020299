function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}

function draw() {
  background(255);

  // randomSeed(5000);// 고정시킴
  ellipse(width / 2 + random(100, 200), height / 2, 50);
  //random 은 아무것도 안 넣으면 0-1 사이의 값이 나옴
  ellipse(width / 2 + random() * 100 + 100, height / 2 + 100, 50);
}
