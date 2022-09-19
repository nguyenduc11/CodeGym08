function minArray(arr) {
    if (arr.length == 0)
        return -1;
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let arr1 = [
    3,
    5,
    1,
    8,
    -3,
    7,
    8,
]

let arr3=[];
let arr4=[0,0,0,0,0,0]

let min = minArray(arr1);
// alert(min);
console.log(arr1);
console.log(minArray(arr1));
// console.log(minArray(arr3);
console.log(minArray(arr4));