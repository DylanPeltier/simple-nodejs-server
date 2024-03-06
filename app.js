const http = require('http')
const fs = require('fs')
const port = 3000

// create server and write default message
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('Error 404: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

// listen on designated port
server.listen(port, (err) => {
    if (err) {
        console.error('Something went wrong', err)
    } else {
        console.log('Listening on port ' + port)
    }
})