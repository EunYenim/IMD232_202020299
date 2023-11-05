class Vehicle {
  // 클래스 정의
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //'Vehicle'객체 생성자
    this.pos = createVector(x, y); // 위치 벡터 생성
    this.vel = p5.Vector.random2D(); // 랜덤한 방향으로 속도 벡터 생성 (길이는 1, 방향은 무작위)
    this.acc = createVector(); //가속도 벡터 생성
    this.mass = mass; // 질량 변수 정의
    this.rad = rad; // 반지름 변수(오브젝트의 크기에 영향) 정의
    this.speedMx = speedMx; // 최대 속도 변수 정의
    this.forceMx = forceMx; // 최대 힘 변수 정의
    this.neighborhooodRad = 50; // 반경 설정
    this.color = color; // 색상을 결정하는 값을 담을 변수 정의
  }

  cohesion(others) {
    // 반경 안의 있는 vehicle의 위치 평균을 내서 특정 지점으로 모이도록 하는 함수
    //외부에서 others 의 값을 받아온다
    let cnt = 0; // cnt 변수 선언
    const steer = createVector(0, 0); // steer 상수를 선언 하고 벡터 생성
    others.forEach((each) => {
      //  배열 others의 각 요소를 하나씩 처리하기 위한 반복문
      if (each !== this) {
        // each가 this(내가) 아닐때 '나'에 대한 건 제외하고 계산
        // 반경을 판별
        const distSq = // 거리에 제곱을 계산하는 상수를 선언
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          // 반경의 제곱보다 disSq가 작으면
          steer.add(each.pos); // 각 배열의 others의 pos 값을 steer에 더함
          cnt++; // 반복문이 끝날 떄 마다 cnt에 1씩 더함
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 클 때
      steer.div(cnt); //steer을 cnt로 나눔
      steer.sub(this.pos); //steer에서 pos를 뺌
      steer.setMag(this.speedMx); // steer의 크기를 speedMx값으로 설정
      steer.sub(this.vel); //steer에서 vel을 뺌
      steer.limit(this.forceMx); // steer의 값을 this.forceMx의 값으로 제한
    }
    return steer; // steer의 값 반환
  }

  align(others) {
    // 반경안의 vehicle의 vel(각도)의 평균을 내어 모이도록 하는 함수
    //외부에서 others 의 값을 받아온다
    let cnt = 0; // cnt 변수 선언
    const steer = createVector(0, 0); // steer 상수를 선언 하고 벡터 생성
    others.forEach((each) => {
      //  배열 others의 각 요소를 하나씩 처리하기 위한 반복문
      if (each !== this) {
        // each가 this(내가) 아닐때 '나'에 대한 건 제외하고 계산
        // 반경을 판별
        const distSq = // 거리에 제곱을 계산하는 상수를 선언
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          // 반경의 제곱보다 disSq가 작으면
          steer.add(each.vel); // steer에 각 배열의 vel을 더함 (각도계산)
          cnt++; // 반복문이 끝날 떄 마다 cnt에 1씩 더함
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 클 때
      //값을 nomalize하는 과정
      steer.div(cnt); //steer을 cnt로 나눔
      steer.setMag(this.speedMx); // steer의 크기를 speedMx값으로 설정
      steer.sub(this.vel); //steer에서 vel을 뺌
      steer.limit(this.forceMx); // steer의 값을 this.forceMx의 값으로 제한
    }
    return steer; // steer의 값 반환
  }

  separate(others) {
    // 멀어짐에 관여하는 함수
    //외부에서 others 의 값을 받아온다
    let cnt = 0; // cnt 변수 선언
    const steer = createVector(0, 0); // steer 상수를 선언 하고 벡터 생성
    others.forEach((each) => {
      //  배열 others의 각 요소를 하나씩 처리하기 위한 반복문
      if (each !== this) {
        // each가 this(내가) 아닐때 '나'에 대한 건 제외하고 계산
        const dist = this.pos.dist(each.pos);
        // 거리 상수 선언 다른 객체의 위치에서 현재 객체의 위치를 빼서 거리를 구함
        if (dist > 0 && this.rad + each.rad > dist) {
          //거리가 나의 반지름과 다른 객체의 반지름을 더한것과 같거나 작으면 (부딪힌 경우)
          const distNormal = dist / (this.rad + each.rad); //distNormal 상수를 선언
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          // towardMeVec 상수 선언 현재의 객체위치에서 각 다른 객체의 위치를 뺌
          //= 나를 향하는 거리 구함
          towardMeVec.setMag(1 / distNormal); // 거리에 따라 힘이 다르게 작용하도록 벡터 설정
          steer.add(towardMeVec); // towardMeVec의 값을 steer에 더함
          cnt++; // 반복문이 끝날 떄 마다 cnt에 1씩 더함
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 클 때
      steer.div(cnt); //steer을 cnt로 나눔
      steer.setMag(this.speedMx); // steer의 크기를 speedMx값으로 설정
      steer.sub(this.vel); // steer에서 vel을 뺌
      steer.limit(this.forceMx); // steer의 값을 this.forceMx의 값으로 제한
    }
    return steer; // steer의 값 반환
  }

  applyForce(force) {
    // 외부에서 힘을 받아오는 함수
    const forceDivedByMass = p5.Vector.div(force, this.mass); // 외부에서 받은 힘을 질량으로 나눈 값을 상수로 정의
    this.acc.add(forceDivedByMass); // 가속도에 더함
  }

  update() {
    // 매번 업데이트 되는 값(위치와 속도에 관여)
    this.vel.add(this.acc); // 가속도를 속도 변수에 더함
    this.vel.limit(this.speedMx); // 속도의 값은 최대 속도값이 넘지 않도록 제한함
    this.pos.add(this.vel); // 위치값에 속도값을 더함
    this.acc.mult(0); // 매 프레임마다 가속도가 초기화 되도록 함
  }

  borderInfinite() {
    // 객체를 캔버스 안에 있도록 설정
    if (this.pos.x < -infiniteOffset) {
      // x값보다 작으면(= 캔버스 왼쪽에 있으면)
      this.pos.x = width + infiniteOffset; // 캔버스 오른쪽에서 나온다
    } else if (this.pos.x > width + infiniteOffset) {
      // 캔버스 보다 왼쪽에서 있으면
      this.pos.x = -infiniteOffset; // 오른쪽에서 나온다.
    }
    if (this.pos.y < -infiniteOffset) {
      // y값보다 작으면 (= 캔버스 밑으로가면)
      this.pos.y = height + infiniteOffset; // 위에서 나온다
    } else if (this.pos.y > height + infiniteOffset) {
      // 캔버스보다 위에 있으면
      this.pos.y = -infiniteOffset; // 아래에서 나온다
    }
  }

  display() {
    // 화면으로 보여지는 객체를 그리는 함수
    push(); // 매 프레임마다 새롭게 적용되는 값의 시작점
    translate(this.pos.x, this.pos.y); // 원점을 변경
    rotate(this.vel.heading()); //vel 방향으로 rotate
    noStroke(); // 윤곽선 없앰
    fill(this.color); // 외부에서 값을 받아와서 색을 칠함
    beginShape(); // 다각형 그리기 (화살표 그리기 )
    vertex(this.rad, 0); // 첫 번째 꼭짓점 생성
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); // 두 번째 꼭짓점 생성
    vertex(0, 0); // 세 번째 꼭짓점 생성
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135))); // 네번째 꼭짓점 생성
    endShape(CLOSE); // 다각형 그리기 종료
    pop(); // 끝맺음
  }
}
