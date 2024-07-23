// Note :- For each will not return any value
// so we use filter

// const coding = ['js', 'ds', 'java', 'ruby','python'];

// coding.forEach( (item) => {
//     // console.log(item)
//     return item;
// })

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

// let newNums = myNums.filter( (num) => {
//     return num < 4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)


const book = [
    {
        bookName: 'Book One', genre: 'Science', publish: 1991, edition:2004
    },
    {
        bookName: 'Book Two', genre: 'Maths', publish: 1997, edition:2004
    },
    {
        bookName: 'Book Three', genre: 'Biology', publish: 1961, edition:2003
    },
    {
        bookName: 'Book Four', genre: 'Data structure', publish: 1996, edition:2024
    },
    {
        bookName: 'Book Five', genre: 'Maths', publish: 2001, edition:2021
    },
    {
        bookName: 'Book Six', genre: 'DBMS', publish: 1999, edition:2008
    },
]

// let fetch = book.filter( (item) => { 
//     return item.bookName;
// // })
// let fetch = book.filter( (item) => {
//     return item.publish >= 2000
// })
// let fetch = book.filter( (bk)=>{
//     return bk.genre === 'Maths'
// })

// fetch = book.filter( (bk)=> {
//     return bk.publish >=2001 && bk.genre === 'Maths'
// })

// console.log(fetch)


// *************************** MAP *******************************8

// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumber
//                 .map((num) => num * 10)
//                 .map((num) => num + 1 )
//                 .filter((num) => num >= 40)

// console.log(newNums);


// ************************** Reduce **********************************
const numbers = [1, 2, 3, 4 ,5, 6, 7, 8]
// Syntex
/*
const myTotal = numbers.reduce(function (acc, curr){
    console.log(`acc: ${acc} and currval ${curr}`);
    return acc + curr;
},0)
*/
const myTotal = numbers.reduce ((acc, curr) => acc+curr, 0)
// console.log(myTotal);

const shopping = [
    {
        itemName: 'javascrit',
        price: 2999
    },
    {
        itemName: 'javascrit',
        price: 2999
    },
    {
        itemName: 'javascrit',
        price: 999
    },
    {
        itemName: 'javascrit',
        price: 6999
    },
    {
        itemName: 'javascrit',
        price: 4999
    },
    {
        itemName: 'javascrit',
        price: 3999
    },

]

let priceToPay = shopping.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
