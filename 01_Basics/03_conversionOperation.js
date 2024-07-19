// let score = "33" // String to number 
// let score = null // null outpt is zero in number
let score = undefined // output is NaN (Not a Number)

//we cane the typeof of any data type in two way:- Both shows the same output
// console.log(typeof score);
console.log(typeof(score));

// convert from one data type to another datatype
let valueInNumber = Number(score)  // chamge the number
console.log(typeof(valueInNumber)) // print the type of
console.log(valueInNumber);  // print the converted value