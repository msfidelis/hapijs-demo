'use strict'

const Hapi = require('hapi')
const Server = new Hapi.Server()

Server.connection({port: 8000})

Server.route({
    path: "/route", 
    method: "GET", 
    handler: (req, res) => {
        res({"msg":"Containers são fodas com NodeJS!"})
    }
})

Server.route({
    path: "/", 
    method: "GET",
    handler: (req, res) => {
        res({"status":200})
    }
})

Server.start((err) => {
    console.log("Rodando lindo!")
    console.log("Acesse http://localhost:8000/route")
})
