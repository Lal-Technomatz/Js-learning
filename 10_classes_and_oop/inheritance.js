class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)         // A long process which work on here is reduced by 'super' keyword.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@gmail.com', '123')

chai.logMe();

const masalaChai  = new User('masalachai');

masalaChai.logMe();

console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);