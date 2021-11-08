const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,

}));

consign()
    .include('./routes')
    .then('./controllers')
    .then('./config/dbConn.js')
    .into(app);

module.exports = app;

