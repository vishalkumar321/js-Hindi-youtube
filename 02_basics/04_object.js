// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = "false"

console.log(tinderUser);            // { id: '123abc', name: 'sammy', isLoggedIn: 'false' }

const regularUser = {
    email :  "vishal@gmail.com",
    fullname : {
        userFullName : {
            firstName : "vishal",
            lastName : "kumar"
        }
    }
}

console.log(regularUser.fullname);                          // { userFullName: { firstName: 'vishal', lastName: 'kumar' } }
console.log(regularUser.fullname.userFullName);             // { firstName: 'vishal', lastName: 'kumar' }
console.log(regularUser.fullname.userFullName.firstName);   // vishal

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

const obj3 = { obj1, obj2}
const obj4 = Object.assign( {}, obj1, obj2)
const obj5 = {...obj1, ...obj2}

console.log(obj3);                  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj4);                  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5);                  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id : 1,
        email : "v@gmail.com"
    },
    {
        id : 2,
        email : "g@gmail.com"
    },
    {
        id : 3,
        email : "s@gmail.com"
    },
    {
        id : 4,
        email : "b@gmail.com"
    },
]

console.log(users[1].email);        // g@gmail.com
console.log(users[0].email);        // v@gmail.com

console.log(tinderUser);                    // { id: '123abc', name: 'sammy', isLoggedIn: 'false' }
console.log(Object.keys(tinderUser));       // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));     // [ '123abc', 'sammy', 'false' ]
console.log(Object.entries(tinderUser));    // [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', 'false' ] ]

console.log(tinderUser.hasOwnProperty("isLogged"));         // false
console.log(tinderUser.hasOwnProperty("isLoggedIn"));       // true


// de-structure

const course =  {
    courseName : "JS in Hindi",
    price : "free",
    courseInstructor : "Vishal"
}

const {courseInstructor} = course
console.log(courseInstructor);          // Vishal

const{courseInstructor : Instructor} = course
console.log(Instructor);                // Vishal

// JSON

// {
//     "name" : "Hitesh"
//     "course Name" : "JS in Hindi"
//     "price" : "free"
// }

[
    {},
    {},
    {}
]