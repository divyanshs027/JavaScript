// let score = "33" // String to number 
// let score = null // null outpt is zero in number
// let score = undefined // output is NaN (Not a Number)

//**we cane the typeof of any data type in two way:- Both shows the same output**
// console.log(typeof score);
// console.log(typeof(score));

// ********convert from one data type to another datatype**********
// let valueInNumber = Number(score)  // chamge the number
//console.log(typeof(valueInNumber)) // print the type of
// console.log(valueInNumber);  // print the converted value

// 33 => 33
// "33abs" => NaN
// true => false

// let isLoggedIn = 1 //true
// let isLoggedIn = 0 // false
// let isLoggedIn = "Ritansh"  // true

// let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);

// 1 => ture; 0=> false
// "" => false
// "Ritansh" => true

// **********convet from number to string**********
// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof(stringNumber));

// ********************************Opertion********************************************

// let value = 2
// let getvalue = -value;
// console.log(getvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

// let str1 = "Ritansh"
// let str2 = " Rajput"
// let str3 = str1 + str2
// console.log(str3);

// *********some conversion***********

// console.log("1" + 2); // => 12
// console.log( 1 + "2");  // => 12
// console.log("1" + 2 + 2); // => 122 This conversion depend upon the first varibale in perantetish
// ( If their is STRING then all converted into strings )
// console.log( 1 + 2 + "2");  // => 32 This conversion depend upon the first varibale in perantetish 

//********Some trick conversion*********
// console.log(+true)
// console.log(true+)

// let gameCount = 100
// ++gameCount;
// console.log(gameCount);
 
// ******prefix******
// let x =4
// const y = x++;
// console.log(x, y) // Here x = 5 but y = 4


// ******Postfix******
let x =4
const y = ++x;
console.log(x, y); // Here both x and y are converted into 5