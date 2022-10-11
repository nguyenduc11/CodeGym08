import Footballer from "./Footballer";

class FootballManager {
  public footballerList: Footballer[] = [];
  constructor() {}
  add(Footballer: any): void {
    this.footballerList.push(Footballer);
  }
  getAll() {
    return this.footballerList;
  }
  filterAge() {
    return this.footballerList.filter((f) => {
      return f.age < 30;
    });
  }
  filterGoal() {
    return this.footballerList.filter((f) => f.goals > 400);
  }
}
export default FootballManager;
