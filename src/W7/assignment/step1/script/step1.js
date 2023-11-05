let traffic; // traffic 변수 설정
let infiniteOffset = 80; // 변수 설정

function setup() {
  setCanvasContainer('canvas', 3, 2, true); // 캔버스 크기 설정
  colorMode(HSL, 360, 100, 100, 100); // 칼러모드를 HSL로 설정
  background(8); // 배경색 설정
  traffic = new Traffic(); // traffic 생성
  for (let n = 0; n < 10; n++) {
    // 반복문으로 traffic 생성을 10번 미만으로 반복
    traffic.addVehicle(random(width), random(height));
    // 반복되는 동안 addvehicle 함수 실행
  }
}

function draw() {
  background(8); // 배경색 설정
  traffic.run(); // traffic의 run 함수 실행
}

function mouseDragged() {
  // 마우스를 드래그 했을 시 실행 함수
  traffic.addVehicle(mouseX, mouseY);
  // traffic의 addVehicle 함수에게 마우스의 좌표값 전달
  //(새로 생성되는 vehicle의 좌표값으로 설정)
}
