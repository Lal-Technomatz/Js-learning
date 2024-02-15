function setUsernName(username) {
    // complex DB calculation.
    this.username = username
}

function createUser(username, email, password) {
    // setUsernName(username);      // this is the function where the 'this' keyword is not creating problem, it working fine also call the function but unable to hold that value.
    // setUsernName.call(username);   // for solving this problem we use the .call method this is not solve that problem properly so to solve the ploblem pass our 'this' as params so our this can hold that valus(username) so after the flushing out the function the value reference is available.
    setUsernName.call(this, username);   // now you got the proper answer.
    this.email = email;
    this.password = password;
}

const chai = new createUser('chai', 'chai@facebook.com','123');
console.log(chai);