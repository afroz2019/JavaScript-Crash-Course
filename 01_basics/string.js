let user = "afroz123@gmail.com"
// console.log(user);

//tamplate literal ( string interpolation)
// console.log(`My user id is ${user}`);

const string4 = new String("a string object");
// console.log(string4);

const string5 = "a string object";

// console.log(typeof string4);

// console.log(typeof string5);


// console.log(string4 === string5); //false string4 is a object string5 is string literal

// console.log(string4 == string5); //true

// // console.log(string5.toUpperCase());

// // console.log(string5.__proto__);





//access individual character in a string --> charAt() method

const str = "afroz@google.com";
let firstChar = str.charAt(0);
console.log(firstChar);

//find leangth of the string

console.log(`length of the string is ${str.length}`);

let lastChar = str.charAt(str.length -1);
console.log(lastChar);

//testing if a string contains a substring

console.log(str.includes("google") ? "yes" : "no");

let str2 = "         afroz       "
console.log(str2);


//trim() trimes empty spaces
let str3 = str2.trim();
console.log(str3);

const sentence = "The cat is jumping";
const word = "cat";

console.log(sentence.indexOf(word));








