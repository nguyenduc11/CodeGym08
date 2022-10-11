let list1: number[] = [1,2,3,4,5];
let list2: Array<number> = [1,2,3,4,5];

console.log(list1);
console.log(list2);

//Tuples
let x: [string, number];
x = ['messi',34];
console.log(x);
//Enum, collection of constants
enum City {'NY','CA','WA'};
let city1: City = City.CA;
console.log(city1);
//Interface
interface Calc{
    substract(first:number,second:number):any;
}
let Calculator: Calc = {
    substract(first:number,second:number){
        return first - second;
    }
}
//Classes
class Student{
    RollNo: number;
    Name: string;
    constructor(_RollNo: number, _Name: string){
        this.RollNo = _RollNo;
        this.Name = _Name;
    }
    showDetails() {
        console.log(this.RollNo + " : " + this.Name);

    }
}
//Functions with Name
function add(a:number,b:number){
    return a+b;
}
console.log(add(3,5))
//Functions Anonymous
let sum1 = function (m: number, n: number):number{
    return m+n;
};
console.log(sum1(3,5))

//Generic
function identity<T>(arg:T):T{
    return arg;
}
let output1 = identity<string>('myString');
console.log(output1)
let output2 = identity<number>(100)
console.log(output2)
//Decorators
// function f() {
//     console.log("f(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("f(): called");
//     }
// }

// class C {
//     @f()
//     method() {}
// }

//Union
type MyBool = true | false;
type WIndowStates = 'open'|'closed'|'minimized'
type LockStates = 'locked'|'unlocked'
type PositiveOddNumbersUnderTen = 1|3|5|7|9;
function getLength(obj:string|string[]){
    return obj.length;
}
function wrapInArray(obj:string|string[]){
    if (typeof obj ==='string'){
        return [obj];
    }
    return obj;
}
// Array
let numbers1: number[] = [1, 2, 3, 4, 5];
let numbers2: Array<number> = [1, 2, 3, 4];

const myArr: number[] = new Array(4);

for (let i = 0; i < myArr.length; i++){
    myArr[i] = 2*i;
    console.log(myArr[i]);
    };

//Optional Parameter with ? mark
function multiply(a:number, b:number,c?:number):number{
    if(typeof c!== 'undefined'){
        return a*b*c;
    }
    return a*b;
}
console.log(multiply(1,2,));
//Optional Attribute of Object


//Object in TypeScript
var person={
    firstName: 'John',
    lastName: 'Doe',
    sayHello:function(){},
};
console.log(person.firstName);
console.log(person.lastName);
//add function to object person
person.sayHello = function(){console.log('Hello')}
person.sayHello();

