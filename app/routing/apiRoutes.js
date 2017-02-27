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
      // res.json(true);
      // compares scores between new user and friends data 
      var lastIndex = friendsData.length - 1;
      var arr1 = friendsData[lastIndex].scores
      for(i=0; i<friendsData.length-1; i++){
        var arr2 = friendsData[i].scores
        var totalScore = 0;
        for(j=0; j<arr1.length; j++){
          var quesScore = Math.abs(parseInt(arr1[j]) - parseInt(arr2[j]));
          totalScore += quesScore;
        } 
        console.log(totalScore)
      }
  });
};