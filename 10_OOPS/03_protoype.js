// let myName = "ritansh    "
// let channel = "life     "

// console.log(myName.trueLength);

let myHeros = ["thoer", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "Sling",

    getSpiderPower : function(){
        console.log(`sider power is ${this.spiderman}`)
    }
}

// Make own prototype in object
Object.prototype.ritansh = function(){
    console.log(`this is ritansh prototype`)
}

// heroPower.ritansh();
// myHeros.ritansh();


//Make own prototype in Array
Array.prototype.heyRitansh = function(){
    console.log(`Ritansh says Hello`)
}

// myHeros.heyRitansh();
// heroPower.heyRitansh(); // Show error because protoype only define for array


const user = {
    name: 'ritansh',
    email: 'ritansh@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeacherSuport = {
    isAvailable: false
}

const TASupport = {
    makeAssigment: 'JS assignment',
    fullTime: true,
    __proto__: TeacherSuport // inheriting the value of teachersupport
}

Teacher.__proto__ = user // direct 

// Mordern/New
Object.setPrototypeOf(TeacherSuport, Teacher) 

let username = "Ritansh   ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

username.trueLength();
"divyansh".trueLength();