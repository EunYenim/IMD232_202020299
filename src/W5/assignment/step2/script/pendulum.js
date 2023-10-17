class Pendulum {
  constructor(x, y, length, angle, rad) {
    this.angle = angle;
    this.angleVel = 0;
    this.angleAcc = 0;
    this.pos = createVector(x, y);
    this.length = length; // 반지름 = 크기 값 // 반지름 = 크기 값
    this.ballPos = createVector(x, y);
    this.ballPos.add(
      cos(this.angle) * this.length,
      sin(this.angle) * this.length
    );
    this.rad = rad;
    this.draggingOffset = createVector();
    this.isHover = false;
    this.isDragging = false;
  }

  applyGravity(gravity) {
    this.angleAcc =
      (sin(this.angle - (TAU / 360) * 90) * -gravity.y) / this.length;
    // (TAU/360) 는 1도에 해당하는 각도(라디안)
    //각을 계산하는 부분은 this,length를 계산
    //*90을 한 것은 90도에 해당하는 라디안을 구하기 위해.
    // this. angle에서 위와 같이 계산된 this. length를 빼면
    // 움직이는 원이 있는 위치가 계산된다.
    // 즉, 90도를 기준으로 어느 쪽에 있는가
    // 중력을 더하면 y축으로 반대로 움직이고 this.length로 나누면 가속도가 구해진다
    //a = sin(angle) + g /rad
  }

  update() {
    if (!this.isDragging) {
      this.angleVel += this.angleAcc;
      this.angle += this.angleVel;
      this.angleVel *= 0.998;
    }
    this.ballPos.set(
      cos(this.angle) * this.length + this.pos.x,
      sin(this.angle) * this.length + this.pos.y
      //cos 와 sin은 -1부터 1까지의 범위 내에서 반환
    );
  }

  setPos(pA) {
    this.pos.set(pA);
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

    ellipse(this.ballPos.x, this.ballPos.y, 2 * this.rad);
    stroke(0);
    noFill();
    line(this.pos.x, this.pos.y, this.ballPos.x, this.ballPos.y);

    // ellipse(this.ballPos2.x, this.ballPos2.y, 2 * this.rad);
    // line(this.pos2.x, this.pos2.y, this.ballPos2.x, this.ballPos2.y);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.ballPos.x - mX) ** 2 + (this.ballPos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.angleAcc = 0;
      this.angleVel = 0;
      this.draggingOffset.set(mX - this.ballPos.x, mY - this.ballPos.y);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      const ballShouldBe = createVector(
        mX - this.draggingOffset.x,
        mY - this.draggingOffset.y
      );
      const angle = atan2(
        //
        ballShouldBe.y - this.pos.y,
        ballShouldBe.x - this.pos.x
      ); //atan2() 함수는 도형을 커서 위치에 맞추는 데에 자주 사용
      this.angle = angle;
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
