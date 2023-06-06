const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=5db9d06b9599615eaaea970ef52430f4&query=37.8267,-122.4233&units=f'

const request = http.request(url, (response)=>{// to register a handler

let data = ''
    
    response.on('data', (chunk)=>{
        data = data + chunk.toString() // to convert buffer to a string
        console.log(chunk)
    }) 

response.on('end', ()=> {
        const body = JSON.parse(data)
        console.log(body)
    })

})


request.on('error', (error) => {
    console.log('an error', error)
})

request.end() // this is import without it request won't end.