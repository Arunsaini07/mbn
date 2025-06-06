const accountId = 144553
let accountEmail = "arun@kiet.com"
var accountPassword = " 12345678"
accountCity = "Jaipur" 


//accountID =2 thats not allowed
accountEmail = "gunjan@gmail.com"
accountPassword = " gunjan@123"
accountCity = "Delhi"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional schop

*/

console.table([accountEmail, accountId, accountPassword, accountCity])