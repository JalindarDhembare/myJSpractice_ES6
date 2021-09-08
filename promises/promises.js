/* Ex.01. 

const myPromise = new Promise((resolve,reject)=>
{
    if(500>100)
    {
        resolve("Its, true..!!");
    }
    else
    {
        reject("Its false..!!");
    }
});

myPromise.then((success)=>
{
    console.log(success);
})

.catch((error)=>
{
    console.log(error);
})

//Output: Its, true..!!         */
//--------------------------------------------------------
/* Ex.02.

const myPromise = new Promise((resolve,reject)=>
{
    if(100>300)
    {
        resolve("Its, true..!!");
    }
    else
    {
        reject("Its false..!!");
    }
});

myPromise.then((success)=>
{
    console.log(success);
})

.catch((error)=>
{
    console.log(error);
})

//Output: Its false..!!         */
//--------------------------------------------------------