var path = require("path");
var express = require("express");
var http = require("http");
var app = express();
const { env } = require("process");
var publicDirectory = path.join(__dirname, "public");

app.set("port", process.env.PORT || 8000)
app.set("view engine", "ejs");
app.use(express.static(publicDirectory));

app.locals.cardData = require('./data/cards.json');
let cardData = app.locals.cardData
app.locals.reviewData = require('./data/reviews.json');
let reviewData = app.locals.reviewData

app.get("/", function(req, res){
    res.render("home", {cardData: cardData});
})
app.get("/about", function(req, res){
    res.render("about", {reviewData: reviewData});
})
app.get("/project/:pagelink", function(req, res){
    cardData.find( e => e.pagelink == req.params.pagelink ? res.render("project", {cardData, cardData}) : console.log("Page Not Found"))
})

var server = http.createServer(app);

server.listen(app.get("port"), function (){
    console.log("Web server listening on port" + app.get("port"))
})