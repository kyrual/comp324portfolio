const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://rueyinhu:CvT51c1QhWhKM2HK@cluster0.ma4g3dm.mongodb.net/comp324")

const notesSchema = {
    name: String,
    email: String,
    message: String
}

const Note = mongoose.model("Note", notesSchema);

app.get("/", function(req, res){
    res.sendFile("/Users/rue/Desktop/comp324/html/contact.html");
})

app.post("/", function(req, res){
    let newNote = new Note({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    newNote.save();
    res.redirect('/');
});

app.listen(6699, function(){
    console.log("server is running! http://localhost:6699/");
});