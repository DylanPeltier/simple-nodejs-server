const http = require('http')
const port = 3000

// create server and write default message
const server = http.createServer((req, res) => {
    res.write('Hello Node.js')
    res.end()
})

// listen on designated port
server.listen(port, (err) => {
    if (err) {
        console.error('Something went wrong', err)
    } else {
        console.log('Listening on port ' + port)
    }
})