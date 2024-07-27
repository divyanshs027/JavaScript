/*
const promiseOne = new Promise(function(resolve, reject){
     // Do an async task
     // DB calls, cryptography, network
     setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
     }, 1000) 
});

promiseOne.then(function(){
    console.log('Promise consumed');
});


// Direct 
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(function(){
    console.log('Async 2 resolved')
})

// Three 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({
            username: 'ritansh',
            email: 'email@gamil.com'
        })
    }, 1000);    
});

promiseThree.then(function(user){
    console.log(user)
});

//four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({
                username: 'ritansh',
                password: 123123
            })
        }
        else{
            reject('Error is here')
        }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('The promise is either resolve or rejected')
})
*/

// Using try n catch

/*
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                username: 'ritansh',
                password: 123123
            })
        }
        else{
            reject('Error is here')
        }
    }, 1000);
});

async function consumerPromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumerPromiseFive();
*/


// Getting data from api
// async function getAllUser(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data)

//     }catch(error){
//         console.log('E:', error)
//     }
// }

// getAllUser()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))