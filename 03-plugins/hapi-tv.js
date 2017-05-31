'use strict'

const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Tv = require('tv')

// Declare internals

const internals = {}

internals.plugins = [Vision, Inert, Tv]

const server = new Hapi.Server()

server.connection({ host: "0.0.0.0", port: 8000 })

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        return reply({"hello":"tiozao"})

    }
});


server.register([
    {register: Vision},
    {register: Inert},
    {
        register: Tv,
        options: {
            endpoint: '/debug/console',
            host: "localhost",
            port: "8001"
        }
    }
], (err) => {

    if (err) {
        console.log(err);
        throw err;
    }

    server.start((err) => {

        if (err) {
            console.log(err);
            throw err;
        }
        console.log('Server started at: ' + server.info.uri)
        console.log("TV Debug running at: " + server.info.uri + "/debug/console")
    })
})
