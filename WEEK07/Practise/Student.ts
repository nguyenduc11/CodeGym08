class Student {
  public name: string;
  public group: string;
  public scoreHK1: number;
  public scoreHK2: number;
  public rank: any;
  public avr: number = 0;
  constructor(name: string, group: string, scoreHK1: number, scoreHK2: number) {
    this.name = name;
    this.group = group;
    this.scoreHK1 = scoreHK1;
    this.scoreHK2 = scoreHK2;
  }
  getAveScore(): number {
    this.avr = (this.scoreHK1 + this.scoreHK2) / 2;
    return this.avr;
  }
  //   getRank(): any {
  //     this.avr = (this.scoreMath + this.scoreEnglish + this.scoreLiterature) / 3;
  //     if (this.avr >= 8) {
  //       this.rank = "GIOI";
  //       return this.rank;
  //     } else if (this.avr >= 6 && this.avr < 8) {
  //       this.rank = "KHA";
  //       return this.rank;
  //     } else if (this.avr < 6) {
  //       this.rank = "TB";
  //       return this.rank;
  //     }
  //   }
}

export default Student;
