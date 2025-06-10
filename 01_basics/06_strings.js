const name = "Vishal"
const repoCount = 50

console.log(name + repoCount + " value");       // Vishal50 value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);      // Hello my name is Vishal and my repo count is 50

const gameName = new String("Vishal-vk-com")

console.log(gameName[0]);               // V
console.log(gameName.__proto__);        // {}

console.log(gameName.length);           // 13
console.log(gameName.toUpperCase());    // VISHAL-VK-COM
console.log(gameName.charAt(2));        // s
console.log(gameName.indexOf('s'));     // 2

const newString = gameName.substring(0,4);
console.log(newString);                 // Vish

const anotherString = gameName.slice(0,4);
console.log(anotherString);             // Vish

const newStringOne = "    Vishal      "
console.log(newStringOne);              //     Vishal
console.log(newStringOne.trim());       // Vishal


const url = "https://vishal.com/vishal%20kumar"
console.log(url.replace('%20','-'));       // https://vishal.com/vishal-kumar

console.log(url.includes("sundar"));        // false
console.log(url.includes("vishal"));        // true

console.log(gameName.split('-'));           // [ 'Vishal', 'vk', 'com' ]
