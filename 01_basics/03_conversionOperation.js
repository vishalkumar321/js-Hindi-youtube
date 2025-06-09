let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);    // NaN => not a number

// "33" => 33
//  "33abc" => NaN
// true => 1 / false => 0
// undefined => NaN

let isLoggedIn = "Vishal";

let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);

//  1 => true
//  0 => false
//  "" => false
//  "Vishal" => true

let someNumber = 33

let stringsomeNumber = String(someNumber);

console.log(typeof stringsomeNumber);
console.log(stringsomeNumber);


//  ******************************************** OPERATIONS *************************************************

let value = 3;
let negValue = -value;

console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(4%2);


let str1 = "Hello"
let str2 = " Vishal"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
