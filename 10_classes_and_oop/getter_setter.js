class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    // If you  want to prevent the access or you want to provide the modifies properties to the user then you can go with getter or setter methods.
    // If you write getter method, then it is compulsory to write the setter method also.
    // The properties name sholud be different from the constructor's property otherwise you will get 'Maximum call stack size exceeded' error.
    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}123456`
    }

    set password(value){
        this._password = value
    }
}

const lal = new User('lal@gmail.com', '123456')
console.log(lal.email);