var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './application/views');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(expressValidator());

consign()
    .include('./application/routes')
    .then('./application/controllers')
    .then('./config/dbConn.js')
    .into(app)

module.exports = app;