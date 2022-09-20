//Part 1
for (i = 1; i <= 5; i++) {
    for(j=1; j<=i; j++){
        document.write("*");
    }
    document.write('<br>');
}
document.write('<br>');
//Part 2
for (i = 5; i >= 1 ; i--) {
    for(j=1; j<=i; j++){
        document.write("*");
    }
    document.write('<br>');
}
document.write('<br>');
//Part 3
for (let i = 4, z=1; i >= 1, z<=5 ; i--, z++) {
    for(j=1; j<=i; j++){
        document.write("&nbsp;&nbsp;");
    }
    for(n=1;n<=z;n++){
        document.write("*");
    }
    document.write('<br>');
}
document.write('<br>');
//Part 4
for (let i = 5, z=0; i >= 1, z<=4 ; i--, z++) {

    for(n=1;n<=z;n++){
        document.write("&nbsp;&nbsp;");
    }
    for(j=1; j<=i; j++){
        document.write(`*`);
    }
    document.write('<br>');
}
document.write('<br>');