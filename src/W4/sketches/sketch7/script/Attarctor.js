class Attractor {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
  }

  attract() {
    let dirVector = p5.Vector.sub(this.pos, mover.pos);
    let distance = dirVector.mag();
    let strength = (this.mag * mover.mass) / distance ** 2;
    return dirVector.setMag(strength);
  }

  display() {
    allipse(this.pos.x, this.pos.y, 100);
  }
}
