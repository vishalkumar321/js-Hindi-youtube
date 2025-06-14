function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");   
}

sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);         
}

const result = addTwoNumbers(3, 5)
console.log("result :", result);            // result : undefined

function addTwoNumbers1(number1,number2){
    let result = number1 + number2
    return result; 
}

const result1 = addTwoNumbers1(3, 5)
console.log("result :", result1);           // result : 8 

function userLoginMessage(username = "sam"){
    // console.log(`${username} just logged in`);
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(userLoginMessage("vishal"));    // vishal just logged in
console.log(userLoginMessage());            // sam just logged in
  

function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(4))          // 4

function calculateCartPrice1(...num1){
    return num1;
}

console.log(calculateCartPrice1(100,200,300))       // [ 100, 200, 300 ]

function calculateCartPrice2(val1, val2,...num1){
    return num1;
}

console.log(calculateCartPrice2(100,200,300,400))       // [ 300, 400 ]

const user = {
    username : "Vishal",
    price : 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)              // username is Vishal and price is 200

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));             // 200
console.log(returnSecondValue([200,400,500,1000]));     // 400
