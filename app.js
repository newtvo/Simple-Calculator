var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
const e = require('express');
var app = express();

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123456789",
//     database: "nodemysql"
// });

// var con = mysql.createConnection({
//     host: "us-cdbr-east-02.cleardb.com",
//     user: "b83002a7a7af00",
//     password: "7eb049f7",
//     database: "heroku_aea4dd43fd7100b"
// });

var con = mysql.createPool({
    connectionLimit: 100,
    host: "us-cdbr-east-02.cleardb.com",
    user: "b83002a7a7af00",
    password: "7eb049f7",
    database: "heroku_aea4dd43fd7100b"
});

// con.connect((err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Database Connected!");
//     }
// })


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

    let sql = "INSERT INTO total VALUES (null, '" + n1 + "', '" + n2 + "'," + sum + ")";

    let query =  con.query(sql, (err, result) => {
        if(err) throw err;
        // res.send('Sum added...');
    });

});

let PORT = process.env.PORT || 3000

app.listen(PORT,(res) => {
    console.log(`Server started at port ${PORT}. `)
});



