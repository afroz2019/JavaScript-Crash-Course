//primitive type

//number
let number = 100;
let floatingPoint = 100.50;

//string
let string = "hii"

//boolean
let boolean = true // or false

//undefined // type of undefined is undefined
let unde = undefined;

//Type of null is object
let nullType = null;

//bigInt
let bigNumber = 87168751956198274n;

//Symbol uniquely identifies 
let symb = Symbol("123")
let symb2 = Symbol("123")

//console.log(typeof symb);

//console.log(symb === symb2);

//Reference type (Nonprimitive)

//Array //type of array is object
let array = [100,200,2001];
// console.log(array);
// console.log(typeof array);

//object -> type of object is object
let obj = {
    name:"afroz",
    age:25
}
// console.log(obj);
// console.log(typeof obj);

//function -> type of function is function

let fun = function print(){
    console.log("hello world");
    
}

fun()
console.log(typeof fun);


