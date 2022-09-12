// BAI 01
document.write("<div style='font-size:30px;color: red'>Bài 01</div>");
var num = parseInt(prompt("Enter a number: "));
var total = 0;
while( num != -1 ) {
    num = parseInt(prompt("Enter a number: "));
    alert(num);
    total = total + num;
}
alert(total);

// BAI 02
document.write("<div style='font-size:30px;color: red'>Bài 02</div>");
let i = 1;
while (i<100) {
    document.write("<hr width = " + i + "%>");
    i++;
}


