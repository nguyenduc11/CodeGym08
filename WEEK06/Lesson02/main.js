var Employee = /** @class */ (function () {
  function Employee(salary, workday, role) {
    this.salary = salary;
    this.workday = workday;
    this.role = role;
  }
  Employee.prototype.salaryCal = function () {
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
  };
  return Employee;
})();
var Duc = new Employee(1000, 20, "NV");
console.log(Duc.salaryCal());
