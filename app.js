var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
const e = require('express');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
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
    let sql = 'CREATE DATABASE nodemysql';
    con.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Database created...');
    })
})

// Parses the request body and transforms it 
// into a JavaScript Object for easy operation
app.use(bodyparser.urlencoded({extended:true}));

app.get('', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res) => {
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    var sum = n1 + n2
    res.send('The value is: ' + sum)

    let sql = "INSERT INTO sum VALUES (null, '" + n1 + "', '" + n2 + "'," + sum + ")";

    let query =  con.query(sql, (err, result) => {
        if(err) throw err;
        // res.send('Sum added...');
    });

});

app.listen(3000,(res) => {
    console.log("Server started at port 3000")
});