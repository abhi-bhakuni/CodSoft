import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {data} from '../../Data/data.js'
import './showflight.css'

export default function ShowFlight() {
    const [flights, setFlights] = useState(data);

    useEffect(() => {
        fetch('/getFlights', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                setFlights(data);
            })
            .catch((error) => {
                console.error('Error fetching flight data:', error)
            });
    }, []);

    function handlePriceVisibility(flightId, seatClass) {
        const priceElement = document.getElementById(`price_${flightId}`);

        switch (seatClass) {
            case 'business':
                priceElement.textContent = `Price: $${flights.find(flight => flight._id === flightId).flightDetails.business.price}`;
                break;
            case 'economy':
                priceElement.textContent = `Price: $${flights.find(flight => flight._id === flightId).flightDetails.economy.price}`;
                break;
            case 'firstClass':
                priceElement.textContent = `Price: $${flights.find(flight => flight._id === flightId).flightDetails.firstClass.price}`;
                break;
            default:
                break;
        }

        priceElement.style.display = 'inline';
    }

    const navigate = useNavigate()

    const handleFlightBuy = (e) => {
        e.preventDefault()

        navigate('/purchase-flight');
    }

    return (
        <div className="flight-list-container">
            <h1 className="flight-list-title">Flight List</h1>
            {flights.length > 0 ? (
                <ul className="flight-list">
                    {flights.map((flight) => (
                        <form onSubmit={handleFlightBuy} className="flight-item" key={flight._id}>
                            <li>
                                <h2 className="flight-name">{flight.flightName}</h2>
                                <p className="flight-info">
                                    Departure: {new Date(flight.time.arrival).toLocaleString()}
                                    <br />
                                    Arrival: {new Date(flight.time.reach).toLocaleString()}
                                    <div className="seat-class-options">
                                        <label>
                                            <input
                                                type="radio"
                                                name={`seatClass_${flight._id}`}
                                                value="business"
                                                onClick={() => handlePriceVisibility(flight._id, 'business')}
                                            />
                                            Business Class
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`seatClass_${flight._id}`}
                                                value="economy"
                                                onClick={() => handlePriceVisibility(flight._id, 'economy')}
                                            />
                                            Economy Class
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`seatClass_${flight._id}`}
                                                value="firstClass"
                                                onClick={() => handlePriceVisibility(flight._id, 'firstClass')}
                                            />
                                            First Class
                                        </label>
                                    </div>
                                    <div className="buy-price-container">
                                        <button type='submit' className="buy-button">Buy</button>
                                        <div className="price" id={`price_${flight._id}`}>
                                            Price: ${flight.flightDetails.business.price}
                                        </div>
                                    </div>
                                </p>
                            </li>
                        </form>
                    ))}
                </ul>
            ) : (
                <p className="no-flights">No flights found.</p>
            )}
        </div>
    );
}
