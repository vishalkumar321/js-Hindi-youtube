let myName = "Vishal"
console.log(myName.length);             // 6

let myName1 = "Vishal          "
console.log(myName1.length);            // 16
console.log(myName1.trim().length);     // 6


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidey power is ${this.spiderman}`); 
    }
}

Object.prototype.vishal = function(){
    console.log("vishal is present in all objects");
    
}

Array.prototype.heyVishal = function(){
    console.log(`Vishal says hello`);
    
}

myHeroes.vishal()
myHeroes.heyVishal()
// heroPower.heyVishal()

// Inheritance

const user = {
    name : "User",
    email : "chai@google.com"
}

const teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailabe : false
}

const TAsupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUserName = "chaiAurCode           "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);  
}

anotherUserName.trueLength();
"hitesh".trueLength();
"ice  ".trueLength();
