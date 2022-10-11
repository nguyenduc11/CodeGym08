// class Application {
//   private name: string;
//   static count: number = 0;
//   constructor(name: string) {
//     this.name = name;
//     Application.count++;
//   }
// }
// console.log(Application.count);
// let app1 = new Application("App One");
// console.log(Application.count);
// let app2 = new Application("App Two");
// console.log(Application.count);

//Thuc Hanh Tao Lop Instructor co su dung static method
// class Instructor {
//   name: string = "";
//   role: string;
//   constructor({ name = "", role = "assistant" } = {}) {
//     this.role = role;
//     this.name = name;
//   }

//   // Instance method
//   renderDetails() {
//     console.log(`${this.name} - ${this.role}`);
//   }

//   // Base case static method
//   static helloWorld() {
//     console.log("Hi there");
//   }

//   // Static method
//   static canTeach(Instructor: any) {
//     return Instructor.role === "classroom";
//   }
// }

// let juniorInstructor = new Instructor({ name: "Brian" });
// let seniorInstructor = new Instructor({ name: "Alice", role: "classroom" });

// juniorInstructor.renderDetails(); // "Brian - assistant"
// seniorInstructor.renderDetails(); // "Alice - classroom"

// Instructor.helloWorld(); // "Hi there"

// // "Brian can teach: false"
// console.log(
//   `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
// );

// // "Alice can teach: true"
// console.log(
//   `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
// );
//===//
