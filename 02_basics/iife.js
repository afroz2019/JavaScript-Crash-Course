//immediately invoked function expression

function fun(){
    console.log("coding is fun"); //want to call or invoke a function immediately after initialization 
}                                   //so global variables can't polliute the function
fun(); //this   works but it is not the correct way

//iife

(function fun2(){
    console.log("coding is awsome");  //named iife
    
})(); // " ; " is important

(()=>{
    console.log("JavaScript is cool"); //iife
    
})();