import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/auth.css"; 

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      alert("Fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Signup successful ✅");
    navigate("/login");
  };

  return (
    <main className="main">
        <div className="parent" style={{ textAlign: "center", padding: "50px" }}>
      <h1>Signup</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
    </main>
  );
};

export default Signup;
