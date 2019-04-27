const express = require('express')

const app = express();
//const port = 3000

let tasks = require('./data/tasks')

app.get("/", function(req,res){
    res.sendFile(__dirname + "\\public\\index.html")
})

app.get("/tasks", function(req, res){
    res.json(tasks)
})

app.get('/get-random-task', function(req,res){
    const randomTask = tasks[Math.floor(Math.random()*tasks.length)+1]
    res.send(randomTask)
})

//app.listen(port, function(){
//    console.log("App is listening to port number " + port)
//})

module.exports = app