const user = {
    name : "afroz",
    age : 26,

    greetings : function(){
        console.log(`hello ${this.name}`);
        
    }
}
// console.log(this); // in node it returns empty object{}, in browser it returns window

// const addTwo = (num1, num2)=>{ //explicit return
//     return num1 + num2
// }
// console.log(addTwo(4,7));


// const addTwo = (num1, num2)=> num1 + num2 //implicit return 
// console.log(addTwo(4,7));

const addTwo = (num1, num2)=> (num1 + num2)
console.log(addTwo(4,7));

const printObj = () => ({user: "1223hhf",
    id:"hdflsh"
})

console.log(printObj());

