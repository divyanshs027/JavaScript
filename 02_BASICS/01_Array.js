//Array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHero = ["ironman", 'spidy']
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2]);

// array method

// myArr.push(6)  //add value in last
// console.log(myArr);

// myArr.pop()  // remove last array
// console.log(myArr);

// myArr.unshift(9)  // add value in frst
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9))  // to check value is present in the array or not
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()  // to convert array into string
// console.log(myArr); 
// console.log(newArr);
// console.log( typeof myArr);
// console.log(typeof newArr);

 
// ****** slice and splice ***********

//  *** slice - will not manipulate the original array *******
// console.log("A", myArr);
// const myn1 = myArr.slice(1,3)  
// console.log(myn1);


// **** splice - will manipulutae the original array 
// myArr = [0, 1, 2, 3, 4, 5]
// we apply slice on [1,3]
// OUTPUT => 1, 2, 3 and the original array will chnage it will be [0, 4, 5] **********
// console.log("B", myArr);
// const myn2 = myArr.splice(1,3);
// console.log(myn2);


// ******************** Methods **********************

const marval_hero = ["Irnoman", "Spidy", "Thor"]
const dc_hero = ["Batman", "Superman"]

// marval_hero.push(dc_hero)  // **it will push as array  [ 'Irnoman', 'Spidy', 'Thor', [ 'Batman', 'Superman' ] ]
// console.log(marval_hero); 

// let all_hero = marval_hero.concat(dc_hero) // **add in sigle array :- [ 'Irnoman', 'Spidy', 'Thor', 'Batman', 'Superman' ]
// console.log(all_hero);

// ********** some simple method - spred Array ***********
//  const all_hero = [ ...marval_hero, ...dc_hero]  // it is known as spreading method (every element is individual now)
//  console.log(all_hero);

// **********8 Flat method - when array in array
// const messy_array = [1, 2, [3, 4, 5], 6, [7, 8,[9,]]]
// let real_array = messy_array.flat(Infinity);
// console.log(real_array)  // output:- [1, 2, 3, 4, 5, 6, 7, 8, 9]



// covert in array from any data type

console.log(Array.isArray("Ritansh")) // to check its is array or not
console.log(Array.from("Ritansh")) // to make it array
console.log(Array.from({
    name: "Ritansh"
})) // it will give empty array because it define that using key or value we have to make array



let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements
