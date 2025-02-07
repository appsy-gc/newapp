const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
    name: String,
    sprite: String,
    type: {
        type: [String],
        validate: {
            validator: (value) => value.length <= 2,
            message: 'Cannot have more than 2 types of pokemon!'
        }
    },
    level: {
        type: Number,
        min: 1,
        max: 100
    }
})

// Make a schema with data properties
const TeamSchema = new mongoose.Schema({
    pokemon: {
        type: [PokemonSchema],
        // validate: [limitArrayLength(6), 'Cannot have more than 6 pokemon per team!']
        validate: {
            validator: (value) => value.length <= 6,
            message: 'Cannot have more than 6 pokemon per team!'
        }
    },
    trainer: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

// function limitArrayLength(limit) {
//     return function(value) {
//         return value.length <= limit
//     }
// }

// Make a model that uses the schema
//                              Name in DB, schema to use for its validation rules
const TeamModel = mongoose.model('Team', TeamSchema)


// Export the model
module.exports = {
    TeamModel
}