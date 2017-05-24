    const Hapi = require('hapi');
    const server = new Hapi.Server();
    const Scooter = require('scooter');
    
    server.connection({port: 8000})

    server.route({
        method: 'GET',
        path: '/user-agent',
        handler: (request, reply) => {
            return reply(request.plugins.scooter.toJSON());
        }
    })

    server.register(Scooter, (err) => {

        server.start(() => {
            console.log(server.info.uri + '/user-agent');
        });
    })