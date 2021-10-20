var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './application/views');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

consign()
    .include('./application/routes')
    .then('./application/controllers')
    .then('./application/models')
    .then('./application/routes')
    .into(app)

module.exports = app;
