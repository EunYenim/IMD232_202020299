class MoverNoMass {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
    this.radius = r;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
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
      this.pos.x -= 0; // 0보다 얼마나 뚫고 간 거리 계산(저장)
      //여기서의 0의 포지션은 튕기는 위치의 포지션이다.
      this.pos.x *= -1; // 뚫고 간 만큼 반전
      this.pos.x += 0; //뚫고 간 거리 저장
      // 뚫고 간 거리만큼 방향을 반전시켜
      //오브젝트를 위치시키면, 벽에 부딪혀 튕긴 X값의 좌표구할 수 있음
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
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
  }
}
