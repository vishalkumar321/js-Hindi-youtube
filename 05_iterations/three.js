// for of loop

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(val);   
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "united state of america")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);

for (const key of map) {
    console.log(key); 
}

for (const [key] of map) {
    console.log(key); 
}

for (const [key, value] of map) {
    console.log(key, ':-',value); 
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-',value);               //  myObject is not iterable
}