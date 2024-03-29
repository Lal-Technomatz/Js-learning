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

function loginUserMessage(username = "lal"){     // default value of username
    if(!username){  // if(username === undefined){
        console.log("Please Enter a User Name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage());

// function calculateCartPrice(...num1){      // here '...' is called as rest operator 
function calculateCartPrice(val1, val2, ...num1){      // here '...' is called as rest operator 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 5000]));