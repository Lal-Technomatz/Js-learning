// chalange is that to make trueLength method who can return the proper value of any string.
// let myName = 'Lal Singh          ';

// console.log(myName.truelength);


let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.lalsingh = function() {
    console.log(`Lal singh is present in all object`);
}

Array.prototype.lal = function(){
    console.log(`hey lal hello`);
}
// heroPower.lalsingh();
// myHeros.lalsingh();
// myHeros.lal();
// heroPower.lal();

// INHERITANCE

const User = {
    name: 'Lal singh',
    email: 'lal@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js-assignment',
    fullTime:true,
    __proto__: TeachingSupport  // here TASupport can access all the properties of TeachingSupport.
}
// it is called as prototypal inheritance.
Teacher.__proto__ = User    // by using this teacher can access all the property of user.

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)   // now Teacher can access all property of the User.

let anotherUser = 'ChaiAurCode         ';
String.prototype.trueLength = function() {
    console.log(`${this}`);    
    console.log(`True length is ${this.trim().length}`);    
}
// in these function/method calling "Jisne call kiya wahi 'this' hai" 
anotherUser.trueLength();   
'lal singh'.trueLength();
'bhadoria'.trueLength();