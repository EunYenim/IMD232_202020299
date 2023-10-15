const cNum = 8;
const rNum = 8;

let rad = 0;
let angle = 0;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  rad = width / 25;
  console.log('rad', rad);
  console.log('width', width);

  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);
  angleVel = (TAU / 360) * 15;

  angle += (TAU / 360) * 1;
  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      let x = r * (width / (rNum + 1 / 3)) + rad * 2; //시작위치 / 간격
      //rad*2
      let y = c * (width / (cNum + 1 / 3)) + rad * 2;
      let angleStepC = r * (TAU / 360) * 15;
      // let xA = width / cNum + 1;
      // let xB = width / cNum + 1;
      // console.log(xA);

      let angleStepR = rNum * c * (TAU / 360) * 15;
      // ellipse(x, y, rad * 2);
      push();
      translate(x, y);
      rotate(angle + angleStepC + angleStepR);

      if (r % 2 == 0 && c % 2 == 0) {
        fill(306, 100, 74, 60);
        stroke(0);
        strokeWeight(2.5);
        ellipse(0, 0, rad * 2);
        line(0, 0, 20, 20);
      } else if (r % 2 == 0 && c % 2 == 1) {
        fill(47, 100, 69, 60);
        stroke(0);
        strokeWeight(2.5);
        ellipse(0, 0, rad * 2);
        line(0, 0, 20, 20);
      } else {
        if (c % 2 == 1) {
          fill(194, 100, 69, 60);
          stroke(0);
          strokeWeight(2.5);
          ellipse(0, 0, rad * 2);
          line(0, 0, 20, 20);
        } else {
          fill(133, 100, 69, 60);
          stroke(0);
          strokeWeight(2.5);
          ellipse(0, 0, rad * 2);
          line(0, 0, 20, 20);
        }
      }

      fill(255);
      ellipse(20, 20, 10);
      pop();
    }
  }
}
//시작부터 오른쪽으로 15도씩 증가하는 선
//step 1 = 선의 각도가 오른쪽으로 15도씩 차이가 난다.
//시작의 선도 매 프레임마다 1도씩 증가한다.
//stpe 2=매 프레임 마다 선의 각도가 1도씩 증가한다

//좌우 마진과 그래픽 사이의 간격은 동일하게 한다.
// 그래픽과 좌우 마진 및 그래픽 사이의 간격은 2:1의 비율이다.
