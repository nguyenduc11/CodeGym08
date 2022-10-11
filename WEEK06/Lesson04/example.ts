class Student {
  private name: string;
  private scoreMath: number;
  private scoreEnglish: number;
  private scoreLiterature: number;
  public rank: any;
  public avr: number = 0;
  constructor(
    name: string,
    scoreMath: number,
    scoreEnglish: number,
    scoreLiterature: number
  ) {
    this.name = name;
    this.scoreMath = scoreMath;
    this.scoreEnglish = scoreEnglish;
    this.scoreLiterature = scoreLiterature;
  }
  getAveScore(): number {
    return (this.scoreMath + this.scoreEnglish + this.scoreLiterature) / 3;
  }
  getRank(): any {
    this.avr = (this.scoreMath + this.scoreEnglish + this.scoreLiterature) / 3;
    if (this.avr >= 8) {
      this.rank = "GIOI";
      return this.rank;
    } else if (this.avr >= 6 && this.avr < 8) {
      this.rank = "KHA";
      return this.rank;
    } else if (this.avr < 6) {
      this.rank = "TB";
      return this.rank;
    }
  }
}

let student01 = new Student("lionel", 7, 8, 9);
console.log(student01);
console.log(student01.getAveScore());
console.log(student01.getRank());
console.log(student01);
let student02 = new Student("messi", 4, 5, 6);
console.log(student02);
console.log(student02.getAveScore());
console.log(student02.getRank());
console.log(student02);
