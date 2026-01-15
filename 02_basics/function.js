function one(){
    const name = "afroz";
    function two(){
        const info = "active";
        console.log(`${name} is ${info} now`);//child can access parrent's property
    }
    console.log(`my name is ${name}`);
    // console.log("info ", info); //panent can't access chils's property
    
    two()
}

// one()


console.log(addOne(5));
function addOne(num){               //named function can call before function declarition
    return num +1;
}
// console.log(addTwo(5));
const addTwo = function(num) {      //function expression cant access before initialization
    return num + 2;
}
console.log(addTwo(5));




