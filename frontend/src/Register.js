import React, { useState } from "react";
import styled from "styled-components";
import "./style.css";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      alert("User added successfully !!");
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
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
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
