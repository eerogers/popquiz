var express = require('express')
var app = express()
var path = require('path')
var bodyparser = require('body-parser')
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
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.listen(3000)

//app.use(express.static(path.join(__dirname + 'views')))
var groupResults = {"results": []}

function connect(){
  connection.connect()
}
function end(){
  connection.end()
}
connect()
app.get('/', function(req,res) {
  res.render('index')
})
app.get('/quiz', function(req,res) {
  res.render('quiz')
  })
app.get('/api', function(req, res) {
 connection.query('SELECT * FROM personalityResults', function (error, results, fields) {
    if (error) throw error;
    //console.log(results[0].id)
    for (i=0; i<results.length;i++){
      groupResults.results.push({"id": results[i].id, 
                        "one": results[i].qONE, 
                        "two": results[i].qTWO,
                        "three": results[i].qTHREE,
                        "four": results[i].qFOUR,
                        "five": results[i].qFIVE,
                        "six": results[i].qSIX,
                        "seven": results[i].qSEVEN,
                        "eight": results[i].qEIGHT,
                        "nine": results[i].qNINE,
                        "ten": results[i].qTEN,
                        "group": results[i].whatgroup,
                        "name": results[i].name})
    }                  
    console.log(groupResults)
    res.send(groupResults)
  })
})