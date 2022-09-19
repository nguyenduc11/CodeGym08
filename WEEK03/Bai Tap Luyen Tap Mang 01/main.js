/*//BAI 01: Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
//khoi tao array chua 10 so nguyen
let upperLimit = 10;
let myArr = [];
for (let i = 0; i < upperLimit; i++) {
    myArr.push(Math.floor(Math.random() * (upperLimit * 2) + 1));
}
console.log(myArr);
//tinh va hien thi cac so nguyen >=10
let count = 0;
for (let numbers of myArr) {
    if (numbers >= 10) {
        console.log(numbers + ">=10");
        count += 1;
    }
}
console.log("result=" + count);*/

//BAI 02
//khoi tao array chua 10 so nguyen
let upperLimit = 10;
let myArr = [];
for (let i = 0; i < upperLimit; i++) {
    myArr.push(Math.floor(Math.random() * (upperLimit * 2) + 1));
}
console.log(myArr);

function max(array) {
    let max = array[0];
    let min = array[0];
    for (let i = 1; i < arr.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }

    }
    console.log(min + "," + max);
}