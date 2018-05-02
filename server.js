var express = require("express");
var bodyParser = require("body-parser");

// Set Port 
var PORT = process.env.PORT || 3000;

var app = express();
// Serve static path
app.use(express.static("public"));
// Set parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and server acces to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);


app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:"+PORT);
});