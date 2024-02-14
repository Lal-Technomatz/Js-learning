const promiseOne = new Promise(function(resolve, reject){
    // Do an async task.
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async Task is Complete");
        resolve();
    }, 1000)
});

promiseOne.then(function() {
    console.log('Promise is Consume');  
})

// Same thing in another way Promise two

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2 complete");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async Task 2 Resolve");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: 'chai', email: 'chaiaurcode@example.com'});     
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'Lal Singh', pasword: '123'})
        } else {
            reject('ERROR: Something Went Wrong.')
        }
    }, 1000);
})

promiseFour.then((user) => {       // not possible to hold this thing in the variable.
    console.log(user);
    return user.username;
}).then((username) => {           // in this chaining whatever is return by the first then will get by the another one.
    console.log(username);
}).catch(function(error) {
    console.log(error);  
}).finally(() => console.log('The promise either resolved or rejected'));


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'Javascript', password: '123'});
        } else {
            reject('ERROR: js went wrong');
        }
    }, 1000);
});
// Handling the .then() and .catch() with the different way.

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); // by this we got string data. so we need to parse or convert that data.
//         const data = await response.json();    // here we need await because it process will also take time.
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

// Now we will try all the things with out using async function.

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));