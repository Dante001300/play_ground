// const square = function (x ){
//     return x*x
// }

// const square = (x) =>{
//     return x * x
// }

// const square =(x) => x*x

// console.log(square(3))

// const event = {
//     name: "birthday party",
//     printGuestList: function (){
//         console.log('guest list for '+this.name)   'this' is a function and it bind to 'function' but does not bind to =>
// //     }
// }

// const event = {
//     name: "birthday party",
//     printGuestList(){
//         console.log('guest list for '+this.name)
//     }
// }

const event ={
    name:'Birthday party',
    guestList: ['a','b','c'],
    printGuestList() {
        console.log('guest list for '+ this.name)


    this.guestList.forEach((danteguest) =>{   //forEach this function takes a function(which is to be executed) as a parameter
        console.log(danteguest + ' is attending '+this.name) //need to create variable dnateguest to use it here in this line
        })
    }

}

event.printGuestList()