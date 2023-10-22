// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  particleArray.push(new Particle(width / 2, 20));

  background(255);
  for (let a = 0; a < particleArray.length; a++) {
    particleArray[a].applyForce(gravity);
    particleArray[a].update();
    particleArray[a].display();
  }

  for (let a = particleArray.length - 1; a >= 0; a--) {
    if (particleArray[a].isDead()) {
      // 배열 중 어떤 것이 isDead가 된다면
      // 그 배열을 빼라
      particleArray.splice(a, 1);
      // 즉 이 코드는 무한으로 배열이 늘어나는 것을 막기 위한 것

      // splice(배열의 특정 자리, 특정자리에서 얼마나 뺄지)
      // 배열의 '값'의 '순서'를 바꿈
      // (2,3) => 2의 값(3번째 자리)과, 3,4의 총 3개의 값을 빼고
      // 뒤의 배열되어있던 값들의 순서를 앞으로 당김
      //배열의 중간 부분을 건너뛸 때 씀

      // 저렇게 쓰는 경우는,
      // 배열 중간부분을 건너뛰기 위해서이며,
      //이 과정은 for문에서 증가값으로 설정 할 시,
      //값의 순서가 앞으로 당겨지기 때문에 다음 반복에서 원래의 상태로
      //돌아가지 않는다.
      //그래서 반복문에서 감소값을 넣어, 배열의 값이 바뀌지 않도록 한다.
    }
  }

  console.log(particleArray.length);
}
