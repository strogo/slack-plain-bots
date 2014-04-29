var express = require("express");
var app = express();

// init routes
var router = express.Router();

// init bots from bots subfolder
// each bot should exports function to register its route
var botsdir = "./bots/";
require("fs").readdirSync(botsdir).forEach(function(file) {
	require(botsdir+file)(router);
});

app.use("/", router); // use express router

app.listen(process.env.PORT || 5000);