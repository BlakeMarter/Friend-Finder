var path = require("path");
var friends = require("../data/friends.js");


module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body);
   
    var user = req.body;

    var userScores = user.scores;

    var friendMatch = '';
    var friendImage = '';
    var totalDifference = 12000;


    for (let i = 0; i < friends.length; i++) {
      var difference = 0;
      for (let j = 0; j < userScores.length; j++) {
        difference += Math.abs(friends[i].scores[j] - userScores[j]);
      };

      if (difference < totalDifference) {
        totalDifference = difference;
        friendMatch = friends[i].name;
        friendImage = friends[i].photo;
      };
      
    }

    friends.push(user);


    res.json({status: 'OK', name: friendMatch, photo: friendImage});
  });

};