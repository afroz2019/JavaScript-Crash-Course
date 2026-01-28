//<<--------------<<-----for in loop --------------->>------>>

const myObj = {
    js : "javaScript",
    cpp : "c++",
    java : "java programming",
    sql : "oracle"
}

for (const key in myObj){
    // console.log(`${key} is ${myObj[key]}`);
    // console.log(myObj[key]);
    
    
}

const myArr = [2, 3, 4, 5, 6, 7, 8];
for (const key in myArr) {
    // console.log(myArr[key]);
    
    
    
}


const map = new Map();
map.set("a",1);
map.set("b",2);
map.set("c",3);
map.set("d",4);

for(const key in map){ //wont work on map
    console.log(map[key]);
    
}