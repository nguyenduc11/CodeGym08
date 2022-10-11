// const numbers = [65, 44, 12, 4];
// console.log(numbers);
// numbers.forEach(myFunction);
// console.log(numbers);
// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }

function isPositive(value) {
  return value > 0;
}

function isEven(value) {
  return value % 2 == 0;
}

var filtered1 = [112, 52, 0, -1, 944].filter(isPositive);
console.log(filtered1);

var filtered2 = [112, 52, 0, -1, 943].filter(isEven);
console.log(filtered2);
