// ***************** for of -  Here Values come ************

/*
const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(`${num} is Value`)
}

const greeting = "Hello Coders"
for(const greet of greeting){
    console.log(`Each char of greeting ${greet}`)
}
    */

//Map - does not print repeated value only print unique value in givren order
/*
const map = new Map()
map.set('IN', "india")
map.set('FR', "france")
map.set('USE', "United state")
map.set('IN', "india")

// console.log(map);

for([key, value] of map){
    // console.log(key, ' : ', value);
}

//trying to print object from for-of
const obj = {
    'game1': 'NFS',
    'game2': 'BGMI'
}
 for(const object of obj){
    console.log(object) // Give error because object will not iterate in for-of
 }
*/

 // *********************** for-in -  Here key comes **************************************
 /*
const myOb = {
    name : 'ritansh',
    age: 23,
    gender: 'male'
}

for(const key in myOb){
    console.log(`${key} is ${myOb[key]}`)
}
    */
// Array 
/*
const myArr = ['hero', 'Villen', 'siderole']

for(const key in myArr){
    console.log(myArr[key])
}
    */


// Map will not iterate
/*
const map = new Map()
map.set('IN', "india")
map.set('FR', "france")
map.set('USE', "United state")
map.set('IN', "india")

for(const key in map){
    console.log(key)
}
    */



// ?******************************  For-each  **********************************
 
const coding =['js', 'ds', 'java', 'ruby','python'];

// coding.forEach( function(item){
//     console.log(item);
// })

// By Arrow function
/*
coding.forEach((item) => {
    console.log(item);
})
*/

// By calling
/*
function printme(item){
    console.log(item);
}

coding.forEach(printme);
*/


// coding.forEach( (item,  index, arr)=>{
//     console.log(item, index, arr)
// } )


const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'j'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'node',
        languageFileName: 'nd'
    },
    {
        languageName: 'ruby',
        languageFileName: 'ry'
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName)
})