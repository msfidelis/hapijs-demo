'use strict'

const express = require('express')
const app = express()

var load = require('consign');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser")

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())
app.use(cookieParser())

load('routes')
    .then('models')
    .then('infra')
    .into(app);

app.get('/', function (req, res) {
  res.send({hello:"world"});
});

app.post('/post', function (req, res) {
  res.send({hello:"world"});
});

app.listen(3002, ()=> {
    console.log("Olá!")
})
