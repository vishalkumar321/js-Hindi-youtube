const user = {
    username : "vishal",
    loginCount : 8,
    signedIn : "True",

    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        console.log(this);
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    // console.log(this);
    
}

const UserOne = new User("Vishal", 10, true)
const UserTwo = new User("chaiAurCode", 12, false)
console.log(UserOne.constructor);
console.log(UserTwo);
console.log(UserTwo.greeting);
