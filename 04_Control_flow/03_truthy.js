/* const useremail = []

if(useremail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}*/

// fasly value:- Only they are the falsy values and other are truthy values
// false, 0 , -0, bigInt 0n, "", null, undefined, NaN

// Some confusing truthy value
// "0", 'false', " ", [], {}, function(){}

// If you want to check empty array
const arr = [];
if(arr.length === 0){
    console.log('Array is empty');
}
else{
    console.log('Array have value');
}

// If you want to check empty object

const obj = {}

if(Object.keys(obj).length === 0){
    console.log('Object is empty');
}
else{
    console.log('Object have value');
}


// Some important thing
/*
 false == 0 
 true
 
 false == ''
 true
 
 0 == ''
 true
*/
