const User = {
    _email: 'lal@la.com',
    _password: '123456',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
// In the Object we can also go with the Object.create instead of new.
const tea = Object.create(User);
console.log(tea.email);