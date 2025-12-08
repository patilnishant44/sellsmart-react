import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>SellSmart</h2>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/market">Market Prices</Link>
        </li>

        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/calculator">Profit Calculator</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
