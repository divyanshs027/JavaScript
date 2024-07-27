class User{
    constructor(username){
        this.username = username
    }

    LogMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // super keyword inherit the property of another class
        this.email = email
        this.password = password
    }

    addCousre(){
        console.log(`A new Cousere is added by ${this.username}`)
    }
}

const chai = new Teacher("Ritansh", "example.gmail.com", "123")
chai.addCousre();
chai.LogMe();

const name = new User("Ritansh");
name.LogMe();

console.log(chai instanceof Teacher); 