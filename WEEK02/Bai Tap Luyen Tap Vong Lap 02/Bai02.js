
document.write("<div style='font-size:30px'>Bài 02</div>");
let factorial_number = 1;
let input_number = parseInt(prompt("nhập số nguyên dương cần tính giai thừa"));
for (let i = 1 ; i <= input_number ; i++) {
    factorial_number = factorial_number * i;
}
document.write(input_number + " giai thừa = " + factorial_number);