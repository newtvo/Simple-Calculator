var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
const e = require('express');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "nodemysql"
});

con.connect((err) => {
    if (err) {
        // console.log('Error');
        throw err;
    } else {
        console.log("Database Connected!");
    }
})

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE '
})

app.use(bodyparser.urlencoded({extended:true}));

app.get('', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res) => {
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    var sum = n1 + n2
    res.send('The value is: ' + sum)
});

app.listen(3000,(res) => {
    console.log("server started at port 3000")
});