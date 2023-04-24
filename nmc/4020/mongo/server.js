var url = "mongodb+srv://evahdaniel13:IWWxbyNBMaYNAspP@cluster0.ugj079r.mongodb.net/?retryWrites=true&w=majority";
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
});
var User = mongoose.model("User", nameSchema);

const express = require("express");
const app = express();
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
var MongoClient = require("mongodb").MongoClient;
var url = "";
var mongoose = require("mongoose");
mongoose.connect(url);

app.get("/add", (req, res) => {
    res.sendFile(__dirname + "/adduser.html");
    });

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData
        .save()
        .then((item) => {
            res.send("Name saved to databases");
        })
        .catch((err) => {
            res.status(400).send("Unable to save to database");
        });
});