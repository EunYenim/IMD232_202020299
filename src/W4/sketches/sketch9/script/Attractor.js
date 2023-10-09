class Attractor {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.mass = 20;
    this.radius = 30;
    this.dragOffset = createVector(0, 0);
    this.dragging = false;
    this.hover = false;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    // 두 백터 간의 차이를 계산하는 매서드
    let distance = force.mag(); //백터 값 반환
    distance = constrain(distance, 5, 25);
    // constrain은 값을 최솟값과 최댓값 사이의 값으로 한정시키는 것
    // distance의 값을 5~25로 한정시킴
    let strength = (G * this.mass * mover.mass) / distance ** 2;
    //G는 중력 상수
    //거리가 가까울 수록 중력 값이 작아짐
    force.setMag(strength);
    // setMag는 백터의 크기를 설정하는 매서드
    //force의 크기를 strength 로 설정
    return force;
  }

  display() {
    strokeWeight(4);
    stroke(0);
    if (this.dragging) {
      fill(50);
    } else if (this.hover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    circle(this.position.x, this.position.y, this.radius * 2);
  }

  handleHover(mx, my) {
    let d = dist(mx, my, this.position.x, this.position.y);
    //this.x,this.y 는 중심이 되는 원
    if (d < this.radius) {
      this.hover = true;
    } else {
      this.hover = false;
    }
  }

  handlePress(mx, my) {
    // 드래그가 가능하도록 설정
    if (!this.hover) return;
    //this.hover 가 거짓이라면 함수 종료
    this.dragging = true;
    //this.hover가 맞다면 this.dragging을 참으로 설정
    this.dragOffset.x = this.position.x - mx;
    this.dragOffset.y = this.position.y - my;
    // 물체의 이동을 처리
  }

  stopDragging() {
    this.dragging = false;
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      this.position.x = mx + this.dragOffset.x;
      this.position.y = my + this.dragOffset.y;
    }
    //물체의 이동을 처리
    //중심이 되는 원이 따라오는 것처럼 보이게 만듦
  }
}

//input 상태에 따른 '작동구현'은 function에서 다룸
//여기서는 '어떻게 되는가를 다룸'
