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
    })

};

