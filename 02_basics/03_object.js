// singleton
// Object.create

// Object literals

const mysym = Symbol("key1")

const jsUser = {
    name : "Vishal",
    "full name" : "Vishal Kumar",
    [mysym] : "mykey1",
    age : 18,
    location : "Bihar",
    email : "vishal@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(jsUser.email);                  // vishal@gmail.com
console.log(jsUser["email"]);               // vishal@gmail.com
console.log(jsUser["full name"]);           // Vishal Kumar
console.log(jsUser[mysym]);                 // mykey1
console.log(typeof jsUser[mysym]);          // string

jsUser.email = "vishal@chatgpt.com"
// Object.freeze(jsUser);
jsUser.email = "vishal@microsoft.com"
console.log(jsUser);                    /*  {
                                                name: 'Vishal',
                                                'full name': 'Vishal Kumar',
                                                age: 18,
                                                location: 'Bihar',
                                                email: 'vishal@microsoft.com',
                                                isLoggedIn: false,
                                                lastLoginDays: [ 'Monday', 'Saturday' ],
                                                [Symbol(key1)]: 'mykey1'
                                            }                                                   */

jsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(jsUser.greeting());             // Hello JS User

jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(jsUser.greetingTwo());          // Hello JS User Vishal