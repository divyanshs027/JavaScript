// How to create function
function fName (){
    
}

function sayMyName() {
    console.log("r")
    console.log("i")
    console.log("t")
    console.log("a")
    console.log("n")
    console.log("s")
    console.log("h")
}
// console.log(sayMyName())

// ******** Add two number **********
// function addTwoNumber(number1, number2){   // () this bracket called here parameters;
//     console.log(number1 + number2) // not returing any value just printing
// }

// let final = addTwoNumber(2,4); // () this braket called here arguments;
// console.log("result: ", final)

// Using return

function addTwoNumber(number1, number2){
    // let add = number1 + number2
    // return add
    // direct method
    return number1 + number2
}

let final = addTwoNumber(3, 5)
// console.log("final:", final);

function loginUserMessage(username){
    if(username === undefined){
        return ('Please enter user name')
    }
    return `${username} is logged In`
}

// console.log(loginUserMessage())

// Use of rest operator
// function calculatePrice(...num1){  // ... in parameter is rest operator 
//          return num1;
// } 

// what if 
function calculatePrice(val, val2,  ...num1){  // ... in parameter is rest operator 
    return num1;
} 
// console.log(calculatePrice(200, 599, 433, 42222)); // output is [433, 42222]


//  const user = {  
//     name: 'ritansh',
//     age: 23
// }

function handleObject(anyobject){
    // console.log(`Hello my name is ${anyobject.name} n my age is ${anyobject.age}`)
}

// handleObject(user);

// But if we want to pass direct object that also possible
handleObject({
    name: 'ritansh',
    age: 23
})


// Passing Array
const myArr = [22, 33, 44, 55]

function retunArr(getArray){
    return getArray[2]
}
// console.log(retunArr(myArr));
// console.log(retunArr([22, 33, 43, 44 ]));