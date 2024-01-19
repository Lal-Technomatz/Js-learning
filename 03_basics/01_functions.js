function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()      // this is function calling.
// sayMyName        // this is function reference.

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(8, 9);
// console.log(result);              // returning undefined

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // console.log("hitesh");
    // return result
    // console.log("hitesh"); // not executable code after return in function
    return number1 + number2
}

const result = addTwoNumbers(3, 5);
// console.log(result);

function loginUserMessage(username){
    if(!username){  // if(username === undefined){
        console.log("Please Enter a User Name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hitesh"));
console.log(loginUserMessage());

