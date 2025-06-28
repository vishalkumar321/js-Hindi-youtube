class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is: ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher("chai", "chai@teacher.com", "123")
console.log(chai);
chai.addCourse();

const mashalaChai = new teacher("mashalaChai")
mashalaChai.logMe()

console.log(chai instanceof teacher);
console.log(chai instanceof user);
