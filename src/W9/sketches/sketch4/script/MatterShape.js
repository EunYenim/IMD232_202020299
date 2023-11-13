class MatterShape {
  constructor(x, y, vertices, options) {
    //다각형 좌표 추가
    this.body = Bodies.fromVertices(x, y, vertices, options);
    // fromVertices 다각형 만들기
    Composite.add(matterEngine.world, this.body);
    // console.log(this.body);
  }

  display() {
    //   1. 엔진에 등록된 물체의 버텍스들 가져오기
    //   2. beginShape, endShape 안에 버텍스 찍기
    //   끝
    beginShape();
    this.body.vertices.forEach((each) => {
      vertex(each.x, each.y);
    });
    endShape(CLOSE);
  }

  isDead() {
    return this.body.position.y > height + 100;
  }

  remove() {
    Composite.remove(matterEngine.world, this.body);
  }
}
