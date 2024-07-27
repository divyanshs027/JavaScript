function setUSetName(username) {
    // complex DB calls 
    this.username = username
}

function createUser(username, email, password){
    setUSetName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmail", "123")
console.log(chai);