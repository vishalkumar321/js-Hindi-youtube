let myDate = new Date();
console.log(myDate);                    // 2025-06-11T16:48:01.668Z
console.log(myDate.toString());         // Wed Jun 11 2025 16:48:01 GMT+0000 
console.log(myDate.toDateString());     // Wed Jun 11 2025
console.log(myDate.toLocaleString());   // 6/11/2025, 4:55:23 PM
console.log(myDate.toISOString());      // 2025-06-11T16:48:01.668Z
console.log(myDate.toJSON());           // 2025-06-11T16:48:01.668Z
console.log(typeof myDate);             // object
 
let myCreatedDate = new Date(2025,5,11)
console.log(myCreatedDate);                 // 2025-06-11T00:00:00.000Z
console.log(myCreatedDate.toDateString());  // Wed Jun 11 2025

let myCreatedDate1 = new Date(2025, 5, 11, 5, 3)
console.log(myCreatedDate1.toLocaleString());   // 6/11/2025, 5:03:00 AM

let myCreatedDate2 = new Date("2025-06-11")
console.log(myCreatedDate2.toLocaleString());   // 6/11/2025, 12:00:00 AM

let myCreatedDate3 = new Date("06-11-2025")
console.log(myCreatedDate3.toLocaleString());   // 6/11/2025, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);                       // 1749660481696
console.log(myCreatedDate.getTime());           // 1749600000000
console.log(Math.floor(Date.now()/1000));       // 1749660481

let newDate = new Date();
console.log(newDate);                           // 2025-06-11T16:48:01.696Z
console.log(newDate.getMonth() + 1);            // 6
console.log(newDate.getDay());                  // 3
console.log(newDate.getHours());                // 16

newDate.toLocaleString('default', {
    weekday: "long",
})
