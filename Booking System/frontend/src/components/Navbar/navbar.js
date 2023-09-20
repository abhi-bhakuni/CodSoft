import React from 'react'
import './navbar.css'
import Login from '../Login/login.js'

export default function Navbar() {

    return (
        <>
            <ul className="nav-content" id="nav-content">
                <li className="nav-item">
                    <button className="nav-link" id="nav-link" type="button">Login/Sign Up</button>
                </li>
            </ul>
            <Login />
        </>
    )
}
