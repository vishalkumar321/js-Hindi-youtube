// if statement
const isUserLoggedIn = true

if(2 == "2"){
    console.log("Executed");            // Executed
}

// <, >, <=, >=, ==, !=, ===, !==


const temperature = 41

if(temperature < 50){
    console.log("less than 50");            // less than 50
}
console.log("temperature is greater than 50");          // temperature is greater than 50


// if-else statement

if(temperature < 50){
    console.log("less than 50");                // less than 50
}
else{
    console.log("temperature is greater than 50");
}
console.log("executed");                    // executed


const score = 200

if(score > 100){
    const power = "fly"
    console.log(`Use Power ${power}`);          // Use Power fly
}
// console.log(`Use Power ${power}`);           // power is not defined


const balance = 800
if(balance > 500) console.log("test"), console.log("test2");        // test, test2


if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");                   // less than 900
}
else{
    console.log("more than 900");
}


const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");             // allow to buy course
}


const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");                  // User Logged In
}

