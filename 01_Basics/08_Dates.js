// Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

//** Declear date by own **/
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2024-01-23")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // To convert  milisecond into second

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);  // month start from zero

//
let time = newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(time);
