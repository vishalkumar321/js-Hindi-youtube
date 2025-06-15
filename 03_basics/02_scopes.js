let a = 300

if(true){
    const a =10
    let b = 20
    var c = 30
    console.log("Inner a : ", a);           // Inner a :  10
    
}

var c = 300

console.log("outer a : ", a);               // outer a :  300
// console.log(b);
console.log(c);                 // 300


function one(){
    const username = "Vishal"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);            // website is not defined

    two()           // Vishal
}

one()


if(true){
    const username = "Vishal"

    if(username === "Vishal"){
        const website = " Youtube"
        console.log(username + website);    // Vishal Youtube
    }
    // console.log(website);            // website is not defined
}

// console.log(username);               //  username is not defined


console.log(addOne(5));                 // 6

function addOne(num){
    return num+1
}


// console.log(addTwo(10));            // Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num+1
}



