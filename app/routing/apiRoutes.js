// Require set of npm packages
const path = require("path");

// Link routes to data sources
var friendData = require("../data/friends");

// Sets up routing 
module.exports = function (app) {

    // GET request to display raw data in json format
    app.get("/api/friends", function (req, res) {
        res.json(friendData)
    });

    // POST request to send incoming survey results into the friendArray
    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        var userArr = req.body.scores;
        var results = [];
        //console.log(friendData);
        //console.log(req.body)

        // Loop through freindDate to count totalDifference and store the result in a new array results
        for (var i = 0; i < friendData.length - 1; i++) {
            var friendArr = friendData[i].scores;
            var totalDif = 0;
            for (var j = 0; j < friendArr.length; j++) {
                var dif = Math.abs(parseInt(friendArr[j]) - parseInt(userArr[j]));
                totalDif = totalDif + dif;
            }
            var result = {
                name: friendData[i].name,
                photo: friendData[i].photo,
                scoreDif: totalDif
            };

            results.push(result);
        };
        //console.log("Results array:")
        //console.log(results);

        // Use .reduce method to find the best match and send data to the client
        var minDiff = results.reduce(function (prev, curr) {
            return prev.scoreDif < curr.scoreDif ? prev : curr;
        });

        //console.log("Final results array:")
        //console.log(minDiff);
        res.json(minDiff);

    });

};

