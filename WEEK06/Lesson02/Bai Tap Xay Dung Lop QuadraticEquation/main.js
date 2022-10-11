class QuadraticEquation {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.delta;
    this.root1;
    this.root2;
  }
  getDiscriminant() {
    this.delta = this.b * this.b - 4 * this.a * this.c;
    return this.delta;
  }
  getRoot1() {
    if (this.delta >= 0) {
      return (this.root1 =
        (-this.b + Math.pow(this.delta, 0.5)) / (2 * this.a));
    } else if (this.delta < 0) {
      return "This equation has no roots";
    }
  }
  get getRoot2() {
    if (this.delta >= 0) {
      return (this.root2 =
        (-this.b - Math.pow(this.delta, 0.5)) / (2 * this.c));
    } else if (this.delta < 0) {
      return "This equation has no roots";
    }
  }
}

let equation01 = new QuadraticEquation(2, 4, -4);
