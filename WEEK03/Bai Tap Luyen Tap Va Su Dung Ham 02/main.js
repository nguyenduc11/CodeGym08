function bai01(number){
    number = parseInt(prompt("Type in a number"));
    document.getElementById("user_number").innerHTML = number;
    let square_number;
    square_number = number*number;
    document.getElementById("square_number").innerHTML = square_number;
    return square_number;
}

function bai02(radius){
    radius = parseInt(prompt("Type in a number"));
    document.getElementById("circle_radius").innerHTML = radius;
    let circle_area, circle_circumference;
    circle_area = 3.14 * radius * radius;
    document.getElementById("circle_area").innerHTML = circle_area;
    circle_circumference = 2 * 3.14 * radius;
    document.getElementById("circle_circumference").innerHTML = circle_circumference;
}

function  bai03(number){
    number = parseInt(prompt("Nhập số cần tính giai thừa "));
    document.getElementById("user_number1").innerHTML = number;
    let factorial_number = 1;
    for (let i = 1; i <= number; i++){
        console.log(i);
        factorial_number = factorial_number * i;
    }
    console.log(factorial_number);
    document.getElementById("factorial_number").innerHTML = factorial_number;
    return factorial_number;
}

function bai04(user_input){
    user_input = prompt("Nhập ký tự cần kiểm tra");
    document.getElementById("user_input").innerHTML = user_input;
    let is_number;
    if (isNaN(user_input) === false) {
        is_number = true;
    } else {
        is_number = false;
    }
    document.getElementById("is_number").innerHTML = is_number;
    return is_number;
}

function bai05(first_num,second_num,third_num){
    first_num = parseInt(prompt("First Number?"))
    document.getElementById("first_number").innerHTML = first_num;

    second_num = parseInt(prompt("Second Number?"))
    document.getElementById("second_number").innerHTML = second_num;

    third_num = parseInt(prompt("Third Number?"))
    document.getElementById("third_number").innerHTML = third_num;

    let myArr = [first_num,second_num,third_num];
    console.log(myArr);
    let smallest_number = Math.min(...myArr);
    console.log(smallest_number);
    document.getElementById("smallest_number").innerHTML = smallest_number;
    return smallest_number;
}

function bai06(num){
    num = Number(prompt("Enter A Number?"));
    document.getElementById("check_number").innerHTML = num;
    let check_number;
    if (num > 0 && Number.isInteger(num)){
        check_number = "Yes";
        console.log(check_number);
    } else {
        check_number = "No"
        console.log(check_number);
    }
    document.getElementById("pos_nat_number").innerHTML = check_number;
    return check_number;
}

function bai07(num1,num2){
    num1 = Number(prompt("Enter 1st Number?"));
    document.getElementById("swap_number1").innerHTML = num1;
    num2 = Number(prompt("Enter 2nd Number?"));
    document.getElementById("swap_number2").innerHTML = num2;
    document.getElementById("after_swap_number1").innerHTML = num2;
    document.getElementById("after_swap_number2").innerHTML = num1;
}

function bai08(num){
    num = Number(prompt("Enter A Number"));
    document.getElementById("number_to_revert").innerHTML = num;
    let str1 = String(num);
    console.log(str1);
    let myArr = str1.split("")
    console.log(myArr);
    let reverseArr = myArr.reverse();
    console.log(reverseArr);
    let number_after_reversion = reverseArr.join("");
    console.log(number_after_reversion);
    document.getElementById("number_after_reversion").innerHTML = number_after_reversion;
    return number_after_reversion;
}

function bai09(user_string,user_char){
    user_string = String(prompt("Enter A String?"));
    document.getElementById('input_string').innerHTML = user_string;
    user_char = String(prompt("Enter A Character?"));
    document.getElementById('input_character').innerHTML = user_char;
    //Convert String To Array Using Split
    let myArr = user_string.split("");
    console.log(myArr);
    let counter = 0;
    for (let item of myArr){
        if(item===user_char){
            counter+=1;
        }
    }
    console.log(counter);
    let number_of_character;
    if(counter>0){
        number_of_character = counter;
    } else if (counter==0){
        number_of_character = -1;
    }
    document.getElementById('number_of_character').innerHTML = number_of_character;
    return number_of_character;
}
