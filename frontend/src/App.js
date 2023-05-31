import './App.css';
import { BrowserRouter, Routes ,Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import Protected from "./Protected";
import { useState } from "react";
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import axios from "axios";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const navigate = useNavigate();

  const logIn = () => {
    setisLoggedIn(true);
  };

  const logOut = async () => {
    try {
      // Send a post request to the signout endpoint
      await axios.post("http://localhost:8080/api/auth/signout");
      // Update the isLoggedIn state on successful logout
      setisLoggedIn(false);
      // Navigate to home page
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      {!isLoggedIn ? (
        <Link to="/login" style={{ padding: "10px", backgroundColor: "#023047", color: "white", borderRadius: "5px", textDecoration: "none" }}>Login</Link>
      ) : (
        <button onClick={logOut} style={{ padding: "10px", backgroundColor: "#023047", color: "white", borderRadius: "5px", textDecoration: "none" }}>Logout</button>
      )}
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route
          path="/login"
          element={<Login onLogin={logIn} />}
        ></Route>
        <Route
          path="/home"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Home />
            </Protected>
          }
        ></Route>
      </Routes>
    </div>
  );
}

function RouterWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RouterWrapper;
