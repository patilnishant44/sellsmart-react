import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/profile.css";

const Profile = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get logged-in user info from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      // if not logged in, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear(); // remove all stored data
    alert("Logged out successfully ✅");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-card">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Username:</strong> {email ? email.split("@")[0] : ""}</p>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
