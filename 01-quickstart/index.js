'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({port : 3000})

/**
 * Rota de Teste
 */
server.route({
    method: "GET", 
    path: "/", 
    handler: (req, res) => {
        res({hello: "world"})
    }
})

/**
 * Inicio do server
 */
server.start((err) => {
    if (err) {
        throw err
    } else {
        console.log("Server Running!")
    }
})

module.exports = server;