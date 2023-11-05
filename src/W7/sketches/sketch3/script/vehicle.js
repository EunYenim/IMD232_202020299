class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.color = color;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    // const headingAngle = atan2(this.vel.y, this.vel.x);
    const headingAngle = this.vel.heading();
    push();
    translate(this.pos.x, this.pos.y);
    rotate(headingAngle);
    fill(0);
    noStroke();
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    noFill();
    stroke(this.color);
    ellipse(0, 0, 2 * this.rad);
    pop();
  }

  seek(target) {
    const steer = p5.Vector.sub(target, this.pos);
    steer.setMag(this.speedMx);
    steer.sub(this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }

  flee(target) {
    // 도망치는 요소의 함수
    const steer = p5.Vector.sub(target, this.pos);
    steer.mult(-1); // 값을 뒤집음
    steer.setMag(this.speedMx);
    steer.sub(this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }

  borderInfinite() {
    // 화면 안에 있도록 설정
    if (this.pos.x < -this.rad) {
      //아래로 넘어가면
      this.pos.x = width + this.rad; // 위에서 나오고
    } else if (this.pos.x > width + this.rad) {
      // 위로 넘어가면
      this.pos.x = -this.rad; // 아래에서 나옴
    }
    if (this.pos.y < -this.rad) {
      this.pos.y = height + this.rad;
    } else if (this.pos.y > height + this.rad) {
      this.pos.y = -this.rad;
    }
  }
}
