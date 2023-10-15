// let aMover;
let movers = [];
const moversNum = 100;
let mVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  //   aMover = new Mover(width / 2, height / 2, 10, 25, 'cornflowerblue');
  colorMode(HSL, 360, 100, 100, 100);
  for (let a = 0; a < moversNum; a++) {
    movers.push(
      // push로 mover의 수를 넣어서 movers.length 는 10이 됨
      new Mover(
        random(width), // 위치
        random(height),
        10,
        25,
        color(random(360), 100, 50, 25) // HSL 의 값에서 랜덤
      )
    );
  }
  mVec = createVector();

  background(255);
}

function draw() {
  mVec.set(mouseX, mouseY);

  //   const dirVec = p5.Vector.sub(mVec, aMover.pos);
  //   dirVec.setMag(0.5);
  //   aMover.applyForce(dirVec);
  //   aMover.update();
  for (let a = 0; a < movers.length; a++) {
    const dirVec = p5.Vector.sub(mVec, movers[a].pos);
    dirVec.setMag(0.5); // 가속도가 같도록 함
    movers[a].applyForce(dirVec);
    movers[a].update();
  }

  background(255);

  //   aMover.display();
  //   aMover.displayVectors();
  //   for (let a = 0; a < movers.length; a++) {
  //     movers[a].display();
  //     movers[a].displayVectors();
  //   }

  //   movers.forEach(function (anyName) {
  //     anyName.display();
  //     anyName.displayVectors();
  //   });

  movers.forEach((anyName) => {
    // function() {} 와 () => {}는 같다.
    anyName.display();
    anyName.displayVectors();
  });
}
