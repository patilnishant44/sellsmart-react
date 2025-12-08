// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful ✅");
      navigate("/"); // Redirect to Home after login
    } else {
      alert("Wrong Email or Password ❌");
    }
  };

  return (
    <main className="main">
        <div className="parent">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button><br /><br />
      <p>
        Don't have an account? <span onClick={() => navigate("/signup")} className="link-text">Signup here</span>
      </p>
    </div>
    </main>
  );
};

export default Login;
