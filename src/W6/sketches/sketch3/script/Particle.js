class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-150, -30));
    //각도계산(150도와 30도는 대칭을 이루며 -로 밖으로 나가는 벡터를 만듦)
    this.acc = createVector(0, 0);
    this.rad = 8;
    this.lifeSpan = 255;
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 2;
  }

  display() {
    stroke(0, this.lifeSpan);
    fill(127, this.lifeSpan);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0;
    // 0보다 작아지면 참의 값 반환
  }
}
