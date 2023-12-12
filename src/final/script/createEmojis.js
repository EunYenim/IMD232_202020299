let emotion; // emotionRecog.js에서 감지한 표정 정보 저장

const {
  Engine,
  Render,
  Runner,
  Composites,
  Common,
  MouseConstraint,
  Mouse,
  Composite,
  Vertices,
  Bodies,
} = Matter;

// 엔진 만들기
let engine = Engine.create(),
  world = engine.world;

//렌더하기
const elem = document.querySelector('#canvas');
let render = Render.create({
  element: elem,
  engine: engine,
  options: {
    width: 800,
    height: 600,
    wireframes: false,
  },
});

Render.run(render);

//러너 만들기
let runner = Runner.create();
Runner.run(runner, engine);

//바디 생성
function createBody() {
  emotion = window.maxExpression;
  console.log('p5.js emotion', emotion);
  //바디의 생성 위치, 갯수 정하기
  //stack(x좌표에서 간격,y에서 간격,열 수, 행 수, x시작 위치, y 시작 위치)
  let stack = Composites.stack(30, 1, 1, 1, 50, 0, function (x, y) {
    // 랜덤한 x, y 위치 생성 (800은 캔버스의 너비, 600은 캔버스의 높이)
    x = Common.random(0, 800);
    y = Common.random(0, 600);
    let sides = Math.round(Common.random(1, 8));

    // round the edges of some bodies
    let chamfer = null;
    if (sides > 2 && Common.random() > 0.7) {
      chamfer = {
        radius: 10,
      };
    }

    // 바디가 생성되는 조건, 조건에 따라 생성되는 이미지(바디) 가 다름
    if (emotion === 'happy') {
      return Bodies.rectangle(x, y, 80, 80, {
        render: {
          strokeStyle: '#ffffff',
          sprite: {
            texture: 'img/emojiHappy.png',
            xScale: 0.8,
            yScale: 0.8,
          },
        },
      });
    } else if (emotion === 'sad') {
      return Bodies.rectangle(x, y, 80, 80, {
        render: {
          strokeStyle: '#ffffff',
          sprite: {
            texture: 'img/emojiSad.png',
            xScale: 0.8,
            yScale: 0.8,
          },
        },
      });
    } else if (emotion === 'neutral') {
      return Bodies.rectangle(x, y, 80, 80, {
        render: {
          strokeStyle: '#ffffff',
          sprite: {
            texture: 'img/emojiNeutral.png',
            xScale: 0.8,
            yScale: 0.8,
          },
        },
      });
    } else if (emotion === 'angry') {
      return Bodies.rectangle(x, y, 80, 80, {
        render: {
          strokeStyle: '#ffffff',
          sprite: {
            texture: 'img/emojiAngry.png',
            xScale: 0.8,
            yScale: 0.8,
          },
        },
      });
    } else if (emotion === 'disgusted') {
      return Bodies.rectangle(x, y, 80, 80, {
        render: {
          strokeStyle: '#ffffff',
          sprite: {
            texture: 'img/emojiDisgusted.png',
            xScale: 0.8,
            yScale: 0.8,
          },
        },
      });
    } else if (emotion === 'surprised' || emotion === 'fearful') {
      return Bodies.rectangle(x, y, 80, 80, {
        render: {
          strokeStyle: '#ffffff',
          sprite: {
            texture: 'img/emojiSurprised.png',
            xScale: 0.8,
            yScale: 0.8,
          },
        },
      });
    }
  });

  // 월드에 추가하기
  Composite.add(world, [
    stack,
    Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  ]);

  // add gyro control
  if (typeof window !== 'undefined') {
    let updateGravity = function (event) {
      let orientation =
          typeof window.orientation !== 'undefined' ? window.orientation : 0,
        gravity = engine.gravity;

      if (orientation === 0) {
        gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
        gravity.y = Common.clamp(event.beta, -90, 90) / 90;
      } else if (orientation === 180) {
        gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
        gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
      } else if (orientation === 90) {
        gravity.x = Common.clamp(event.beta, -90, 90) / 90;
        gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
      } else if (orientation === -90) {
        gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
        gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
      }
    };

    window.addEventListener('deviceorientation', updateGravity);
  }

  //마우스 컨트롤 추가하기
  let mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  Composite.add(world, mouseConstraint);

  //마우스 렌더 부분 (keep the mouse in sync with rendering)
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 },
  });
}

//시간제어

setTimeout(() => {
  let interval = setInterval(createBody, 2000);

  // 5초 후에 interval 중지
  setTimeout(() => {
    clearInterval(interval);
  }, 30000);

  //4초 후 실행
}, 4000);

//<조건>
// 스크롤 할때 생성 시작
// 캔버스 반응형
// 마우스 클릭시 초기화
//2초 뒤 생성, 0.2초마다 1개씩 조건에 따라 이미지 생성, 5초간 실행
