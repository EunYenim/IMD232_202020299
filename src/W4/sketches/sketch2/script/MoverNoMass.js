class MoverNoMass {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisply = createVector(0, 0);
    this.radius = r;
  }

  addAcc(accInput) {
    this.acc.add(accInput); // 위의 acc 에 gravity를 더함
    // sketch.js 에서 addAcc에 Gravity를 넣었고, 그게 여기서 acc에 들어감
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisply.set(this.acc);
    this.acc.mult(0); // acc 초기화
  }

  checkEdges() {
    //700의 너비를 가지는 캔버스에서 원이 가질 수 있는
    //가장 큰 X좌표의 값은 699이다.
    //0에서 시작하기 때문
    if (this.pos.x < 0) {
      // //0보다 얼마나 뚫고 갔는가? - 첫번째 방법
      // let delta = this.pos.x - 0;
      // //그 뚫고간 거리에 -1을 곱해 방향을 뒤집고,
      // delta *= -1;
      // //0을 기준으로 뒤집힌 거리를 더해준다.
      // this.pos.x = 0 + delta;

      //두번 째 방법
      this.pos.x -= 0;
      this.pos.x *= -1;
      this.pos.x += 0;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1) {
      this.pos.x -= width - 1;
      this.pos.x *= -1;
      this.pos.x += width - 1;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1) {
      this.pos.y -= height - 1;
      this.pos.y *= -1;
      this.pos.y += height - 1;
      this.vel.y *= -1;
    }
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  displayVectors() {
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );

    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accDisply.x * 100,
      this.pos.y + this.accDisply.y * 100
    );
  }
}
