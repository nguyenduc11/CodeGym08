let quantity = parseInt(prompt("Nhập số lượng số Fibonacci cần in ra"))
const fib = [];
fib[0] = 0;
fib[1] = 1;
document.write('fibonacci[0] = 0'+"<br>");
document.write('fibonacci[1] = 1'+"<br>");
for (let i = 2; i <= quantity; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    document.write('fibonacci[' + i + '] = ' + fib[i] + "<br>");
}
