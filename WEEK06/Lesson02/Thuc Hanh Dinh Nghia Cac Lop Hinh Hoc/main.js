class Shape {
  constructor(color, filled) {
    this.color = color;
    this.filled = filled;
  }
}

class Circle {
  constructor(radius, color, filled) {
    this.color = color;
    this.filled = filled;
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }

  getPerimeter() {
    return 2 * this.radius * Math.PI;
  }
}
