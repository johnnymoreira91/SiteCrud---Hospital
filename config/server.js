var express = require('express');
var consign = require('consign');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/assets/', express.static('assets'));

consign().include('src/routes').into(app);

module.exports = app;