var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campgrounds = [
		{name: "Salmon Creek", image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"},
		{name: "Granite Hill ", image: "https://farm4.staticflickr.com/3926/14857275017_9932324256.jpg"},
		{name: "Mountain Goat's", image: "https://farm6.staticflickr.com/5098/5496185186_d7d7fed22a.jpg"}
	]

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//==========================================
//Routs Path of the app
app.get("/", function(req, res){
	res.render("landing")
});

app.get("/campgrounds", function(req, res){	
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name:name, image:image}
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
	// res.send("Post it man");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});
//==========================================




//localhost:300 the app is listening to 300
app.listen(3000, () => console.log("Yelp App is running"));