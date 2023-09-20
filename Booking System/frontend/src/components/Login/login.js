import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

export default function Login() {
    const [email, xemail] = useState('');
    const [password, xpassword] = useState('');

    const navigate = useNavigate()

    const handleLoginSubmit = async(e) => {
        e.preventDefault()

        let loginResult = await fetch('http://localhost:5000/UserDetails', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await loginResult.json()

        navigate('/search-flight');
    }

    return (
        <div id="login" className="login">
            <div className="login-form">
                <form>
                    <div className="login-row">
                        <div className="login-form-group">
                            <span className="login-form-label">Email</span>
                            <input className="login-form-control" type="email" value={email} onChange={(e) => xemail(e.target.value)} placeholder="Enter email" required />
                        </div>
                    </div>
                    <div className="login-row">
                        <div className="login-form-group">
                            <span className="login-form-label">Password</span>
                            <input className="login-form-control" type="password" value={password} onChange={(e) => xpassword(e.target.value)} placeholder='Enter Password' required />
                        </div>
                    </div>
                    <div className='login-row'>
                        <div className="login-form-group">
                            <div className="form-btn">
                                <button className="submit-btn" onClick={handleLoginSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
