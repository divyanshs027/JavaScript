// singleton
// Object.create


//** How to declare SYMBOL in in OBJECTS */
const sym = Symbol("key1")
// console.log(typeof sym)


// ******* Object literals *********
const JsUsers = {
    name: "Ritansh",
    [sym]: "mykey1",  // Correct way to define the symbol in object
    "Full Name": "Ritansh Rajput", // this key we can't access without [] this bracket
    age: 23,
    Location: "Gorakhpur",
    email: "ritansh@gmail.com",
    isLoggedIn: false
}

// console.log(JsUsers.email);
// console.log(JsUsers["email"])
// console.log(JsUsers["Full Name"])
// console.log(JsUsers[sym])
// console.log(typeof JsUsers.sym)
// console.log(JsUsers)

// **********coverwrite some key value 
JsUsers.email = "ritansh@Google.com"

// ******it will freeze the key value means it will not chnge from here
Object.freeze(JsUsers.email)  
JsUsers.email = "ritansh@Github.com"
// console.log(JsUsers);


JsUsers.greeting = function(){
    // console.log("Hello Js User")
}
// console.log(JsUsers.greeting());

JsUsers.greetingTwo = function(){
    // console.log(`hello Everyone this ${this.name}`);
}
// console.log(JsUsers.greetingTwo());


// ********************* singleton *****************

// const tinderUser = new Object()
// or
 const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "sam"
 tinderUser.isLoggerIn = false

//  console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullName : {
        username: {
            firstName: "FName",
            lastName: "LName"
        }
    }
}
// console.log(regularUser.fullName.username)

// add multiple object in one 
const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}
const obj3 = { 5:"a", 6:"b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
//most used spread operator
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const user = [
    {
        name: "hh",
        email: "h@gmail.com"
    },
    {
        name: "hh",
        email: "h@gmail.com"
    },
    {
        name: "hh",
        email: "h@gmail.com"
    },
    {
        name: "hh",
        email: "h@gmail.com"
    }, 
]
// console.log(user.email[1];)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// ******* if we want to check the value is present ot not when the data is came from database\
// console.log(tinderUser.hasOwnProperty('isLoggerIn'));


// ************ de-structuring ****************
const course = {
    cousrename: "js in hindi",
    price: "999",
    cousreteacher: "hitesh",
}

const {cousreteacher: teacher} = course  // de-structuring
console.log(teacher);