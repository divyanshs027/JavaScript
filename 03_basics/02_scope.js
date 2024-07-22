// Scope

// These are globel scope 
var a = 10; 
let b = 20;
const c = 30;


 if (true){ 
    var a = 10; // it will run outside the block
    let b = 20; // it will not run outside the block
    const c = 30; // it will not run out side the block
}

// console.log(a);
// console.log(b);
// console.log(c);

// note :- globel scope is different in console and node js 


// *****  Nested scope  *********   

function one(){
    const username = "ritansh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two();
}

// one();


// if(true){
//     const name = "ritansh"
//     if(user == "ritansh"){
//         const website = "youtube"
//         console.log(user + website)
//     }
    // console.log(website);  // show error
// }
// console.log(user); // show error

// ********  intersting *********** concept **********

console.log(one(5));
function one(num){
   return num+1;
}

console.log(two(3))
const two = function(num){
    return num+2;
}