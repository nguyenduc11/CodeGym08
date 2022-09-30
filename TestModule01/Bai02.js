// Remove element indexed at num position of an array
function tryRemoveFromArray(arr, num) {
    if (0 < num && num < arr.length) {
        newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (i != num) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    } else if (num < 0 || num > arr.length) {
        return arr;
    }
}
// Test Case
arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(tryRemoveFromArray(arr1,2));