//singleton object
const fbUser = new Object();
// console.log(fbUser);

//object literal

const fbUser2 = {};
// console.log(fbUser2);

//assigning objects

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b",6:"c"}
const obj3 = {7:"a",8:"b",9:"c"}

const obj4 = Object.assign({},obj1,obj2,obj3);
console.log(obj4);

//spread
const obj5 = {...obj1, ...obj2, ...obj3};
console.log(obj5);

const user1 = {
    name: "Afroz",
    age: 20,
    email: "afroz123@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Wednesday"]
}
console.log(Object.keys(user1)); //returns array
console.log(Object.values(user1));
console.log(Object.entries(user1)); //returns every element as array inside array
