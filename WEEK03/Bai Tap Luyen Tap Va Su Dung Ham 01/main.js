function alertMessage() {
  alert("Xin Chao");
}

function incrementOne() {
  let para1 = parseInt(prompt("Nhap vao doi so"));
  let result1 = para1 + 1;
  alert("Ket qua la " + result1);
  return result1;
}

function processNumbers(num1, num2) {
  num1 = parseInt(prompt("Nhap vao so thu nhat"));
  num2 = parseInt(prompt("Nhap vao so thu hai"));
  if (num1 > num2) {
    alert(num1 + ">" + num2);
  } else if (num1 < num2) {
    alert("Tong cua hai so la " + (num1 + num2));
    return (num1 + num2);
  }
}

function addNumbers(){
    let firstNum = 4;
    let secondNum = 8;
    result = firstNum + secondNum;
    alert(result);
    return result;
}

//Bai 05




function findStars(){
    let myArr1 =["Polaris",
        "Aldebaran",
        "Deneb",
        "Vega",
        "Altair",
        "Dubhe",
        "Regulus",
    ];
    console.log(myArr1);

    let myArr2 = ["Ursa Minor",
        "Tarurus",
        "Cygnus",
        "Lyra",
        "Aquila",
        "Ursa Major",
        "Leo",
    ];
    console.log(myArr2);
    console.log(myArr1.length);
    console.log(myArr2.length);
    let user_input = (prompt("Tên ngôi sao?"));
    document.getElementById("star").innerHTML = user_input;
    let index;
    let result;
    for (let items of myArr1){
        console.log(items);
        if (items === user_input){
            index = myArr1.indexOf(items);
            console.log(index);
            result = myArr2[index];
            console.log(result);
            document.getElementById("result").innerHTML = result;
            return result;
        }
    }
}





/*
function demo(a,b){
    return a + b
}
demo1(1,2)
// phai in ra log, write()
*/

/*
function demo1(a,b){
    console.log(a+b)
}
// chi goi ham
*/


