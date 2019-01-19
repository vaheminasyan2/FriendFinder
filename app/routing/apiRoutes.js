// Require set of npm packages
const path = require("path");

// Link routes to data sources
var friendData = require("../data/friends");

// Sets up routing 
module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData)
    });
};
