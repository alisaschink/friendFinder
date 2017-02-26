// requires data from friends.js
var friendsData = require("../data/friends.js");

// routing

module.exports = function(app) {
  // get request for friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // post Request for when user submits survey
  app.post("/api/friends", function(req, res) {
      friendsData.push(req.body);
      res.json(true);
  });
};