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
      var diffScores = []; 
      var lastIndex = friendsData.length - 1;
      var arr1 = friendsData[lastIndex].scores
      for(i=0; i<friendsData.length-1; i++){
        var arr2 = friendsData[i].scores
        var totalScore = 0;
        for(j=0; j<arr1.length; j++){
          var quesScore = Math.abs(parseInt(arr1[j]) - parseInt(arr2[j]));
          totalScore += quesScore;
        } 
        diffScores.push(totalScore)
      }

      // selects user with closest matching scores
      var lowestScore = 40; // maximum difference
      for(i=0; i<diffScores.length; i++){
        if(diffScores[i] < lowestScore){
          lowestScore = diffScores[i];
        }
      }
      var lowestScoreIndex = diffScores.indexOf(lowestScore);
      var bestMatchName = friendsData[lowestScoreIndex].name;
      var bestMatchPhoto = friendsData[lowestScoreIndex].photo;
      var bestMatch = {
        name: bestMatchName,
        photo: bestMatchPhoto
      }

      res.json(bestMatch);
  });
};