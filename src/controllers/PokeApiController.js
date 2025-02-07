const express = require('express')

const router = express.Router()

function checkForCoolPokemon(request, response, next){
    let allowedPokemon = [
        'pikachu',
        'squirtle',
        'snorlax',
        'dragonite',
        'garchomp'
    ]

    if (allowedPokemon.includes(request.params.name)){
        next()
    } else {
        next(new Error('Invalid Pokemon name requested.'))
    }

}   

// http://localhost:56789/pokeapi/style1/pikachu
// http://localhost:56789/pokeapi/style1/appsmear
router.get(
    '/style1/:name', // Route path
    checkForCoolPokemon, // Middleware chain
    async (request, response) => { // Route final callback
        let pokeApiResponse = await fetch('https://pokeapi.co/api/v2/pokemon/' + request.params.name)
        let pokeApiData = await pokeApiResponse.json()

        response.json({
            name: pokeApiData.name
        })
    }
)



module.exports = {
    PokeApiRouter: router
}