const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["spiderman", "flash", "batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);             // [ 'thor', 'ironman', 'spiderman', [ 'spiderman', 'flash', 'batman' ] ]
console.log(marvel_heroes[3][1]);       // flash
console.log(marvel_heroes[3][2]);       // batman

const marvel_heroes1 = ["thor", "ironman", "spiderman"]
const dc_heroes1 = ["spiderman", "flash", "batman"]

const allHeroes = marvel_heroes1.concat(dc_heroes1)
console.log(allHeroes);                 // [ 'thor', 'ironman', 'spiderman', 'spiderman', 'flash', 'batman' ]

const marvel_heroes2 = ["thor", "ironman", "spiderman"]
const dc_heroes2 = ["spiderman", "flash", "batman"]

const allNewHeroes = [...marvel_heroes2, ...dc_heroes2]
console.log(allNewHeroes);              // [ 'thor', 'ironman', 'spiderman', 'spiderman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6],[6, 7,[8, 9]]]
const real_another_array = another_array.flat(Infinity)
const real_another_array1 = another_array.flat(10)

console.log(real_another_array);        /*      [
                                                 1, 2, 3, 4, 5,
                                                 6, 6, 7, 8, 9
                                                ]                       */

console.log(real_another_array1);       // same output because index is passed fully


console.log(Array.isArray("Vishal"));       // false
console.log(Array.from("Vishal"));          // [ 'V', 'i', 's', 'h', 'a', 'l' ]

console.log(Array.from({name: "vishal"}));  // []

const score = 100
const score1 = 200
const score2 = 300

console.log(Array.of(score, score1, score2));   // [ 100, 200, 300 ]

 