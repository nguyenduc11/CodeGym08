// function multiply(a, b) {
//   return a * b;
// }
// let num1 = multiply(5);
// let num2 = multiply(5, 8);
// console.log(num1);
// console.log(num2);

// function multiply(a, b = 2) {
//   return a * b;
// }
// let num1 = multiply(5);
// let num2 = multiply(5, 8);
// console.log(num1);
// console.log(num2);

class Geeks {
  constructor(a, b = 3) {
    console.log(a * b);
  }
}
let obj1 = new Geeks(5);
let obj2 = new Geeks(5, 4);
console.log(obj1);
console.log(obj2);
