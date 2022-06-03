const request = require('supertest');
const app= require('../routes/routesAdmin');
describe ('Teste de Rota',()=>{
    it("It should respond with an OK", async () => {
        const res = await request('http://localhost:3000').get('/about')
        expect(res.statusCode).toEqual(200)
    })
})