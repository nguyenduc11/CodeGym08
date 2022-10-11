class Staff {
  public name: string;
  public email: string;
  public age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
let staff = new Staff("staff01", "staff@gmail.com", 20);
let nameStaff = staff.getName();
console.log(nameStaff);
staff.setName("Staff02");
let currentNameStaff = staff.getName();
console.log(currentNameStaff);
