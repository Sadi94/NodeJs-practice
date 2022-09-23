// var con = require("./connection");

// con.connect(function (error) {
//     if (error) throw error;

//     con.query("select * from user", function (erro, result) {
//         if (error) throw error;
//         console.log(result);
//     });
// });
var con = require('./connection');
;
var express = require('express');
var app = express();

var bodyParser = require('body - parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/register.html');

});

app.post('/', function (req, res) {
    //console.log(req.body);

    var name = req.body.name;
    var email = req.body.email;
    var contactNo = req.body.contactNo;
    var address = req.body.address;

    con.connect(function () {
        if (error) throw error;

        var sql = "INSERT INTO user(name, email, contactNo, address) VALUES('" + name + "','" + email + "','" + contactNo + "','" + address + "')";

        //array of object
        var VALUES = [
            [name, email, contactNo, address]
        ];

        con.query(sql, function (error, result) {
            if (error) throw error;
            res.send('User Added successfully' + result.insertId);

        });
    });
});

app.listen(7000);

function newFunction() {
    return 'body-Parser';
}
