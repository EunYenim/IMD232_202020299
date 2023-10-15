class Spring {
  constructor(x, y, length, k) {
    this.pos = createVector(x, y);
    this.restLength = length;
    this.k = k;
  }

  spring(hangingObj) {
    const dist = p5.Vector.dist(hangingObj.pos, this.pos); //거리 계산
    const distDelta = dist - this.restLength; //거리가 얼마나 차이나는가?
    //길면 양수,짧으면 음수로 결과값이 나옴
    const towardBob = p5.Vector.sub(hangingObj.pos, this.pos);
    const force = towardBob.setMag(-1 * this.k * distDelta); //크기 정하기
    //여기서 k의 역할은 스프링의 강도
    //-1의 역할을 당긴 만큼 안으로 축소 되도록만듦
    hangingObj.applyForce(force);
  }

  display(hangingObj) {
    noStroke();
    fill(127);
    ellipse(this.pos.x, this.pos.y, 20);
    noFill();
    stroke('#00FF00');
    line(this.pos.x, this.pos.y, hangingObj.pos.x, hangingObj.pos.y);
  }
}
