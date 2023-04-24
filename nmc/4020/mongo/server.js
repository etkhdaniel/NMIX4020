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