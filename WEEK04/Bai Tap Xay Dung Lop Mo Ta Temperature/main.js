class Temperature {
    constructor(celcius) {
        this.celcius = celcius;
    }
    convertF(){
        return this.celcius * 9/5 + 32;
    }
    convertK(){
        return this.celcius + 273.15;
    }
}

let temp1 = new Temperature();
temp1.celcius = parseInt(prompt("Current Temperature in Celsius"), 10);
document.write(`Celcius: ${temp1.celcius} \n`);
document.write("<br></br>");
document.write(`Fahrenheit: ${temp1.convertF()} \n`);
document.write("<br></br>");
document.write(`Kelvins: ${temp1.convertK()} \n`);
