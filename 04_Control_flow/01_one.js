// Important Symbol
 /* 
   < : less then
    > : greater then
    <= : less then equal to
    >= : greater then equal to
    = : assign operator
    == : equal to
    == : strickly equal to check dataType of both value
    != : not equal 
  */


// If
// Syntax :
//  if(true){
//       then run                
//  }

/* const temp = 41;
if(temp < 44){
    console.log('TEMP IS HIGH')
}
console.log('it will run, not depend on if condition') */

// if-else condtion
/* syntax:
   if(true){
    then this will run
    }
    else{
    IF if condition is false then this will run
    }
*/

/* temp = 37;
if(temp >= 40){
    console.log('Temp us low')
}
else{
    console.log('temp is high')
} */


// if else-if

/*
const salary = 1000

if(salary < 500){
    console.log('Salary is less then 500');
}
else if(salary < 750){
    console.log('Salary is less then 750');
}
else if(salary < 900){
    console.log('Salary is less then 900');
}
else{
    console.log('Salary is less then 1200');
}*/

// In AND(&&) conditon must be that both condition is true.
const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log('Allow to buy')
}


// In OR(||) conditon any one condition be true.
const loggedInByGoogle = false;
const loggedInByGmail = false;

if(loggedInByGmail || loggedInByGoogle){
    console.log('Logged In User')
}
else{
    console.log('Sorry you can\'t logged IN')
}

// nullish coalescing operator (??): work on - null/undefined
// It help to avoid null value

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 12;
// val1 =  undefined ?? null; //  In this second one alwys come in answer
// val1 = 12 ?? undefined;

// console.log(val1);

// Terniary operator
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('less than 80'): console.log('greater than 80')