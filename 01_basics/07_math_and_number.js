const score = 400
console.log(score);             // 400

const balance = new Number(100.559)
console.log(balance);                       // [Number: 100.559]

console.log(balance.toString().length);     // 7
console.log(balance.toFixed(2));            // 100.56

const otherNumber = 23.7892
console.log(otherNumber.toPrecision(4));    // 23.79

const hundreds = 10000000
console.log(hundreds.toLocaleString());         // 10,000,000
console.log(hundreds.toLocaleString('en-IN'));  // 1,00,00,000

// *************************************************** MATHS **********************************************************

    // Math.random() gives the random values between 0 and 1

console.log(Math);                              // Object [Math] {}
console.log(Math.abs(-5));                      // 5
console.log(Math.round(5.6));                   // 6
console.log(Math.round(5.4));                   // 5
console.log(Math.ceil(6.1));                    // 7
console.log(Math.floor(2.9));                   // 2
console.log(Math.min(5 , 7 , 8 , 1));           // 1
console.log(Math.max(5 , 7 , 8 , 1));           // 8

console.log(Math.random());                     // 0.16856204009860276
console.log((Math.random()*10) + 1);            // 9.998933010536243
console.log(Math.floor(Math.random()*10) + 1);  // 8

const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);     // 10
