//for of loop

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const a of array) {
    // console.log(a);
    
}

const messages = "Hello world!";

for (const message of messages) {
    // console.log(message);
    
}

// <<<<<<<<<<<<<<<<<<<<<<--------------------maps ---------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const map = new Map();
map.set("a",1);
map.set("b",2);
map.set("c",3);
map.set("d",4);

// console.log(map);
// console.log(map.get("a"));

const states = new Map();
states.set(1,"wb");
states.set(2,"kr");
states.set(3,"br");

for (const [key, value] of states) {
    // console.log(key, "--> ", value);
    
}

const myObj = {
    name : "afmo",
    age : 22,
    state : "karnataka"
}

// for (const element of myObj) {
//     console.log(element);
    
// }

