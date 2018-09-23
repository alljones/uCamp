const express = require("express");

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

// =============================================================

// =======
// ROUTES
// =======

app.get("/", function(req,res){
    res.render("index");
});

app.get("/campgrounds", function(req,res){
    let campgrounds = [
        {name: "Oak Farm", image: "https://pixabay.com/get/eb37b60e20f6093ed1584d05fb1d4e97e07ee3d21cac104496f7c77ca7eebcbb_340.jpg"},
        {name: "Craighead Forest", image: "https://farm8.staticflickr.com/7503/15623542806_8058899c7d.jpg"},
        {name: "Granite Hill", image: "https://farm9.staticflickr.com/8292/7814932340_111154c9a8.jpg"}
    ];

    res.render("campgrounds", {campgrounds: campgrounds});
});



// =============================================================

app.listen(PORT, function(){
    console.log("Camp Server has Started");
});
