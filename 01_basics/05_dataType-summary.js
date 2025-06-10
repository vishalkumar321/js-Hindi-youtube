// Primitive Data Type

// 7 types :-> Number, String, Boolean, undefined, null, Symbol, Bigint

const score = 100           // number
const scoreValue = 100.3    // number

let isLoggedIn = false      // boolean
const outSideTemp = null    // null
let userEmail;              // undefined

const id = Symbol('123')            // symbol
const anotherId = Symbol('123')     // symbol

console.log(id===anotherId)         // false

const bigNumber = 457865478961245n  // Bigint
console.log(bigNumber);


// Non-Primitive Data Types(Reference)

// Array, objects, Functions

const heroes = ["Shaktiman", "Naagraj", "doga"]     // Array

const myObj = {
    name : "Vishal",            // object
    age : 18,
}

const MyFunction = function(){      // function
    console.log("Hello World");
}

console.log(typeof heroes);     // object
console.log(typeof myObj);      // object
console.log(typeof MyFunction); //function
