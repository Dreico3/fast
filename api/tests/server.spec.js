const {server} = require('../server.js');
const request =require('supertest');
const {expect} =require('chai');
describe('get /iecho',()=>{
    describe('status',()=>{
        it('deveria responder con 200 de status',async ()=>{
            const response = await request(server).get('/iecho?text=juan').send();
            expect(response.status).to.equal(200);
        })
        it('deveria respopder con 400 de status', async ()=>{
            const response = await request(server).get('/iecho?text=j2uan2').send();
            expect(response.status).to.equal(400);
        })
    })
    describe('object',()=>{
        it('deveria ser un objeto',async ()=>{
            const response =await request(server).get('/iecho?text=juan').send();
            expect(response.body).to.be.an('object');
        })
        it('deveria contener text',async ()=>{
            const response =await request(server).get('/iecho?text=juan').send();
            expect(response.body).to.have.own.property('text');
        })
        it('deveria contener error',async ()=>{
            const response =await request(server).get('/iecho?text=2ju3an').send();
            expect(response.body).to.have.own.property('error');
        })
        it('deveria devolver un palindromo:true',async ()=>{
            const response =await request(server).get('/iecho?text=aerea').send();
            expect(response.body.palindromo).to.equal(true);
        })
    })
})
