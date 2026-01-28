// const arrayA = [0, 1, 2, 3, 4, 5];
// console.log("A ", arrayA);
// console.log(arrayA.slice(1, 3));
// console.log(arrayA);


// const arrayB = [0, 1, 2, 3, 4, 5];
// console.log("B " , arrayB);
// console.log(arrayB.splice(1, 3)); // splice() removes element and modify original array
// console.log(arrayB);


const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b",6:"c"}
const obj3 = {7:"a",8:"b",9:"c"}

const obj4 = Object.assign({},obj1,obj2,obj3);
// console.log(obj4);
const obj5 = {...obj1, ...obj2, ...obj3};
console.log(obj5);
