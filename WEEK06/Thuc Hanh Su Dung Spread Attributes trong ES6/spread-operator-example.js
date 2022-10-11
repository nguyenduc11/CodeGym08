const cars1 = ["AUDI", "BMW", "TATA", "MERCEDES"];
// const cars2 = [...cars1];
// const cars3 = [...cars1, "NISSAN", "TOYOTA"];
// console.log(cars1);
// console.log(cars2);
// console.log(cars3);
const cars2 = ["NISSAN", "TOYOTA"];
const cars3 = [...cars1, ...cars2];
console.log(cars3);

const cars4 = {
  Brand: "BMW",
  Color: "RED",
};
const cars5 = { ...cars4 };
console.log(cars5);

const cars6 = {
  Brand: "TOYOTA",
  Color: "RED",
};
const cars7 = {
  Brand: "NISSAN",
  Color: "BLUE",
  Year: "2004",
};
const cars8 = { ...cars6, ...cars7 };
console.log(cars8);

const car = "AUDI";
const a = [...car];
console.log(a);

const numbers = [3, 5, 7, 8, 9];
const [x, y, z, ...others] = numbers;
console.log(x);
console.log(y);
console.log(z);
console.log(others);
