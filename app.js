var path = require("path");
var express = require("express");
var app = express();
var publicDirectory = path.join(__dirname, "public");

app.set("port", process.env.PORT || 8000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(publicDirectory));

app.locals.cardData = require('./data/cards.json');
app.locals.reviewData = require('./data/reviews.json');

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

module.exports = app;

var http = require("http");
var server = http.createServer(app);

server.listen(app.get("port"), function (){
    console.log("Web server listening on port" + app.get("port"))
})
