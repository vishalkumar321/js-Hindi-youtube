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
console.log(typeof MyFunction); // function
console.log(typeof anotherId);  // symbol

// ******************************************** Memory **********************************************************

// Stack(Primitive DataType) || Heap(Non-Primitive DataType)

    // Stack works on pass by value that's why It changes only one value which changes

let myYoutubeName = "hiteshchaudharydotcom"     // string

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);     // hiteshchaudharydotcom
console.log(anotherName);       // chaiaurcode

    // Heap works on pass by reference that's why It changes both values 

let userOne = {
    name : "Vishal",
    email : "user@google.com",      // object
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "vishal@gmail.com"

console.log(userOne.email);     // vishal@gmail.com
console.log(userTwo.email);     // vishal@gmail.com


