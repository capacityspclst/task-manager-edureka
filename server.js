const http = require('http')
const app = require('./app')

const port = 3000

const server = http.createServer(app)

server.listen(port, function(){
    console.log("Server listening on port 3000")
})