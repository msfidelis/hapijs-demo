const Hapi = require('hapi');
const server = new Hapi.Server();

server.register({
    register: require('h2o2')
}, (err) => {})

server.connection({port:3000})

/**
 * HOST Proxy
 */
server.route({
    method: 'GET',
    path: '/',
    handler: {
       proxy: {
            host: 'labs.superlogica.com',
            port: '80',
            protocol: 'http'
        }
    }
})

/**
 * URI Proxy
 */
server.route({
    method: 'GET',
    path: '/uol',
    handler: {
        proxy: {
            uri: 'https://www.uol.com.br'
        }
    }
});

server.start((err) => {
    console.log('Server started at: ' + server.info.uri);
})