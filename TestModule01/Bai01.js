// Find 3rd Max Value in an given array
function findThirdMax(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            };
        }
        return arr[arr.length - 3];
    };
};
//Test Case
arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(findThirdMax(arr1));