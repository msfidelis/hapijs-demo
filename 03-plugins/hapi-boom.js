'use strict'

const Hapi = require('hapi')
const Server = new Hapi.Server()
const Boom = require('boom')

Server.connection({
    port: 8000
})

Server.route({
    path: "/501", 
    method: "GET", 
    handler : (req, res) => {
        res(Boom.notImplemented("Não implementado"))
    }
})

Server.start((err) => {
    console.log("BOOM!")
})