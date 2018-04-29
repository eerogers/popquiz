var express = require('express');
var app = express()
var path = require('path');
//app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static(path.join(__dirname + 'views')))

module.exports = function(app) {
    app.use(express.static(path.join(__dirname, 'public')))
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/quiz", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/results", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/results.html"));
    });
    app.get("/people", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/people.html"));
    });
    app.get("/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/friends.html"));
    });
    app.get("/princesses", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/princesses.html"));
    });
    app.get("/villains", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/villains.html"));
    });
};