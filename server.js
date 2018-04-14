var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

app.get('/', function (req, res) {
    res.send('Hello World')
  })
   
app.listen(3000)