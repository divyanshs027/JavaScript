class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`User Name: ${this.username}`)
    }

    static createID(){  // it will not give access to every one
        return `123`
    }
}

const ritansh = new User("Ritansh")
// console.log(ritansh.createID())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const name = new Teacher("Divyansh", "Divyansh@gmail.com")
name.logMe()
console.log(name.createID)