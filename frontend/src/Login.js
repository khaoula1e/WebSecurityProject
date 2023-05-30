import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

import "./style.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
        "http://localhost:8085/api/v1/employee/login",
        {
            email: email,
            password: password,
        }
        );
        console.log(response.data);
        if (response.data.message === "Email not exists") {
        alert("email doesn't exist");
        } else if (response.data.message === "Login Success") {
        navigate('/home');
        } else {
        alert("Incorrect Email and password doesn't match!!");
        }
    } catch (error) {
        alert(error.message);
    }
    };


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
