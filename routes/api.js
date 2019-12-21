var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var oddRouter = require("./odd");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/odd/", oddRouter);

module.exports = app;