const accountId = 144553
let accountEmail = "lal@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // this is also possible in the js but it is not a good practice,but remember this.
let accountState;

// accountId = 244553 // Not Allowed

accountEmail = "singh@gmal.com"
accountPassword = "54321"
accountCity = "Gwalior"

console.log(accountId);
/*
prefer not to use 'var' keywords 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])