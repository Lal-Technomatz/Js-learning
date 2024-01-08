// how to store and access your data on this basis datatypes officially devide into two part.

// Primitive (these are used as call by Value means you won,t get the memory reference you will directly get the copy of that values.)

// 7 types : String, Number, Boolean, Null, Undefined, Symbol(for making value unique), BigInt.

const score = 100                  // number
const scoreValue = 100.3           // number

const isLoggedIn = false           // boolean
const isOutsideTemp = null         // object
let userEmail;                     // undefined

const id = Symbol('123');          // symbol
const anotherId = Symbol('123');   // symbol

// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

const bigNumber = 99999999999999999n // bigint
// console.log(typeof bigNumber);

// Non Primitive/Reference type(here you will get the Memory reference of that data, this is also call as call by Reference)

// 3 types : Array, Objects, Functions

const heros = ["Shaktimaan", "Nagraj", "Doga"]; // object
let myObj = {
    name: "Lal singh",
    age: 30,
}                                               // object

const myFunction = function() {
    console.log("Hello World");
}                                               // function

console.log(typeof myFunction);