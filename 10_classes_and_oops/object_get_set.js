const user = {
    _email : "h@hc.com",
    _password : "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = this.email
    }

}

const tea = Object.create(user)
console.log(tea.email);
