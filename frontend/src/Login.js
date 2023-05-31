import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

import "./style.css"

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        {
          username: username,
          password: password,
        }
      );
      // Set the JWT token in the browser's cookie
      document.cookie = response.headers['set-cookie'];
      // Call onLogin function with true to update isLoggedIn state in App component
      onLogin(true);
      // Navigate to home page on successful login
      navigate('/home');
    } catch (error) {
      if (error.response.status === 401) {
        alert("Incorrect username or password!");
      } else {
        alert(error.message);
      }
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
          Don't have an account? <Link to={"/"}> Create your account</Link> it takes
          less than a minute
        </p>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
