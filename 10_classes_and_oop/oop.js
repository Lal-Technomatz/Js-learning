// Object Literals
const user = {
    // properties
    username: 'Lal Singh',
    loginCount: 8,
    signedIn: true,
//methods and functions
    getUserDetails: function(){
        console.log("Got User Details From Database");
        // console.log(`username: ${this.username}`);     // this always denote the current object.
        // console.log(this);   // here you got the whole object.
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);        // here it is using the global object so it return {} empty object because global object is not available here.


// Constructor Function

// const promiseOne = new Promise()   // here we are using new kayword is called as constructor function is allow you to create multiple instance form a single object Literals.
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// If we are working without new keyword it will affect the original value of an object. 
// const userOne = User('Lal Singh', 12, true);
// const userTwo = User('ChaiAurCode', 11, false);
// when we go with the new kayword it will create a saperate instance for particular variable without affecting the original value of an object.
const userOne = new User('Lal Singh', 12, true);
const userTwo = new User('ChaiAurCode', 11, false);
console.log(userOne.constructor);
// console.log(userTwo);