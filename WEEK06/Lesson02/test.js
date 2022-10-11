class Employee {
  constructor(salary, workday, role) {
    this.salary = salary;
    this.workday = workday;
    this.role = role;
  }
  salaryCal() {
    switch (this.role) {
      case "GD":
        if (this.workday >= 26) {
          return this.salary * 1.5;
        } else {
          return (this.workday / 26) * this.salary;
        }
      case "NV":
        if (this.workday >= 26) {
          return this.salary;
        } else {
          return (this.salary / 26) * this.workday;
        }
    }
  }
}

let Duc = new Employee(1000, 20, "NV");
console.log(Duc.salaryCal());
