const user = {
    username : "vishal",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage()           /*      vishal, Welcome to website
                                        {
                                         username: 'vishal',
                                         price: 999,
                                         welcomeMessage: [Function: welcomeMessage]
                                        }                                                   */
user.username = "sam"
user.welcomeMessage()           /*      sam, Welcome to website
                                        {
                                         username: 'sam',
                                         price: 999,
                                         welcomeMessage: [Function: welcomeMessage]
                                        }                                                   */

console.log(this);              // {}

function chai(){
    let username = "vishal"
    console.log(this);                  // a lot of information
    console.log(this.username);         // undefined
    
}
chai()

const chai1 = () => {
    let username = "vishal"
    console.log(this);                  // {}
    console.log(this.username);         // undefined
    
}
chai1()


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 5));          // 8


const addTwo1 = (num1, num2) =>   num1 + num2
const addTwo2 = (num1, num2) =>   (num1 + num2)
const addTwo3 = (num1, num2) =>   ({ username : "vishal"})

console.log(addTwo1(8, 5));         // 13
console.log(addTwo2(4, 5));         // 9
console.log(addTwo3(4, 5));         // { username: 'vishal' }