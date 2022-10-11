export class Shape {
  private color: string = "green";
  private filled: boolean = true;
  constructor(color: string, filled: boolean) {
    this.color = color;
    this.filled = filled;
  }
  public getcolor(): string {
    return this.color;
  }
  public setcolor(color: string): void {
    this.color = color;
  }
  public isFilled(): boolean {
    return this.filled;
  }
  public setFilled(filled: boolean): void {
    this.filled = filled;
  }
  public toString(): string {
    return (
      "A Shape with color of " +
      this.getcolor() +
      " and " +
      (this.isFilled() ? "filed" : "not filled")
    );
  }
}
