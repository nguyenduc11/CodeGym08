/*let number = parseInt(prompt("Nhập số cần kểm tra"));
let flag = false;

if (number > 1 ) {
    for (let i = 2 ; i < number ; i++) {
        if (number %i == 0) {
            flag = true;
            break;
        }
    }
}
if (flag) {
    document.write(number + " không là số nguyên tố");
} else {
    document.write(number + " là số nguyên tố");
}*/



/*
let check_number = parseInt(prompt("Nhập số lượng cần kểm tra"));
let flag = false;

for (i_number = 2; i_number <= check_number; i_number++){
    for (let factor = 2 ; factor <= i_number ; factor++) {
        document.write(i_number)
        document.write(factor + " factor" + "<br>")
        if (i_number %factor == 0) {
            flag = true;

            break;
        } else {
            flag = false;

        }
    }
    if (flag = true) {
        document.write(i_number + " không là số nguyên tố" + "<br>");
    } else {
        document.write(i_number + " là số nguyên tố" + "<br>");
    }
}
*/


for (i=1;i<=5;i++){
    for (j=2;j<i;j++){
        console.log(i + "&" +j);
        if (i%j==0){
            console.log(i + "prime")
        } else {
            console.log(i + "not Prime")
        }
    }
}



// for (i=1;i<=5;i++){
//     console.log(i);
// }