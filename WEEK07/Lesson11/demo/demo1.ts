function binarySearch(numbers: number[], needle: number): boolean {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] == needle) {
      return true;
    } else if (numbers[mid] > needle) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 7));
