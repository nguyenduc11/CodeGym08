//Bai 1//
document.write("<div style='font-size:30px'>Bài 01</div>");
let i = 10;
let f = 20.5;
let bb = true;
let s = "Hà Nội";

document.write("i = " + i + "<br>");
document.write("f = " + f + "<br>");
document.write("b = " + bb + "<br>");
document.write("s = " + s + "<br>" + "<br>");

//Bai 2//
document.write("<div style='font-size:30px'>Bài 02</div>");
let RecWidth = 100;
let RecHeight = 20;
let RecArea = RecWidth * RecHeight;
document.write("Rectangular Width = " + RecWidth + "<br>");
document.write("Rectangular Height = " + RecHeight + "<br>");
document.write("Rectangular Area = " + RecArea + "<br>" + "<br>");

//Bai 3//
document.write("<div style='font-size:30px'>Bài 03</div>");
let a = prompt("Enter 1st Number a = ");
document.write("Your 1st Number is " + a +"<br>")
let b = prompt("Enter 2nd Number b =");
document.write("Your 2nd Number is " + b +"<br>")
if (a%b == 0){
    alert("a là bội số của b");
    document.write(a + " là bội số của " + b)
} else {
    alert("a không là bội số của b");
    document.write(a + " không là bội số của " + b)
}