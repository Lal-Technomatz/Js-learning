class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName: ${this.username}`);
    }

    static createId(){      // if we use static keyword it prevent the access of that particular method or attributes.
        return `123`
    }
}

const lal  = new User("Lal singh");
// console.log(lal.createId());
    
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone', 'i@phone.com')

iphone.logMe();
console.log(iphone.createId());