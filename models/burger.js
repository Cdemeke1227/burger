var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (val, cb) {
        orm.insertOne("burgers", "burger_name", val, function (res) {
            cb(res);
        });
    },

    updateOne: function ( Val, cb) {
        console.log(Val);
        
        orm.updateOne("burgers", Val, function (res) {
            cb(res);
        });
    }
};


module.exports = burger;