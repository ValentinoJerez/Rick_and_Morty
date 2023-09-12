const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    
})

describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
        expect().toHaveProperty({id, name, species, gender, status, origin, image})
    })
    it('Si hay un error responde con status: 500', ()=>{
        expect().toBe()
    })
})

describe("GET /rickandmorty/login", () => {
    it("", ()=>{

    })
})

describe("POST /rickandmorty/fav", ()=>{
    it("", ()=>{})
})

describe("DELETE /rickandmorty/fav/:id", ()=>{
    it()
})