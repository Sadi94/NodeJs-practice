var mysql = require("mysql");

//var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "XEON"
});

module.exports = con;