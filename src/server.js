// Create and configure server, and all endpoints
const express = require('express')

// Create instance of express system
const app = express()

app.use(express.json())

const mongoose = require('mongoose')

let databaseURL = ''
switch (process.env.NODE_ENV?.toLocaleLowerCase()) {
    case 'test':
        databaseURL = 'mongodb://localhost:27017/PokemonTeamBuilder-test'
        break
    case 'dev':
    case 'development':
        databaseURL = 'mongodb://localhost:27017/PokemonTeamBuilder-test'
        break
    case 'production':
    case 'prod':
        // This should match a variable in the .env or in the deployment platform
        // so it knows where to find mongodb clouse atlas
        databaseURL = 'process.env.DATABASE_URL'
        break
    default:
        console.error("Incorrect environment detected!")
        process.exit()
        // break
}

// After figuring out the databaseURL
// connect to the db using the db URL
const { connect } = require('./database.js')
connect(databaseURL)

app.get('/', (request, response) => {
    response.json({
        message: 'Hello world!'
    })
})


app.get('/databaseHealth', (request, response) => {
    response.json({
        name: mongoose.connection.name,
        models: mongoose.connection.modelNames(),
        address: mongoose.connection.host,
        readyState: mongoose.connection.readyState
    })
})


const {PokeApiRouter} = require('./controllers/PokeApiController.js')
app.use('/pokeapi', PokeApiRouter)

const { TeamRouter } = require('./controllers/TeamController.js')
app.use('/team', TeamRouter)





// ERROR HANDLING
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


