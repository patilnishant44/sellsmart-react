import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/market.css";

const CropCard = ({ crop }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/crop/${crop.id}`); // navigate to CropDetail page
  };

  return (
    <div className="crop-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={crop.image} alt={crop.name} />
      <h3>{crop.name}</h3>
      <p>Price: ₹{crop.price} / kg</p>
      <p>Region: {crop.region}</p>
    </div>
  );
};

export default CropCard;
