var friends = require('../public/assets/js/friends.js')
module.exports = function(app) {
    app.post("/api/people", function(req, res) {
        console.log(req.body)
     });
    app.get("/api/people", function(req, res) {
        res.json(friends.peopleArray)
    });
    app.get("/api/friends", function(req, res) {
        res.json(friends.friendsArray)
    });
    app.get("/api/princesses", function(req, res) {
        res.json(friends.princessArray)
    });
    app.get("/api/villains", function(req, res) {
        res.json(friends.villainArray)
      });
}