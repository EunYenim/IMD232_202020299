class Traffic {
  // 클래스 정의
  constructor() {
    // 객체 생성자
    this.vehicles = []; // vehicle을 어레이로 정의
  }

  run() {
    // vehicle에 대한 시뮬레이션 함수
    this.vehicles.forEach((eachVehicle) => {
      // 배열에 추가된 모든 vehicle에게 함수가 적용되도록 함
      const separate = eachVehicle.separate(this.vehicles);
      //vehicle 상수 선언 this.vehicles의 값을 each.vehicle의 separate 함수에 전달
      // 부딪히면 서로 밀어내는 함수 실행
      separate.mult(1); // separate에 1 곱하기
      eachVehicle.applyForce(separate); // separate의 값을 applyForce에 전달
      const align = eachVehicle.align(this.vehicles);
      // 상수 align 선언
      //this.vehicles의 값을 each.vehicle의 align 함수에 전달
      align.mult(0.5); // align 값에 0.5 값 곱하기
      eachVehicle.applyForce(align); // applyForce함수에 align의 값 전달 및 실행
      const cohesion = eachVehicle.cohesion(this.vehicles); // cohesion 상수 선언 및
      cohesion.mult(0.5); // cohesion 값에 0.5곱하기
      eachVehicle.applyForce(cohesion); // applyForce함수에 cohesion의 값 전달 및 실행
      eachVehicle.update(); // update 함수 실행
      eachVehicle.borderInfinite(); // borderInfinite 함수 실행
      eachVehicle.display(); // display 함수 실행
    });
  }

  addVehicle(x, y) {
    // 외부에서 x,y의 값을 받는 vehicle를 생성하는 함수
    const mass = 1; //vehicles 질량 정의
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    ); // 새로운 vehocle 생성 및 배열에 추가
  }
}
// floor(random(1,2)) random 함수는 2 '미만'의 수를 만들기에 정수로 정의하면 2 생성 가능
