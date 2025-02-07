// Create and configure server, and all endpoints
const express = require('express')

// Create instance of express system
const app = express()

app.get('/', (request, response) => {
    response.json({
        message: 'Hello world!'
    })
})

module.exports = {
    app
}


