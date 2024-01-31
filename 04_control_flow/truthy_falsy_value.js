const userEmail = []//"lal@singh.ai"

if (userEmail){
    console.log("Got User Email");
} else {
    console.log("Don't Have User Email");
}

// Falsy Value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Value
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length == 0){
//     console.log("Array is empty");
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
        console.log("Object is Empty");
}


// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10  // ====> 5
// val1 = null ?? 10  // ====> here if variable and the function not returing the value then it assign null to the variable.
// val1 = undefined ?? 15 // =====> return undefined if variable, function, method not returning any value.
val1 = null ?? 10 ?? 12  // ====> it returning the first value 



console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less Then 80") : console.log("More Then 80");
