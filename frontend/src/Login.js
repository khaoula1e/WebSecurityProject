import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

import "./style.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        const credentials = {
            email,
            password
        };
    
        axios.post('/auth/login', credentials)
        .then(response => {
            // Handle successful login
            console.log('Login successful!');
            console.log('Response:', response);
            navigate('/'); // Redirect to dashboard on successful login
        })
        .catch(error => {
            // Handle login error
            console.error('Login error:', error);
        });
    }

    return (
        <div className="box-form">
            <div className="left">
                <div className="overlay">
                    <h1>Welcome back </h1>
                    <p>
                        Please log in to access your account and start exploring our exciting features.
                    </p>
                </div>
            </div>

            <div className="right">
                <h5>Login</h5>
                <p>
                    Don't have an account? <Link to={"/register"}> Create your account</Link> it takes
                    less than a minute
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <br />
                    <br />

                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
