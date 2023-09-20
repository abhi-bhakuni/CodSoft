const mongoose = require("mongoose")

const flightSchema = new mongoose.Schema({
    flightName: String,
    flightDetails: {
        business: {
            seats: Number,
            price: Number
        },
        economy: {
            seats: Number,
            price: Number
        },
        firstClass: {
            seats: Number,
            price: Number
        }
    },
    place: {
        from: String,
        to: String
    },
    time: {
        arrival: Date,
        reach: Date
    }
})

module.exports = mongoose.model("FlightDetails", flightSchema)
