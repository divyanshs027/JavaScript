class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this.newPassword.toUpperCase();
    }

    set password(value){
        this.newPassword = value
    }
}
const ritansh = new User("Ritansh@gmail.com", "abc")
console.log(ritansh.password);
console.log(ritansh.email);