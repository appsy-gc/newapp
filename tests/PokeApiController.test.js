const supertest = require('supertest')
const { app } = require('../src/server')
const { connect, disconnect } = require('../src/database')

// beforeall and afterall when testing db connections
beforeAll(async () => {
    try {
        await connect('mongodb://localhost:27017/PokemonTeamBuilder-test')
    } catch (error) {
        console.error(error)
    }
}) 

afterAll(async () => {
    await disconnect()
})

describe('pokeAPI endpoing testing', () => {
    test('Retrieve a correct name from the PokeAPI when sent a valid pokemon name', async () => {
        
        let response = await supertest(app).get('/pokeapi/style1/pikachu')
        console.log(response.body)
        expect(response.body.name).toBe('pikachu')

    })
})