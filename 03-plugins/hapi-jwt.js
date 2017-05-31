'use strict'

const Hapi = require('hapi')
const Server = new Hapi.Server()
const jwt = require('jsonwebtoken')

Server.connection({port: 8000})

const JWT_KEY = "XuxuBeleza";

/**
 * Register do Hapi-Auth-Jwt
 */
Server.register(require('hapi-auth-jwt2'), (err) => {
    if (err) throw err;

    Server.auth.strategy('jwt', 'jwt', { 
        key: JWT_KEY,          
        validateFunc: validate,            
        verifyOptions: { algorithms: [ 'HS256' ] } 
    })

    Server.auth.default('jwt');
})

/**
 * Função de Validação
 * @param {*} decoded 
 * @param {*} request 
 * @param {*} callback 
 */
var validate = (decoded, request, callback) => {
      return callback(null, true);    
}

/**
 * Retorna um Token de teste
 */
Server.route({
    path: "/login",
    method: "GET",
    handler: (req, res) => {
        res({
            token: jwt.sign({id: 1}, JWT_KEY)
        })
    },
    config: { 
        auth: false 
    }
})

/**
 * curl -X POST -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDk2MTk0MDU4fQ.OJdy6N57_HngaSALUFQBhnRdaOB3yx_P-9xNJDJeP4g" \ 
 * http://localhost:8000/auth -i
 */
Server.route({
    path: "/auth", 
    method: "POST", 
    handler: (req, res) => {
        res({"status":'Authorized!'})
    }
})

Server.start((err) => {
    console.log("JWT!!!")
})