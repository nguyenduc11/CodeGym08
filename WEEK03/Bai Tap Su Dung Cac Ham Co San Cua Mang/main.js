/*//Bai 1
document.write("<div style='font-size:30px;color: red'>Bài 01</div>");
let myColor = ['Red', 'Green', 'White', 'Black'];
let myString = myColor.join();
document.write("Convert Array to String" + "<br>");
document.write(myString);*/

/*//Bai 2
document.write("<div style='font-size:30px;color: red'>Bài 02</div>");
let input = prompt("please type your number here");
let str = input.toString();
let result = [str[0]];
for (let x = 1; x < str.length; x++) {
    if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
        result.push('-', str[x]);
    } else {
        result.push(str[x]);
    }
}
document.write(result.join(''));*/

//Bai 3
let str = 'ch1mpanZEE';
let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let LOWER = 'abcdefghijklmnopqrstuvwxyz';
let result = [];

for (let x = 0; x < str.length; x++) {
    if (UPPER.indexOf(str[x]) !== -1) {
        result.push(str[x].toLowerCase());
    } else if (LOWER.indexOf(str[x]) !== -1) {
        result.push(str[x].toUpperCase());
    } else {
        result.push(str[x]);
    }
}
console.log(result.join(''));