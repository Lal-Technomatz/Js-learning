// singleton => when we create object through constructor it will become singleton.
// object.create

// object leterals

const mySym = Symbol("key1")


const jsUser = {
    name: "lal singh",
    "full Nme": "Lal singh Bhadoria",
    // mySym: "mykey1", // this is work as string
    [mySym]: "mykey1",
    age: 30,
    location: "Jaipur",
    email: "lalsingh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "thursday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Nme"]);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);

jsUser.email = "lalsingh@technomatz.com"        // for update
// Object.freeze(jsUser)
jsUser.email = "lalsingh@afterfreezechange.com"
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello Js User");
}

jsUser.greetingstwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingstwo());
