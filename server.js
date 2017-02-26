// dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express configuration
// creates an express server
var app = express();

// sets an initial port
var PORT = process.env.PORT || 8080;

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});