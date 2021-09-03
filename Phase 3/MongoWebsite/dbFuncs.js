let mongoose = require("mongoose");
let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.get("/addCourse",(request,response)=> {
    //response.send("Welcome to add page");
    response.sendFile(__dirname+"\\addCourse.html");
})
app.get("/updateCourse",(request,response)=> {
    //response.send("Welcome to update page");
    response.sendFile(__dirname+"\\updateCourse.html");
})
app.get("/deleteCourse",(request,response)=> {
    //response.send("Welcome to delete page");
    response.sendFile(__dirname+"\\deleteCourse.html");
})
app.get("/fetchCourse",(request,response)=> {
    //response.send("Welcome to fetch page");
    response.sendFile(__dirname+"\\fetchCourse.html");
})