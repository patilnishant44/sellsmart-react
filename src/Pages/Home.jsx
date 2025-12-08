// src/pages/Home.jsx
import React from "react";
import "../assets/home.css"; // CSS for home page

const Home = () => {
  const isLoggedIn = !!localStorage.getItem("userEmail");

  return (
    <main className="home-container">
      {!isLoggedIn ? (
        <div className="welcome">
          <h1>Welcome to SellSmart</h1>
          <p>
            Your one-stop platform to view real-time crop prices in different wholesale markets. Sign up or login to get started!
          </p>
        </div>
      ) : (
        <div className="info-section">
          <h1>Welcome to  SellSmart</h1>
          <p>
            SellSmart helps farmers make informed decisions by showing real-time market prices for various crops across multiple states and cities. 
            Our goal is to help you maximize profit and save time.
          </p>
          
        </div>
      )}
    </main>
  );
};

export default Home;
