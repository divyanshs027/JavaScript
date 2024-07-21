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

console.log(loginUserMessage())