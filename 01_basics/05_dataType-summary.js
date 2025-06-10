// Primitive Data Type

// 7 types :-> Number, String, Boolean, undefined, null, Symbol, Bigint

const score = 100
const scoreValue = 100.3

let isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 457865478961245n
console.log(bigNumber);


// Non-Primitive Data Types(Reference)

// Array, objects, Functions

const heroes = ["Shaktiman", "Naagraj", "doga"]

const myObj = {
    name : "Vishal",
    age : 18,
}

const MyFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes);     // object
console.log(typeof myObj);      // object
console.log(typeof MyFunction); //function
