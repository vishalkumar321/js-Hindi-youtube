const accountId = 14453
let accountEmail = "vishal@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

accountEmail = "vk@gmail.com"
accountPassword = "457865"
accountCity = "Bengluru"

// accountId = 4518   // we can not change the value which intialize with const keyword
console.log(accountId);

/*
    prefer not to use var
    because of issue in the block scope and functional scope
*/
console.table([accountEmail, accountPassword, accountCity, accountState])