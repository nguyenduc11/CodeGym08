import { Shape } from "./Shape";
export class Rectangle extends Shape {
  private width: number = 10;
  private length: number = 1;
  constructor(width: number, length: number, color: string, filled: boolean) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }
  public getWidth(): number {
    return this.width;
  }
  public getLength(): number {
    return this.length;
  }
  public getArea(): number {
    return this.width * this.length;
  }
  public getPerimeter(): number {
    return 2 * (this.width + this.length);
  }
  //Override method
  public toString(): string {
    return (
      "A Rectangle with width" +
      this.getWidth() +
      "and length" +
      this.getLength() +
      ", which is a subclass of" +
      super.toString()
    );
  }
}
