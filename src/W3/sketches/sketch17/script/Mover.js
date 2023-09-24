class Mover {
  //class는 만들어 놓은 변수를 한번 더 활용 가능하다
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector();
    //항상 class가 갖고 있어야 할 변수들 앞에는 this.을 붙임
  }
  update() {
    this.acc = p5.Vector.random2D();
    this.acc.mult(0.5); // 0.1의 길이감을 가진 acc
    this.vel.add(this.acc);
    this.vel.limit(10); //acc의 값이 누적되는 vel에 제한을 걸어야함
    this.pos.add(this.vel);

    //this. 을 붙임으로써 class안의 변수임을 인식
  }

  infiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x += width;
    } else if (this.pos.x > width) {
      this.pos.x -= width;
    }
    if (this.pos.y < 0) {
      this.pos.y += height;
    } else if (pos.y > height) {
      this.pos.y -= height;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * rad);
  }
}
