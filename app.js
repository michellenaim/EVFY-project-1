const express = require("express");
const routes = require("./routes/router.js");
var path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.set("views", __dirname + "/views"); // general config
app.set("view engine", "html");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

module.exports = app;
