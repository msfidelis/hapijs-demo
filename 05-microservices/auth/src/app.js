'use strict'

const Hapi = require('hapi')
const Server = new Hapi.Server()
const os = require('os')

Server.connection({port: 1300})

Server.route({
    path: "/",
    method : "GET", 
    handler : (req, res) => {
        res({
            Server: "Autenticação",
            Linguagem: "NodeJS",
            Framework: "HapiJS",
            Hostname: os.hostname()
        })
    }
})

Server.route({
    path: "/",
    method : "POST", 
    handler : (req, res) => {
        res({
            "msg" : "chegou o post!"
        })
    }
})

Server.start((err) => {
    console.log("Microservice de autenticação")
})