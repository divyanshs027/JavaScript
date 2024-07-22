// Immediately Invoke Function Expression (IIFE) - when we have facing problem from globel scope pollution then to remove declare variable pollution we use IIFE
// Syntax =>  (function() {})();

(function chai(){
    // Named iife - bcz there is function name given
    console.log(`Db connected`);
}) (); // semi colon is important 

( ()=> {
    // simple iife
    console.log(`Second one`)
}) ();

( (name) =>{
    console.log(name)
}) ('ritansh');