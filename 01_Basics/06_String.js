const name = "ritansh"
const repocount = 50

//**normal way**
// console.log(name + repocount + "value")

//**Sting interpolation**
// console.log(`Hello everyone my name is ${name} rajput. I'm from Gorakhpur.`)


//**we can access any value because of KEYVALUE PAIR
const gameName = new String('Ritansh-rajput-singh')

// console.log(gameName[0])
// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 5)
console.log(anotherString);

const newStringOne = "   Ritansh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ritansh.com/ritansh%20rajput"
console.log(url.replace('%20', '-'));

// to find that particular string or number is present in it or not.
console.log(url.includes('sudar'))

//split 
console.log(gameName.split('-'));