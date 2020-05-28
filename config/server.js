var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
	
var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/assets/', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
.include('src/routes')
.then('config/dbConnection.js')
.then('src/model')
.into(app);

module.exports = app;