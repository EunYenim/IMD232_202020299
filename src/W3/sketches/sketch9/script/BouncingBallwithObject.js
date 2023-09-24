let p = {
  add: function (otherVector) {
    this.x += otherVector.x;
    this.y += otherVector.y;
  },
};
let v = { x: 3, y: 5 }; //콜론:과 세미콜론;
//function은 함수를 의미
function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
  p.x = width / 2;
  p.y = height / 2;
}

function draw() {
  background('white');
  /*  p.x += v.x;
  p.y += v.y; */
  p.add(v); // 앞의 add를 함수로 만들어 줘야 작동,
  //두 줄 이상의 계산을 한줄로 줄임
  ellipse(p.x, p.y, 50);

  if (p.x < 0 || p.x > width) {
    v.x *= -1;
  }
  if (p.y < 0 || p.y > width) {
    v.y *= -1;
  }
}
