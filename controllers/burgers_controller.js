var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
    console.log("Hello");
});

router.post("/burger", function (req, res) {
    burger.insertOne(req.body.name, function (result) {
        res.json({ id: result.insertId });
    });
    console.log("insertroute");
    console.log(req.body.name);
    console.log(typeof(req.body.name));
    
});

router.put("/burger/:id", function (req, res) {
    var Val = 'id = ' + req.params.id;

   console.log(Val);
   
    burger.updateOne(Val, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router;




