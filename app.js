const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ucamp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);
Campground.create({
    name: "Oak Farm", 
    image:"https://pixabay.com/get/eb37b60e20f6093ed1584d05fb1d4e97e07ee3d21cac104496f7c77ca7eebcbb_340.jpg"}, function(err, campground){
    if(err){
        console.log(err)
    } else {
        console.log("Newly Created Campground: ");
        console.log(campground);
    }
});

/* let campgrounds = [
    {name: "Oak Farm", image: "https://pixabay.com/get/eb37b60e20f6093ed1584d05fb1d4e97e07ee3d21cac104496f7c77ca7eebcbb_340.jpg"},
    {name: "Craighead Forest", image: "https://farm8.staticflickr.com/7503/15623542806_8058899c7d.jpg"},
    {name: "Granite Hill", image: "https://farm9.staticflickr.com/8292/7814932340_111154c9a8.jpg"},
    {name: "Oak Farm", image: "https://pixabay.com/get/eb37b60e20f6093ed1584d05fb1d4e97e07ee3d21cac104496f7c77ca7eebcbb_340.jpg"},
    {name: "Craighead Forest", image: "https://farm8.staticflickr.com/7503/15623542806_8058899c7d.jpg"},
    {name: "Granite Hill", image: "https://farm9.staticflickr.com/8292/7814932340_111154c9a8.jpg"}
]; */

// =============================================================

// =======
// ROUTES
// =======

app.get("/", function(req,res){
    res.render("index");
});

app.get("/campgrounds", function(req,res){
    // Get all campground db
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else{
        res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    });
});

app.post("/campgrounds", function(req,res){
    // get data from from and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCamp = {name: name, image: image};
    //Create a new campground and save to DB
    Campground.create(newCamp, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
        // redirect back to campgrounds page
        res.redirect("/campgrounds");
        }
    })
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});


// =============================================================

app.listen(PORT, function(){
    console.log("Camp Server has Started");
});
