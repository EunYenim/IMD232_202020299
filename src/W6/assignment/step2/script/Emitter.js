class Emitter {
  constructor(emittingPosX, emittingPosY) {
    this.emittingPos = createVector(emittingPosX, emittingPosY);
    this.balls = [];
    this.trails = [];
    this.ballNum = 1;
    this.hasCreatedBall = false;
    this.lifespan = 20;
  }

  createBall() {
    if (this.hasCreatedBall) {
      return;
    }
    for (let i = 0; i < this.ballNum; i++) {
      const angle = random(TAU);
      const p = new Ball(
        this.emittingPos.x,
        this.emittingPos.y,
        angle,
        random(19, 20),
        10,
        random(260, 360)
      );
      this.balls.push(p);
      this.Hue = p.Hue;
    }
    this.hasCreatedBall = true;
  }

  applyGravity(gravity) {
    this.balls.forEach((each) => {
      const scaledG = p5.Vector.mult(gravity, each.mass);
      each.applyForce(scaledG);
    });
  }

  update() {
    for (let i = this.balls.length - 1; i >= 0; i--) {
      this.trails.push(createVector(this.balls[i].pos.x, this.balls[i].pos.y));

      this.balls[i].update();
      if (this.balls[i].isDead()) {
        this.balls.splice(i, 1);
      }
    }
    this.lifespan--;

    // 잔상의 수를 제한
    if (this.trails.length > 12) {
      this.trails.shift();
    }

    for (let j = this.trails.length - 1; j >= 0; j--) {
      const trail = this.trails[j];

      if (this.lifespan > 0) {
        // trail.fill();
      }
      if (this.lifespan <= 0) {
        this.trails.splice(j, 1);
      }
    }
  }

  display() {
    this.balls.forEach((each) => {
      each.display();
    });
    colorMode(HSB, 100);
    for (let j = 0; j < this.trails.length; j++) {
      const pos = this.trails[j];
      fill(random(0, 100), random(60, 90), 90, this.lifespan * 2);
      ellipse(pos.x, pos.y, 10);
    }
  }

  isDead() {
    return this.balls.length === 0;
  }
}

//
