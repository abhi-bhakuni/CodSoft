const express = require("express")
const cors = require("cors")
const axios = require("axios")

const User = require("./database/UserSchema")
const Flight = require("./database/FlightSchema")
require("./database/db")

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static("public"))

app.post("/UserDetails", async (req, res) => {
    const user = new User(req.body)
    const userResult = await user.save()
    res.send(userResult)
})

app.post("/storeFlights", async (req, res) => {
    try {
        const flightsData = req.body;

        if (!Array.isArray(flightsData)) {
            throw new Error("Flight data must be an array.");
        }

        const flightResults = flightsData.map(async (data) => {
            const flight = new Flight(data);
            return await flight.save();
        })

        Promise.all(flightResults).then(() => {
            res.send(flightResults);
        })
    } catch (error) {
        console.error("Error inserting flights:", error);
        res.status(500).send(error.message);
    }
});

app.get('/getFlights', async (req, res) => {
    try {
        const flights = await Flight.find();
        console.log('Sending Flights:', flights);
        res.json(flights);
    } catch (error) {
        console.error('Error fetching flight data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(5000)
