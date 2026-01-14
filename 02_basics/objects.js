//creating an object

const user1 = {
    name: "Afroz",
    age: 20,
    email: "afroz123@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Wednesday"]
}

// console.log(user1);

//accessing object element
//#1

// console.log(user1.name);
// console.log(typeof user1.name);

//#2

// console.log(user1["name"]); //another to access object elements ## all keys are strings

//updeting objects

user1.age = 21;
// console.log(user1["age"]);
user1["age"] = 22;
// console.log(user1["age"]);

//using symbol as key
const mySym = Symbol("key1");

const user2 = {
    name: "Afroz",
    // mySym: "myKey1", not correct way ->
    [mySym] : "myKey1",
    age: 20,
    email: "afroz123@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Wednesday"],
    "location" : "Bangalore"
}

// console.log(user2);
// console.log(user2.mySym); // wont work
// console.log(user2[mySym]); //correct way

//freeze()

Object.freeze(user2); // can't make changes on object

user2.name = "Afroz Mondal";
// console.log(user2)

//adding function to object

user1.greetings = function() {
    console.log("hey user");
    
}


console.log(user1.greetings);
console.log(user1.greetings());
console.log(user1);

user1.greetings2 = function() {
    console.log(`hey ${this.name}`);
    
}

console.log(user1.greetings2());






