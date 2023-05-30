import React, { useState } from "react";
import styled from "styled-components";
import "./style.css";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
        

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const user = {
      firstName,
      lastName,
      email,
      password
    };
    
    axios.post('/auth/register', user)
      .then(response => {
        // Handle successful registration
      })
      .catch(error => {
        // Handle registration error
      });
    };
 

  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Join us Today</h1>
          <p>Create your account and start exploring our exciting features.</p>
        </div>
      </div>

      <div className="right">
        <h5>Register</h5>
        <p>
          Already have an account? <Link to={"/login"}> Login</Link>
        </p>
        <div className="inputs">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />
        <br />

        <br />
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
};

export default Register;
