const user = {
    userName: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to website.`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let userName = "hitesh"
//     console.log(this.userName);
// }  // this key word is only working with the object not with the function

// chai();

// const chai = function (){
//     let userName = "hitesh"
//     console.log(this.userName);
// }

// creating the function Key Word.

const chai = () => {
    let userName = "hitesh"
    console.log(this.userName);
}

// chai();

() => {}  // this is a basic arrow function. we can also hold this thing in a variable like this.

// const addTwoNumber = (num1, num2) => {
//     return num1 + num2
// }

// Other way to using arrow fuhnction with implicit return, one line statement
// const addTwoNumber = (num1, num2) => num1 + num2
// const addTwoNumber = (num1, num2) => ( num1 + num2 )// here we returning numbers
// const addTwoNumber = (num1, num2) => {userName: "hitesh"}  // this type object returning is not working. it also return in the paranthieses "()"
const addTwoNumber = (num1, num2) => ({userName: "hitesh"}) // it is working.

// console.log(addTwoNumber(3, 4));


const myArray = [2, 3, 4, 5, 6]

myArray.forEach(function() {})    // correct syntex
myArray.forEach(()  => {})        // this is also correct.