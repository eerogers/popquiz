var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = express()
var PORT = process.env.PORT || 8080;

var morgan = require('morgan')
var expresshbs = require('express-handlebars')

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'popquiz',
  socketPath : 	'/Applications/MAMP/tmp/mysql/mysql.sock'
});
app.use(morgan('dev'))
app.engine('hbs', expresshbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

//app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static(path.join(__dirname + 'views')))

require("./routing/htmlRoutes.js")(app);
//require("./public/assets/js/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})

//var groupResults = {"results": []}

//function connect(){
//  connection.connect()
//}
//function end(){
//  connection.end()
//}
//connect()

//BELOW WOULD RENDER HANDLEBARS FILES
//app.get('/', function(req,res) {
//  res.render('index')
//})
//app.get('/quiz', function(req,res) {
//  res.render('quiz')
//})
  
//connection.query('SELECT * FROM personalityResults', function (error, results, fields) {
//  if (error) throw error;
  //console.log(results[0].id)
//  for (i=0; i<results.length;i++){
//    groupResults.results.push({
//      photo: "photo here",
//      group: results[i].whatgroup,
//      name: results[i].name,
//      scores: [ 
//      results[i].qONE, 
//      results[i].qTWO,
//      results[i].qTHREE,
//      results[i].qFOUR,
//      results[i].qFIVE,
//      results[i].qSIX,
//      results[i].qSEVEN,
//      results[i].qEIGHT,
//      results[i].qNINE,
//      results[i].qTEN]
//    })
//  }
//})

//app.get('/results', function(req, res) {
//  var data = require('./public/assets/js/friends.js')
//  console.log(data)       
  //  console.log(groupResults)
//  res.render('results', groupResults)
//})