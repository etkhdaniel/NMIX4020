var express = require("express");
var app = express();
var port = 3000;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

app.get("/", (req, res) => {
    res.send("Hello. This URL, localhost:3000 is your starting point.");
});

app.get("/name", (req, res) => {
    res.send("<h1>this is an example of mapping a new url</h2>");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});