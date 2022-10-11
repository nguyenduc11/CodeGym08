function hello(){
    alert("Hello World");
}

document.getElementById("btn3").onmouseover=f1;
function f1(){
    this.style.background='red';
    this.style.color='yellow'
}

document.getElementById("btn3").onmouseout=f2;
function f2(){
    this.style.background='black';
    this.style.color='white';
}



