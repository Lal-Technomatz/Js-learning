// if
const isUserLoggedIn = true
const temprature = 41

// if(temprature === 41){
//     // it run when condition is true.
//     console.log("temprature < 50");
// } else {
//     console.log("temprature > 50");
// }
// console.log('executed');
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


const balance = 1000;

// if(balance > 500) console.log("test"), console.log("test2");   // multiple statement with the comma saprationis not a good practice. And the scope fo this till the semicollon.

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900){
//     console.log("less than 900");

// } else{
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ){
    console.log("user Logged in");
}