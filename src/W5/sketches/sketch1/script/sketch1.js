let aVariable = 20;
let anArray = [30, 60, 90];
let anotherArray = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  console.log(aVariable);
  console.log(anArray.length);
  // 몇개의 값이 저장되어있는지 알려줌
  anotherArray.push('어레이에 넣은 첫 데이터');
  //push로 데이터를 넣어 줄 수 있다.
  // 여러번 넣으면 순서대로 저장됨

  background(255);
}

function draw() {}
