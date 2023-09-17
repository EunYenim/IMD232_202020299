function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('orange');
}

function draw() {
  background('orange');
  fill(0);
  /*   if (mouseX > width / 2) {
    rect(width / 2, 0, width / 2, height);
    //console.log('mouse is right side of the cnavas');
  } else {
    //console.log('mouse is left side of the cnavas');
    rect(0, 0, width / 2, height);
  }
*/

  //   가로 3등분 안됨
  //   if (mouseX > (width * 1) / 3) {
  //     if (mouseY > height / 2) {
  //       rect((width * 1) / 3, height / 2, width / 3, height / 2);
  //     } else {
  //       rect((width * 1) / 3, 0, width / 3, height / 2);
  //     }
  //   } else if (mouseX > (width * 2) / 3) {
  //     if (mouseY > height / 2) {
  //       rect((width * 2) / 3, height / 2, width / 3, height / 2);
  //     } else {
  //       rect((width * 2) / 3, 0, width / 3, height / 2);
  //     }
  //   } else {
  //     if (mouseY > height / 2) {
  //       rect(0, height / 2, width / 3, height / 2);
  //     } else {
  //       rect(0, 0, width / 3, height / 2);
  //     }
  //   }

  //   수정
  if (mouseX > (width * 2) / 3) {
    // (2/3) * width과 같다
    if (mouseY > height / 2) {
      rect((width * 2) / 3, height / 2, width / 3, height / 2);
    } else {
      rect((width * 2) / 3, 0, width / 3, height / 2);
    }
  } else if (mouseX > (width * 1) / 3) {
    if (mouseY > height / 2) {
      rect((width * 1) / 3, height / 2, width / 3, height / 2);
    } else {
      rect((width * 1) / 3, 0, width / 3, height / 2);
    }
  } else {
    if (mouseY > height / 2) {
      rect(0, height / 2, width / 3, height / 2);
    } else {
      rect(0, 0, width / 3, height / 2);
    }
  }

  // 4등분
  /* if (mouseX > width / 2) {
    if (mouseY > height / 2) {
      rect(width / 2, height / 2, width / 2, height / 2);
    } else {
      rect(width / 2, 0, width / 2, height / 2);
    }
  } else {
    if (mouseY > height / 2) {
      rect(0, height / 2, width / 2, height / 2);
    } else {
      rect(0, 0, width / 2, height / 2);
    }
  } */
}
