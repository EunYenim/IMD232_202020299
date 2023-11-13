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
    //heading() 회전 각도를 계산(2D 벡터만 해당)
    push();
    translate(this.pos.x, this.pos.y); //캔버스 원점 변경
    rotate(headingAngle); // 화살표가 마우스를 향하도록 설정
    fill(0);
    noStroke();
    beginShape();
    //vetex 다각형의 꼭짓점 좌표를 지정할 때 쓰임
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    //radians degree의 다른 각도 단위 값
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    noFill();
    stroke('red');
    ellipse(0, 0, 2 * this.rad);
    pop();
  }

  seek(target) {
    // 타겟(마우스)를 향하도록 하는 함수
    const desiredVelocity = p5.Vector.sub(target, this.pos); // 마우스까지의 거리
    // 가야하는 거리를 구함(속도)
    desiredVelocity.setMag(this.speedMx); // 일정 속도를 최대속도로 제한
    //setMag 벡터의 크기 제한
    const steer = p5.Vector.sub(desiredVelocity, this.vel);
    // 마우스를 향하는 각도를 자연스럽게 바꿔줌, 속도의 계산을 방향을 구하는 것.
    //꺾이는 힘이 가속도로 더해져야 향하려는 방향으로 전해짐
    steer.limit(this.forceMx); // 힘의 백터의 값이 일정값 이상이 되지 않도록 함
    this.applyForce(steer);
  }
}
