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

export default Student;
