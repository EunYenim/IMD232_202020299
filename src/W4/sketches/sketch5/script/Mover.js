class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisply = createVector(0, 0);
    this.mass = mass;
    this.radius = mass ** 0.5 * 10;
  }

  applyForce(force) {
    let forceDivideByMass = createVector(force.x, force.y);
    forceDivideByMass.div(this.mass);
    // force.div(this.mass);
    this.acc.add(forceDivideByMass); // 위의 acc 에 gravity를 더함
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisply.set(this.acc);
    this.acc.mult(0);
  }

  contactEdge() {
    if (this.pos.y >= height - 1 - this.radius - 1) {
      return true;
    } else {
      return false;
    }
  }

  checkEdges() {
    const bounce = -0.9;

    if (this.pos.x < 0 + this.radius) {
      this.pos.x -= 0 + this.radius;
      this.pos.x *= -1;
      this.pos.x += 0 + this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.radius) {
      this.pos.x -= width - 1 - this.radius;
      this.pos.x *= -1;
      this.pos.x += width - 1 - this.radius;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1 - this.radius) {
      this.pos.y -= height - 1 - this.radius;
      this.pos.y *= -1;
      this.pos.y += height - 1 - this.radius;
      this.vel.y *= bounce;
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
