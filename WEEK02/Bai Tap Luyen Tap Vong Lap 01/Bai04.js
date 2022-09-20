const fib = [];
fib[0] = 0;
fib[1] = 1;
document.write('fib[0] = 0'+"<br>");
document.write('fib[1] = 1'+"<br>");
for (let i = 2; i <= 20; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    if (fib[i] % 5 === 0){
        console.log('fib[' + i + '] = ' + fib[i]);
        document.write('fib[' + i + '] = ' + fib[i] + "<br>");
        break;
    }
}


// let firstTerm = 0, secondTerm = 1;
// let count = 2 ;
// let fib ;
// while(count++ <=10) {
//     let fib = firstTerm + secondTerm ;
//     firstTerm = secondTerm ;
//     secondTerm = fib;
// }
// console.log(fib);




