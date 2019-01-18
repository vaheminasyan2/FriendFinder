// Require set of npm packages
var express = require("express");
var path = require("path");

// Sets up express and PORT
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/app/public","home.html"))
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/app/public","survey.html"))
})



// Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  