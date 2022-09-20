// const fib = [];
// fib[0] = 0;
// fib[1] = 1;
// sum = 0;
// for (let i = 2; i <= 20; i++) {
//     fib[i] = fib[i - 2] + fib[i - 1];
//     sum = sum + fib[i];
// }
// console.log(sum);
// document.write("Bài 5" + "<br>");
// document.write("Tổng của 20 số đầu tiên trong dãy Fibonacci là " + sum);

for (let i = 1 ; i <= 100 ; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 ==0 ) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
