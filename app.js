const express = require("express");
const port = 3000;
const app = express();
const path = require("path");

//app.use(express.static(publicDir));

app.get("/", (req, res) => res.send("Welcome to Blue/Green deployment"));

app.get("/health", (req, res) => {
    res.status(200);
    res.send("app is healthy");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
