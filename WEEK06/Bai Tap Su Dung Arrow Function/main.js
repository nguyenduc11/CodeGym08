const inventory = [
  { type: "machine", value: 5000 },
  { type: "machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "machine", value: 77 },
];
// const myFunction = inventory.filter(function (e) {
//   return e.type === "machine";
// });
// console.log(myFunction);
const myFunction = inventory.filter((e) => e.type === "machine");
console.log(myFunction);
// const myFunction = inventory.filter(function (e) {
//   return e.value === 1200;
// });
// console.log(myFunction);
