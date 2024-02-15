function multplyby5(num){
    return num * 5
}

multplyby5.power = 2

console.log(multplyby5(5));
console.log(multplyby5.power);
console.log(multplyby5.prototype);

function createUser(username, price) {
    this.username = username
    this.price = price    
}
// Here you can check that it is possible to assign a prototype by yourself.
createUser.prototype.increment = function(){
    this.price++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.price}`);
}

// const chai = createUser('chai', 25);   // without new key it is not working because with new keyword you are informing that you inject some property in the prototype.
// const tea = createUser('tea', 250)

const chai = new createUser('chai', 25);
const tea = new createUser('tea', 250)

chai.printMe();
tea.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

Aprototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specific arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assume this, the newly created object, to be the intended return value.

The newly object is returned: After the constructor function has been called, if it doesn't return a non-primitive value(object, array, function, etc..), the newly created object is returned.

*/