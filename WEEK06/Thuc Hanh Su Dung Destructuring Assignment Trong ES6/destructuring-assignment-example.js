// let names = ["alpha", "beta", "gamma", "delta"];
// let [firstName, secondName] = names;
// console.log(firstName, secondName);

// var [firstName, , ...lastName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName, lastName);
// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];

// [firstName, secondName] = [secondName, firstName];

// console.log(firstName, secondName);

// function NameList() {
//   return ["alpha", "beta", "gamma", "delta"];
// }
// let [firstName, secondName] = NameList();
// console.log(firstName, secondName);

// let marks = {
//   x: 21,
//   y: -34,
//   z: 47,
// };
// let x = marks.x;
// let y = marks.y;
// let z = marks.z;
// console.log(x);
// console.log(y);
// console.log(z);

const marks = {
  section1: {
    alpha: 15,
    beta: 16,
  },
  section2: {
    alpha: -31,
    beta: 19,
  },
};
const {
  section1: { alpha: alpha2, beta: beta2 },
} = marks;

console.log(alpha2, beta2);
