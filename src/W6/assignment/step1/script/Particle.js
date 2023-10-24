class particle {
  constructor(posX, posY, velAngle, velMag, mass, h, s, v, angleSpeed) {
    this.pos = createVector(posX, posY);
    this.vel = createVector(1, 0);

    this.vel.mult(velMag);
    this.acc = createVector();
    this.mass = mass;
    this.rad = 2.5;
    this.color = color(h, s, v);
    this.angle = velAngle;
    this.angleSpeed = angleSpeed;
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    // const calcedAcc = force.div(this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.mult(0.95);
    // this.vel.add(this.roatate);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle += this.angleSpeed;
    //
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rectMode(RADIUS);
    rotate(this.angle); // 회전 적용
    fill(this.color);
    noStroke();
    rect(0, 0, 2 * this.rad);
    pop();
  }

  isDead() {
    return (
      this.pos.x < -this.rad ||
      this.pos.x > width + this.rad ||
      //   this.pos.y < -this.rad ||
      this.pos.y > height + this.rad
    );
  }
}
