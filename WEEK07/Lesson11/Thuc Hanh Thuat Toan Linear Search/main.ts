function findItemMiss(data: number[]): number[] {
  let i: number = 1;
  let arr: number[] = [];
  while (i <= 10) {
    if (data.indexOf(i) == -1) {
      arr.push(i);
    }
    i++;
  }
  return arr;
}
let myArr = [1, 2, 4, 6, 7, 10];

console.log(findItemMiss(myArr));
