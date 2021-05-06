const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longtitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
})


const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // reference to some other object stored in mongodb
        ref: 'User'                           // referenct to user
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
})


mongoose.model('Track', trackSchema) // load track collection to mongodb
