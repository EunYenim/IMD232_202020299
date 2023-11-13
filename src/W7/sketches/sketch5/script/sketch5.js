let dataPoint = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  frameRate(5);

  for (let i = 0; i < 50; i++) {
    dataPoint.push(0.5);
  }

  background(255);
}

function draw() {
  dataPoint[dataPoint.length - 1] = map(mouseY, 0, height, 1, 0);
  //배열의 마지막 요소를 맵핑한다. 마우스에 따라 바뀌는 Y좌표 생성
  background(255);
  noStroke();
  fill(0);
  for (let i = 0; i < dataPoint.length; i++) {
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    //dataPoint[i]의 값을 0-1 사이의 값으로 변환 후
    //height에서 0 사이의 범위로 매핑하려고 합니다.
    ellipse(x, y, 10);
  }
  for (let i = 0; i < dataPoint.length - 1; i++) {
    dataPoint[i] = dataPoint[i + 1];
    //배열의 모든 요소를 한 칸씩 앞으로 이동
    // 마지막 요소는 이전 요소로 대체
  }
}
