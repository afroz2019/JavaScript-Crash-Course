// //declaring an array

// //#1
const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);

// //#2
// const myArr2 = new Array(0, 1, 2, 3, 4);
// console.log(myArr2);

// //find length of an array
// console.log(myArr.length);

//adding element at the end of array
myArr.push(6);
// console.log(myArr);

//removing element from end of array

myArr.pop();
// console.log(myArr);

myArr.pop();
// console.log(myArr);


//adding element at the begining
myArr.unshift(9); //costly operation
// console.log(myArr); 

//removing element from begining
myArr.shift();
// console.log(myArr);

//finding an element inside array

// console.log(myArr.includes(3)); //output in boolean
// console.log(myArr.includes(9));

//finding index of an element

// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(9)); // returns -1 if element is not there

//join() returns array elements as strings separated by comms
const arr2 = myArr.join();

// console.log(arr2);

//slice() and splice()

// const arrayA = [0, 1, 2, 3, 4, 5];
// console.log("A ", arrayA);
// console.log(arrayA.slice(1, 3));
// console.log(arrayA);


// const arrayB = [0, 1, 2, 3, 4, 5];
// console.log("B " , arrayB);
// console.log(arrayB.splice(1, 3)); // splice() removes element and modify original array
// console.log(arrayB);


const array1 = [0, 1, 2, 3];
const array2 = [4, 5, 6, 7];
// array1.push(array2);
// console.log(array1);

const array3 = array1.concat(array2);
const allNumbers = [...array1,...array2];
console.log(allNumbers);

console.log(Array.isArray(array3));
console.log(Array.isArray("Afroz"));
console.log(Array.from("Afroz"));

const user1 = "ram"
const user2 = "sam"
const user3 = "robin"
console.log(Array.of(user1, user2, user3));

console.log(Array.from({name : "afroz"}));//returns empty array ******????
























