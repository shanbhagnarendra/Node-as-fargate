const express = require("express");
const port = 3000;
const app = express();
const path = require("path");

//app.use(express.static(publicDir));

app.get("/", (req, res) => res.send("NodeJS on ECS Fargate with CodeDEploy and Jenkins CodeDeployDefault.ECSLinear10PercentEvery1Minutes!"));

app.get("/health", (req, res) => {
    res.status(200);
    res.send("app is healthy");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
