
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
app.locals.skillData = require('./data/skills.json');
let skillData = app.locals.cardData

app.get("/", function(req, res){
    res.render("index");
})
app.get("/home", function(req, res){
    res.render("home");
})
app.get("/about", function(req, res){
    res.render("about");
})

var server = http.createServer(app);

server.listen(app.get("port"), function (){
    console.log("Web server listening on port" + app.get("port"))
})