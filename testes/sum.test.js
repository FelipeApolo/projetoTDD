const sum = require('../sum');

describe('Testes de soma',  () => {
    it ('Soma de dois números', (done) => {
        expect(sum(1,2)).toBe(3);
        done();        
    })
    it ('Soma de dois números - "string" e número', (done) => {
        expect(sum("texto",2)).toBe(undefined);
        done();
    })
})