import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import MarketPrices from "./Pages/MarketPrices.jsx";
import CropDetails from "./Pages/CropDetails.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import ProfitCalculator from "./Pages/ProfitCalculator.jsx";
import Profile  from "./Pages/Profile.jsx";   

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/market"element={<PrivateRoute><MarketPrices /></PrivateRoute>}/>
        <Route path="/crop/:cropName" element={<PrivateRoute><CropDetails /> </PrivateRoute>}/>
        <Route path="/calculator" element={<ProfitCalculator />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
