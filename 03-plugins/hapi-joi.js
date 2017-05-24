'use strict'

const Hapi = require("hapi")
const server = new Hapi.Server()
const Joi  = require("joi")

server.connection({port: 3000})

server.route({
    method: "GET",
    path: "/eae/{name}",
    handler : (req, res) => {
        res({"hello":req.params.name})
    },
    config: {
        validate: {
            params: {
                name: Joi.string().min(3).max(10)
            }
        }
    }
})

server.start(() => {})