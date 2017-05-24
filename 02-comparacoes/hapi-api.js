'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({port: 3001})

server.route({
    method: 'GET',
    path: "/",
    handler: (req, res) => {
        res({hello:"world"})
    }
})

server.route({
    method: 'POST',
    path: "/",
    handler: (req, res) => {
        res({hello:"world"})
    }
})


server.start((err) => {
    console.log("Olá!")
})