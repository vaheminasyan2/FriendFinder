// Require set of npm packages
var express = require("express");
const path = require("path");

// Sets up express and PORT
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"))
});

// Start the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});