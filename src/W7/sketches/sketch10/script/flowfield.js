class Flowfiled {
  constructor(resolution, noiseVel) {
    this.resolution = resolution;
    this.columnNum = ceil(width / this.resolution);
    //값을 int로 계산
    //행의 숫자
    this.rowNum = ceil(height / this.resolution);
    //열의 숫자
    this.field = new Array(this.columnNum);
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      this.field[colIdx] = new Array(this.rowNum);
    }
    //각 셀들을 생성
    // this.filed = [this.columnNum][this.rowNum];
    this.noiseVel = noiseVel;
    this.init();
  }

  init() {
    //그리드 내 각 셀에 방향성을 가지는
    //벡터를 생성하여 field 배열을 초기화
    noiseSeed(random(1000));
    let noiseX = 0;
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      let noiseY = 0;
      for (let rowIdx = 0; rowIdx < this.rowNum; rowIdx++) {
        // const angle = map(noise(noiseX, noiseY), 0, 1, 0, TAU);
        // const vector = createVector(1, 0);
        // vector.rotate(angle);
        // this.field[colIdx][rowIdx] = vector;
        const angle = map(noise(noiseX, noiseY), 0, 1, 0, TAU);
        this.field[colIdx][rowIdx] = p5.Vector.fromAngle(angle);
        //특정 각도에서 새로운 2D 벡터를 생성
        noiseY += this.noiseVel;
      }
      noiseX += this.noiseVel;
    }
  }

  display() {
    for (let colIdx = 0; colIdx < this.columnNum; colIdx++) {
      for (let rowIdx = 0; rowIdx < this.rowNum; rowIdx++) {
        const vector = this.field[colIdx][rowIdx];
        const s = this.resolution;
        const x = s * colIdx + s * 0.5;
        const y = s * rowIdx + s * 0.5;
        const angle = vector.heading();
        push();
        translate(x, y);
        rotate(angle);
        noFill();
        stroke(0);
        line(-this.resolution * 0.4, 0, this.resolution * 0.4, 0);
        pop();
      }
    }
  }

  lookup(pos) {
    const colIdx = constrain(
      floor(pos.x / this.resolution),
      0,
      this.columnNum - 1
    );
    const rowIdx = constrain(
      floor(pos.y / this.resolution),
      0,
      this.rowNum - 1
    );
    return this.field[colIdx][rowIdx];
  }
}
