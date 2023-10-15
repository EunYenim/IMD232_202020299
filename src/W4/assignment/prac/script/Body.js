class Body {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = random(16, 100);
    this.rad = sqrt(this.mass) * 5; // 4, 10 =20,50
  }

  attract(body) {
    const force = p5.Vector.sub(this.pos, body.pos);
    let distance = constrain(force.mag(), 16, 100); //거리
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass); // 따로 공식
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display() {
    noStroke();
    fill(0, 127);
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }
}
