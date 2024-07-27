// Why we can't chnage value of PI
// answer - because some property of PI is false it means we can not chnage the real value
// property are - writable: false,
//   enumerable: false,
//   configurable: false
 

// To check use these syntax
const check = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(check);

const chai = {
    name: 'chai',
    price: 250,
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if( typeof value !== 'function'){
        console.log(`${key}, ${value}`)
    }
}