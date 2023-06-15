const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       // resolve([7, 8, 9])
        reject('thing went wrong')
    },2000)
})

doWorkPromise.then((danteResult)=>{
    console.log('Success', danteResult)
}).catch((virgilError)=>{
    console.log('error: ', virgilError)
})