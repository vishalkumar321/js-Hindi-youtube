// ES6

class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    console.log(`${this.password}abcd`);
}
User.prototype.changeUserName = function(){
    console.log(`${this.username.toUpperCase()}`);
}

const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
