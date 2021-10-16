const express = require("express");
const routes = require("./routes/index");
var path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/public/")));

module.exports = app;
