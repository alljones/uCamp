const express = require("express");

const app = express();
const PORT = 8080;

app.set("view engine", ejs);

// =============================================================

// =======
// ROUTES
// =======

app.get("/", function(req,res){
    res.render("index");
});

app.get("/campgrounds", function(req,res){
    let campgrounds = [
        {name: "Oak Farm", image: ""},
        {name: "Craighead Forest", image: ""},
        {name: "Small Bull", image: ""}
    ]
});



// =============================================================

app.listen(PORT, function(){
    console.log("Camp Server has Started");
});
