class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is: ${this.username}`);
    }
    static createId(){
        return `123`
        
    }
}

const vishal =new user("vishal")
// console.log(vishal.createId());       // Not accessible due to static keyword


class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "i@phone.com")
iphone.logMe();
// iphone.createId();              // Not accessible due to static keyword