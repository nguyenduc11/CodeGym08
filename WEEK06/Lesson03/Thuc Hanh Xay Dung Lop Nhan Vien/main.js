var Staff = /** @class */ (function () {
  function Staff(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  Staff.prototype.getName = function () {
    return this.name;
  };
  Staff.prototype.setName = function (name) {
    this.name = name;
  };
  return Staff;
})();
var staff = new Staff("staff01", "staff@gmail.com", 20);
var nameStaff = staff.getName();
console.log(nameStaff);
staff.setName("Staff02");
var currentNameStaff = staff.getName();
console.log(currentNameStaff);
