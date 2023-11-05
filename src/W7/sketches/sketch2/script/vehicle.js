class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx; // 최고 속도
    this.forceMx = forceMx; // 적용될 수 있는 최대 힘
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass); // 힘을 질량으로 나눈다
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx); // 최대 속도제한을 여기엗 걸어줌
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    // const headingAngle = atan2(this.vel.y, this.vel.x);
    const headingAngle = this.vel.heading(); // 마우스를 향하는 각도를 계산 해 주는 함수
    push();
    translate(this.pos.x, this.pos.y);
    rotate(headingAngle); // 화살표가 마우스를 향하도록 설정
    fill(0);
    noStroke();
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    noFill();
    stroke('red');
    ellipse(0, 0, 2 * this.rad);
    pop();
  }

  seek(target) {
    const desiredVelocity = p5.Vector.sub(target, this.pos);
    desiredVelocity.setMag(this.speedMx); // 일정 속도를 최대속도로 제한
    const steer = p5.Vector.sub(desiredVelocity, this.vel); // 마우스를 향하는 각도를 자연스럽게 바꿔줌 꺾이는 힘이 가속도로 더해져야 향하려는 방향으로 전해짐
    steer.limit(this.forceMx); // 힘의 백터의 값이 일정값 이상이 되지 않도록 함
    this.applyForce(steer);
  }
}
