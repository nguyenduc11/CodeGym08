let value = prompt("Enter a number: ");
let numbers = [-3,5,1,3,2,10];
for (let i=0; i < numbers.length; i++){
    if (value == numbers[i]){
        alert("value " + numbers[i] + " found at " + i);
    }
}

/*let arr = [];
for (let row = 0; row < 3 ; row++){
    arr[row] = [];
    for (let col = 0; col < 5; col++){
        // arr[row][col] = row+col;
        arr[row][col] = Math.floor(Math.random()*100)+1;
    }
}
console.log(arr);*/
