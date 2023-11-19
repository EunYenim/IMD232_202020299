const tiles = [];
const rowNum = 80,
  colNum = 80;
//셀의 갯수 설정

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  const w = width / colNum;
  const h = w;
  //셀의 길이와 높이 설정
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      const newTile = new Cell(x, y, w, h);
      tiles.push(newTile);
      //타일 생성
    }
  }

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const neighborsIdx = [
        getIdx(row - 1, col - 1),
        getIdx(row - 1, col),
        getIdx(row - 1, col + 1),
        getIdx(row, col + 1),
        getIdx(row + 1, col + 1),
        getIdx(row + 1, col),
        getIdx(row + 1, col - 1),
        getIdx(row, col - 1),
      ];
      //이웃들의 인덱스를 저장

      if (col === 0) {
        //그리드 안에 있는 각 타일의 인덱스에
        //따라 해당 타일의 이웃들을 설정하는 부분
        neighborsIdx[0] = -1;
        neighborsIdx[6] = -1;
        neighborsIdx[7] = -1;
        //왼쪽 위 왼쪽 왼쪽 아래의 인덱스를 -1로 변경
      } else if (col === colNum - 1) {
        neighborsIdx[2] = -1;
        neighborsIdx[3] = -1;
        neighborsIdx[4] = -1;
        //오른쪽 위 오른쪽 오른쪽 아래의 인덱스를 -1로 변경
      }
      if (row === 0) {
        neighborsIdx[0] = -1;
        neighborsIdx[1] = -1;
        neighborsIdx[2] = -1;
        //왼쪽 위 위쪽 오른쪽 위의 인덱스를 -1로 변경
      } else if (row === rowNum - 1) {
        neighborsIdx[4] = -1;
        neighborsIdx[5] = -1;
        neighborsIdx[6] = -1;
        // 왼쪽 아래, 아래쪽, 오른쪽 아래의 인덱스를 -1로 변경
      }
      const neighbors = [];
      neighborsIdx.forEach((eachIdx) => {
        neighbors.push(eachIdx >= 0 ? tiles[eachIdx] : null);
      });
      //위에서 처리한 각 타일들의 이웃을 기반으로 neighbors 배열설정
      // neighborsIdx의 가 유효한 인덱스이면 배열에 추가
      //아니면 null값 추가
      const idx = getIdx(row, col);
      //특정 열과 행에 해당하는 인덱스 계산
      tiles[idx].setNeighbors(neighbors);
      //tiles에서 idx에 해당하는 타일을 가져온 뒤,
      //setNeighbors를 호출, -> 이웃 설정
    }
  }

  frameRate(15);
  background(255);
  tiles.forEach((each) => {
    each.display();
  });
}

function draw() {
  background(255);

  tiles.forEach((each) => {
    each.calcNextState();
  });
  tiles.forEach((each) => {
    each.update();
  });

  tiles.forEach((each) => {
    each.display();
  });
}

function getIdx(row, col) {
  return row * colNum + col;
}

function mouseClicked() {
  tiles.forEach((tile) => {
    tile.state = random(['rock', 'paper', 'scissors']);
    tile.nextState = tile.state;
  });
}
