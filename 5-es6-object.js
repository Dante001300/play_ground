// -----------------------------object property shorthand syntax -------------------

const dantename ='Dante'
const danteage = 28
const user = {
//    name: dantename,  
    dantename, // use shorthand syntax equivalent instead of using name: dantename
//    age: danteage,
    danteage, // equivalent of age:danteage   --:> this is called shorthand syntax
    location: 'Georgia'
}
console.log(user)

// -----------------------------object destructuring -------------------
const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    saleprice: undefined
}

// const {label:productlabel, stock, rating} = product
// console.log(productlabel) // change the name of label to productlabel
// console.log(stock)
// console.log(rating) // variable rating has nothing in it

const transaction = (type,{label,stock}) =>{
    console.log(type,label,stock)
}

transaction('order', product) // order is 1st argument which is type, and product is 2nd argument which are label and stock