const fs = require('fs') // load file system module(fs) in order to use fs

// const { parsed } = require("yargs")

// const book = {
//     title:'witcher',
//     author:'Dante'
// }

// const bookJSON = JSON.stringify(book) //bookJSON is a string not an object
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON) // parseData is an object and can be use to call the value
// console.log(parseData.author)

// fs.writeFileSync('1-json.json', bookJSON) // create a json file called 1-jason with content of book

// const databufferDante = fs.readFileSync('1-json.json')
// console.log(databufferDante) // without string it will only print buffer data(binary)

// const dataJSON = databufferDante.toString() // convert data to string

// const data = JSON.parse(dataJSON) // pass the data into an object
// console.log(data.title) // now able to access the property of that object

/**************************************************************************************** */
/* challenge: 
1 . load and parse JSON data
2. change name and age using your info 
3. Stringify the changed object and overide the original data
4. Test */

const dataBufferDante = fs.readFileSync('1-json.json') // parsing the data
const databufferDantetostring = dataBufferDante.toString() // convert to a string
const DanteObject = JSON.parse(databufferDantetostring)// parse in an object
//parse take JSON string then transform it into javascript object

DanteObject.name = 'Dante' //content to be changed
DanteObject.age = 28    //content to be changed

const DanteObjectString = JSON.stringify(DanteObject) // convert those content into string CAN NOT USE toString HERE
//stringify take javascript object and transform it into JSON sstring 
fs.writeFileSync('1-json.json',DanteObjectString) // write the contents into the existen file





