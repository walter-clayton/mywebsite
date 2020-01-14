
var express             = require("express"),
    app                 = express();



app.set("view engine", "ejs");
app.use(express.static("public"));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get("/", function(req, res){
    res.render("index");
})
app.get("/home", function(req, res){
    res.render("home");
})
app.get("/about", function(req, res){
    res.render("about");
})

// CONNECT TO PORTS
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!");
});

var port = process.env.PORT || 8000;
app.listen(8000, function(){
	console.log("ready on port " + port);
});