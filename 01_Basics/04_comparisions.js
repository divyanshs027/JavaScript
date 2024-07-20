// ****Best comparision - because the comparision is between Number to Number *****
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//  **** Not good comparision - because the comparision is between two different dataType
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0) // false
console.log(null < 0) // false
console.log(null >= 0) // true
console.log(null == 0) // true


console.log(undefined == 0)  // Always shows the false 
console.log(undefined > 0)
console.log(undefined < 0)

// === Know As strickly check -check the dataType
console.log("3" === 0) // false
