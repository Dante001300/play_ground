// setTimeout(()=>{
// console.log('two seconds are up')
// ,2000})

// const dantename = ['dante','triss','yennifer']
// const shortname = dantename.filter((truong)=>{
//     return truong.length <= 4
// })

// const geocode = (danteaddress, dantecallback) => {

//     setTimeout (()=>{
//         const dantedata = {
//             latitude:0,
//             longtitude:0
//         }
//         dantecallback(dantedata)
//     },2000)

// }

// geocode('georgia', (doesnotmatter) =>{
//     console.log(doesnotmatter)
// })
//--------------------------challenge-----------------------------------------------



// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a,b,callback) =>{
//     setTimeout(()=>{
//         callback(a+b)
//     },2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

////////////////////////////////////////////////////////////////////////////////////////
const doWorkCallback = (callback) =>{
    setTimeout (()=>{
        //callback('This is my error', undefined)
        callback(undefined, [1, 2, 3, 4])
    },2000)
}

doWorkCallback((error, result)=>{
    if(error){
        return console.log(error)
    }
    console.log(result)
})