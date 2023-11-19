class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = random(['rock', 'paper', 'scissors']); // 각 셀은 rock, paper, scissors 세 가지 상태 중 하나의 상태를 갖는다.
    this.nextState = this.state;
    this.neighbors = [];
    this.RPSCARule = {
      rock: 'scissors', // rock은 scissors를 이김
      paper: 'rock', // paper는 rock을 이김
      scissors: 'paper', // scissors는 paper를 이김
    };
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors; //주변 이웃 셀 저장
  }

  calcNextState() {
    const livingNeighbors = this.neighbors.filter(
      (eachNeighbor) => this.RPSCARule[eachNeighbor?.state] === this.state
    ).length;
    // 자신을 이길 수 있는 셀의 갯수를 센다.

    if (livingNeighbors <= 2) {
      // 자신을 이길 수 있는 셀의 개수가 2개 이하면
      this.nextState = this.state; // 원래 상태로 남음 (방어)
    } else {
      //아니라면,
      const livingNeighborsStates = this.neighbors.filter(
        (eachNeighbor) => this.RPSCARule[eachNeighbor?.state] === this.state
      );
      // 자신을 이긴 셀의 상태들을 모은다.
      const randomIndex = Math.floor(
        Math.random() * livingNeighborsStates.length
      );
      this.nextState = livingNeighborsStates[randomIndex].state; // 자신을 이긴 셀의 상태 중 하나로 변경 (점령당함)
    }
  }

  update() {
    this.state = this.nextState;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    if (this.state === 'rock') {
      fill('#67DAFF');
    } else if (this.state === 'scissors') {
      fill('#F580FF');
    } else if (this.state === 'paper') {
      fill('#9AFF76');
    }
    rect(0, 0, this.w, this.h);
    pop();
  }
}
