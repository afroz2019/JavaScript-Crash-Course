const languages = ["javaScript", "java", "sql", "c++", "python"];


// languages.forEach(function (lang){
//     console.log(lang);
    
// })



// languages.forEach((val) => {
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// languages.forEach(printMe);

const print = function(val){
    // console.log(val);
    
}

languages.forEach(print);

const mySkills = [
    {
        name : "java",
        level : "advance"
    },
    {
        name : "javaScript",
        level : "intermediet"
    },
    {
        name : "sql",
        level : "advance"
    }
];

mySkills.forEach((item)=>{
    // console.log(item.name);
    console.log(item.level);
    
    
})