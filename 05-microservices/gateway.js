'use strict'

const Hapi = require('hapi');
const server = new Hapi.Server();

server.register({
    register: require('h2o2')
}, (err) => {})

server.connection({
    port: 80
})

/**
 * Service de Autenticação
 */
server.route({
    method: ['GET', 'POST'],
    path: '/auth',
    handler:    {
        proxy: {
            uri: 'http://auth:1300/'
        }
    }
})

/**
 * Service de gerenciamento de livros
 */
server.route({
    method: 'GET',
    path: '/books',
    handler:    {
        proxy: {
            uri: 'http://books:1300/'
        }
    }
})


server.start((err) => {
    console.log('Server started at: ' + server.info.uri);
})