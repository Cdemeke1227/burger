// Import mysql connection
var connection = require("./connection.js");
// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection



// Object for all our sql statement functions
var orm = {

    selectAll: function (tableIput, cb) {
        var queryString = `SELECT * FROM ${tableIput} ;`;
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
        console.log("selectall");
    },
    insertOne: function (table, col, val, cb) {
        var queryString = `INSERT INTO ${table} (${col}) VALUES ("${val}");`;

        console.log(queryString);    
        connection.query(queryString, val, function(err,result){
            if (err){
                throw err;
            }
            cb(result);
        });
        console.log("insertOne");
    },
    updateOne: function (table, Val, cb) {
        var queryString = `UPDATE ${table} SET devoured = true WHERE ${Val};` 
        console.log(queryString);
        
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }

            cb(result);
        });
        console.log("updateOne");
    },

};


module.exports = orm;