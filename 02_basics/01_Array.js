const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr);             // [ 0, 1, 2, 3, 4, 5 ]
console.log(myArr[2]);          // 2
console.log(myArr[4]);          // 4

// Array methods :- 
// push :-> to insert the element on top into array
// pop :-> to delete the top element of array

myArr.push(6)
myArr.push(7)

console.log(myArr);         /*     [
                                     0, 1, 2, 3,
                                     4, 5, 6, 7
                                   ]                */


myArr.pop()
myArr.pop()
console.log(myArr);                 // [ 0, 1, 2, 3, 4, 5 ]

// unshift :-> To insert the element on top without increasing size of array
// shift :-> To remove the top element of array and maintaining array size 

myArr.unshift(6);
myArr.unshift(5);
console.log(myArr);         /*     [
                                     5, 6, 0, 1,
                                     2, 3, 4, 5
                                   ]                */

myArr.shift()
myArr.shift()
console.log(myArr);                 // [ 0, 1, 2, 3, 4, 5 ]

// includes :-> to check the element is present or not
// indexOf :-> return the index of the passed element

console.log(myArr.includes(9));     // false
console.log(myArr.includes(5));     // true
console.log(myArr.indexOf(9));      // -1
console.log(myArr.indexOf(4));      // 4

// join :-> to change the data type from object to string

const newArr = myArr.join();

console.log(myArr);                 // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr);                // 0,1,2,3,4,5
console.log(typeof myArr);          // object
console.log(typeof newArr);         // string

// slice :-> return the particular ranges and exluding the ending index
/* splice :-> return the particular ranges and including the ending index 
              and also removing these all elements from original array                  */

console.log("A", myArr);            // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3);
console.log("B", myArr);            // B [ 0, 1, 2, 3, 4, 5 ]
console.log(myn1);                  // [ 1, 2 ]

const myn2 = myArr.splice(1,3);
console.log("C", myArr);            // C [ 0, 4, 5 ]
console.log(myn2);                  // [ 1, 2, 3 ]

