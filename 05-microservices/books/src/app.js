const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send({
            Server: "CRUD Livros",
            Linguagem: "NodeJS",
            Framework: "Express"
        });
});

app.listen(1300, function () {
  console.log('Microservice de livros!');
});