'use strict'

const server = require('../index.js');
const request = require('hapi-test-request')(server);
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Quick', () => {

        describe('#Quick', () => {

        it('Deve encontrar a rota de teste', (done) => {
            request.call({
                method: 'GET',
                url: '/'
            })
            .then((response) => {
                let body = JSON.parse(response.payload)
                assert.equal(body.hello, "world");
            })
            .then(done)
            .catch(done);
        })

    })
})