// BAI 01
document.write("<div style='font-size:30px;color: red'>Bài 01</div>");
let text = "";
for (i = 0; i < 5; i++){
    text += "The number is " + i + "<br>";
}
document.write(text);

// BAI 02
document.write("<div style='font-size:30px;color: red'>Bài 02</div>");
let num = prompt("Enter your number: ");
let total = 0;
for (count = 1 ; count <= num ; count += 1) {
    total += count;
}
alert(total);
document.write("Tổng các phần từ từ 1 đến " + num + " là " + total);