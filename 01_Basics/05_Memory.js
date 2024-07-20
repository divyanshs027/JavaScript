// Their are two type of memomry

// 1. Stack - used in primitive data type
// 2. Heap - used in non primitive data type

let myName = "ritansh"

let anotherName = myName
anotherName = "Divyansh"

console.log(myName) //primitive -Stack
console.log(anotherName) //non primitive -Heap

// non primitive chnage the value 
let userOne = {
    email: "divyansh@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Divyansh@google.com"

console.log(userOne);
console.log(userTwo);