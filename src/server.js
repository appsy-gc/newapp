// Create and configure server, and all endpoints
const express = require('express')

// Create instance of express system
const app = express()

app.get('/', (request, response) => {
    response.json({
        message: 'Hello world!'
    })
})

const {PokeApiRouter} = require('./controllers/PokeApiController.js')
app.use('/pokeapi', PokeApiRouter)




// Wildcard * means "match any route"
// Put at the end of route declarations
// to catch anything that does not match an earlier route
app.get('*', (request, response) => {
    console.log('User tried to visit ' + request.path)
    response.status(404).json({
        message: 'Page not found. ',
        attemptedPath: request.path
    })
})

// Error handling catcher
// applies to every route in the server by using .use
app.use((error, request, response, next) => {
    console.log('Error occurred in the server.')
    console.log(JSON.stringify(error))
    response.json({
        // errors: request.body?.errors,
        message: error.message
    })
})

module.exports = {
    app
}


