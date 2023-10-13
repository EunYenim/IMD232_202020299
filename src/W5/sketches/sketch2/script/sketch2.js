const stripeNum = 20;
const stripeNum2 = 15;
const stripeBegin = 15;
const stripeGap = 30;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  /* for (let i = 0; i < width; i += 10) {
    //초기값;조건;매번하는 일
    line(i + 10, 10, i + 10, height - 10);
  } */
  /* for (let i = 0; i < stripeNum; i++) {
    const rectWidth = width / (stripeNum + stripeNum + 1);
    const rectX = (width / (stripeNum + stripeNum + 1)) * (2 * i + 1);
    rect(rectX, 0, rectWidth, height);
  } */
  // 일정한 갯수를 그릴 때 -> 사이즈에 따라 크기 바뀜=> width에서 나눔
  //gap 이 있으므로 stripeNum 두번 더함
  //x 값이 rectwidth의 제곱근?
  // rectWidth 상수를 선언하고, 화면 너비를 stripeNum + stripeNum + 1로 나눈 값으로 초기화
  //이 값은 각 직사각형의 너비를 나타냄

  /* for (let i = stripeBegin; i < width; i += 2 * stripeGap)
  rect(i, 0, stripeGap, height); */
  //일정한 사이즈에 맞게 그릴 때 -> 사이즈에 따라 갯수 바뀜
}
function draw() {
  background(255);
  noStroke();
  fill('salmon');

  for (let i = 0; i < stripeNum; i++) {
    for (let j = 0; j < stripeNum2; j++) {
      fill((255 / stripeNum2) * i, (255 / stripeNum2) * j, 255);
      let x = ((i + 1) * width) / (stripeNum + 1);
      //화면 너비에서 나누면 원하는 갯수를 넣을 수 있음
      // 그 갯수는 stripeNum에 +1 해줘야 원하는 갯수가 나옴
      let y = ((j + 1) * height) / (stripeNum2 + 1);
      if (i % 2 == 0) {
        ellipse(x, y, 10);
      } else {
        rect(x, y, 10);
      }
    }
  }
}

//안쪽 반복문 모두 반복 후 바깥쪽 다시 반복
// i = 1 , j = 1,2,3
//i = 2, j =1,2,3
