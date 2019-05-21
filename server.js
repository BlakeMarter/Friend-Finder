var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// var hR = require("./app/routing/htmlRoutes.js");
// var aR = require("./app/routing/apiRoutes.js")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, "app/routing/htmlRoutes.js")), (app);
require(path.join(__dirname, "app/routing/apiRoutes.js")), (app);

app.listen(PORT, function() {
  console.log("App is currently listening on: http://localhost:" + PORT);
})

