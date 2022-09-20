const fib = [];
fib[0] = 0;
fib[1] = 1;
document.write('fib[0] = 0'+"<br>");
document.write('fib[1] = 1'+"<br>");
for (let i = 2; i <= 20; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log('fib[' + i + '] = ' + fib[i]);
    document.write('fib[' + i + '] = ' + fib[i] + "<br>");
}