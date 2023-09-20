import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './searchflight.css'

export default function SearchFlight() {
    const [from, xfrom] = useState('')
    const [to, xto] = useState('')
    const [depart, xdepart] = useState('')
    const [retur, xretur] = useState('')
    const [adult, xadult] = useState(0)
    const [children, xchildren] = useState(0)
    const [travelClass, xtravelClass] = useState('')

    const navigate = useNavigate()

    const handleResultSubmit = async (e) => {
        e.preventDefault()
        
        navigate('/show-flight');
    }

    return (
        <div id="booking" className="section">
            <div className="booking-form">
                <form onSubmit={handleResultSubmit} id='form-search-flight'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <span className="form-label">Flying from</span>
                                <input className="form-control" type="text" value={from} onChange={(e) => xfrom(e.target.value)} placeholder="City or airport" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <span className="form-label">Flyning to</span>
                                <input className="form-control" type="text" value={to} onChange={(e) => xto(e.target.value)} placeholder="City or airport" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <span className="form-label">Departing</span>
                                <input className="form-control" type="date" value={depart} onChange={(e) => xdepart(e.target.value)} required />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <span className="form-label">Returning</span>
                                <input className="form-control" type="date" value={retur} onChange={(e) => xretur(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-2">
                            <div className="form-group">
                                <span className="form-label">Adults (18+)</span>
                                <input type="number" className='form-control' value={adult} onChange={(e) => xadult(e.target.value)} required />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <span className="form-label">Children (0-17)</span>
                                <input type='number' className="form-control" value={children} onChange={(e) => xchildren(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <span className="form-label">Travel class</span>
                                <select className="form-control" value={travelClass} onChange={(e) => xtravelClass(e.target.value)}>
                                    <option value="economy">Economy class</option>
                                    <option value="business">Business class</option>
                                    <option value="first">First class</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-btn">
                                <button className="submit-btn" type='submit'>Show flights</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
