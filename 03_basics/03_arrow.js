const user =  {
    username: 'ritansh', // in this contec is username
    price: 999,

    welcomeMsg: function(){
    //    console.log(`${this.username}, Welcome to website`);
    //    console.log(this);
    }
}
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this); // outpu=> {}

// ** this keyword work as current contex(simple vlaue) 
// In cosole panal this keyword shows that it is a window
// but in node it shows as empty prenetities ***

// let test = function (){
function test() {
    let username = 'ritansh'
    console.log(this.username) // this keyword will not work in function they work in object 

}
// test();

let test1 = () =>{
    let username = 'ritansh'
    console.log(this.username)
}
// test1();


// Arrow function

// Explicit return - in this return function is must
const addTwo = (num1, num2) => {
      return num1 + num2
}


//  Implicit return - in this return function not requird
const addTwo = (num1, num2) => (num1 + num2) // ** It will also work if they have only one line of code

// If we want to return object then we must write in parenthese
const returnObject = ()=> ({
    name: 'ritansh'
})
console.log(returnObject())