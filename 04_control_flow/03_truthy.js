const userEmail = []

if(userEmail){
    console.log("Got user email");          // Got user email
}
else{
    console.log("Don't have user email");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", "false"," ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("array is empty");          // array is empty
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");         // Object is empty
}

// Nullish Coalescing operator(??): null undefined

let val1 = 10 ?? 20                 
let val2 = null ?? 20               
let val3 = undefined ?? 30          
let val4 = null ?? 15 ?? 30         

console.log(val1);                  // 10
console.log(val2);                  // 20
console.log(val3);                  // 30
console.log(val4);                  // 15

// ternary operator
//  condition ? true : false


const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");      // more than 80
