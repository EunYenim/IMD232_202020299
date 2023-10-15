class Pendulum {
  constructor(x, y, rad, angle, ballRad) {
    // 초기앵글과 반지름 추가
    this.angle = angle;
    this.angleVel = 0; // 각도에 대한 속도
    this.angleAcc = 0; // 각도에 대한 가속도
    this.pos = createVector(x, y); // 진자의 중심점
    this.rad = rad; // 진자의 길이
    this.ballPos = createVector(x, y);
    this.ballPos.add(cos(this.angle) * this.rad, sin(this.angle) * this.rad);
    this.ballRad = ballRad; // 진자의 반지름
    this.movingOffset = createVector();
    this.isHover = false;
    this.isDragging = false;
  }

  applyForce(force) {
    this.angleAcc = (sin(this.angle - (TAU / 360) * 90) * -force.y) / this.rad;
    //angle은 90도를 기준으로 얼마나 차이나는 지의 값을 넣어야 함
  }

  update() {
    if (!this.isDragging) {
      this.angleVel *= 0.999;
      this.angleVel += this.angleAcc;
      this.angle += this.angleVel;
    }
    this.ballPos.set(
      // 공의 위치를 절대적으로 정하는 게 아니라
      //각도에 의해 지정
      cos(this.angle) * this.rad + this.pos.x,
      sin(this.angle) * this.rad + this.pos.y
    );
  }

  display() {
    noStroke();
    fill(127);
    ellipse(this.pos.x, this.pos.y, 20);
    if (this.isDragging) {
      fill('#ff0000');
    } else if (this.isHover) {
      fill(127);
    } else {
      fill(191);
    }
    ellipse(this.ballPos.x, this.ballPos.y, 2 * this.ballRad);
    stroke(0);
    noFill();
    line(this.pos.x, this.pos.y, this.ballPos.x, this.ballPos.y);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.ballPos.x - mX) ** 2 + (this.ballPos.y - mY) ** 2 <=
      this.ballRad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.movingOffset.set(mX - this.ballPos.x, mY - this.ballPos.y);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      const ballShouldBe = createVector(
        //중심이 되는 공의 위치를 정해줌
        mX - this.movingOffset.x,
        mY - this.movingOffset.y
      );
      const angle = atan2(
        ballShouldBe.y - this.pos.y,
        ballShouldBe.x - this.pos.x
      );
      this.angle = angle;
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}

//a = sin(angle) + g /rad
