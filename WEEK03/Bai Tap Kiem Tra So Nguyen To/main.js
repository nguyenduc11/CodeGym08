let upperNumber = parseInt(prompt("Kiểm tra số nguyên tố trong ... số đầu tiên"));
flag = false;
for (let checkNumber=2 ; checkNumber<= upperNumber ; checkNumber++){
    console.log("check number=" + checkNumber);
    for (let factor=2; factor<checkNumber ; factor++) {
        console.log("factor=" + factor);
        if (checkNumber % factor === 0) {
            console.log(checkNumber + " KHÔNG là số nguyên tố");
            flag = false;
            break;
        } else {
            console.log(checkNumber + " LÀ số nguyên tố");
            flag = true;
        }
    }
    if (flag == true) {
        document.write(checkNumber + " is Prime" + "<br>");
    } else {
        // document.write(checkNumber + " is NOT Prime" + "<br>");
    }
}


