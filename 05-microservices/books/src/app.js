const express = require('express')
const app = express()
const os = require('os')

app.get('/', function (req, res) {
  res.send({
            Server: "CRUD Livros",
            Linguagem: "NodeJS",
            Framework: "Express",
            Hostname: os.hostname()
        });
});

app.listen(1300, function () {
  console.log('Microservice de livros!');
});