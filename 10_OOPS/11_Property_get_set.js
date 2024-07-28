// Older method :- function based

// function User(email, password){
//     this._email = email;
//     this._password = password;


// Object.defineProperty(this, 'email', {
//     get: function(){
//         return this._email.toUpperCase();
//     },
//     set: function(value){
//         this._email = value
//     }
// })
// Object.defineProperty(this, 'password', {
//     get: function(){
//         return this._password.toUpperCase();
//     },
//     set: function(value){
//         this._password = value
//     }
// })
// }

// const test = new User('ritansh@gmail.com', "abc")
// console.log(test.email)

// object base :- Get and set

const User = {
    _email: 'Ritansh@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value
    }
}
const test = Object.create(User)
console.log(test.email)