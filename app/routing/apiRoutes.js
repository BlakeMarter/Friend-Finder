var path = require("path");
var friends = require("../data/friends.js");


module.export = function(app) {
  app.get("/api/friendslist", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friendslist"), function (req, res) {
console.log("req.body" + req.body);



  }
  
}