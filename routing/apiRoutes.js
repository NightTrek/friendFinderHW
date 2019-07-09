let friends = require("../data/friends");

module.exports = function(app) {

  //get request to pull in the preset friends data
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  //post the servey form data into our server
  app.post("/api/friends", function(req, res) {
    let FriendMatchObject = {
      name: "",
      photo: "",
      ScoreDifference: Infinity
    };

   
    let userData = req.body;
    let userScores = userData.scores;
    console.log(userData)
    
    
    let totalDif;

    // loop through each friend stored in data
    for (let i = 0; i < friends.length; i++) {
      let currentTest = friends[i];
      totalDif = 0;
      console.log(currentTest.name);

      // Than we loop through each score in that friends to calculatet the dif
      for (let j = 0; j < currentTest.scores.length; j++) {
        totalDif += Math.abs(parseInt(userScores[j]) - parseInt(currentTest.scores[j]));
      }
      if (totalDif <= FriendMatchObject.ScoreDifference) {
        FriendMatchObject.name = currentTest.name;
        FriendMatchObject.photo = currentTest.photo;
        FriendMatchObject.ScoreDifference = totalDif;
      }
    }
    friends.push(userData);
    res.json(FriendMatchObject);
  });
};
