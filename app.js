var express = require('express')
var bodyparser = require('body-parser')
var app = express()

app.use(bodyparser.urlencoded({extended:true}))

app.get('', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    var sum = n1 + n2
    res.send('The value is: ' + sum)
})

app.listen(3000,(res) => {
    console.log("server started at port 3000")
})