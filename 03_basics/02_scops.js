// var c = 300
let a = 300

if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a );
}

{}  // it is called as scope at in almost language.

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++ Interesting +++++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num + 1
}


// console.log(addTwo(5)); // while you use function as expression then calling before declaration is not possible.

const addTwo = function(num){
    return num + 2
}          // this function also called as expression

console.log(addTwo(5));
