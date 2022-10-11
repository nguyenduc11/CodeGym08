class Footballer {
  public name: string;
  public age: number;
  public goals: number;
  constructor(name: string, age: number, goals: number) {
    this.name = name;
    this.age = age;
    this.goals = goals;
  }
  logger(): void {
    console.log(this.name + ": " + this.age + " goals: " + this.goals);
  }
}

export default Footballer;
