import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/market.css";

const cropsData = {
  Fruits: [
    { id: 1, name: "Mango", image: new URL("/mango.jpg", import.meta.url).href },
    { id: 2, name: "Apple", image: new URL("/apple.webp", import.meta.url).href },
    { id: 3, name: "Banana", image: new URL("/banana.jpg", import.meta.url).href },
    { id: 9, name: "Grapes", image: new URL("/grapes.webp", import.meta.url).href },
    { id: 5, name: "Papaya", image: new URL("/papaya.jpg", import.meta.url).href },
    { id: 6, name: "Pomegranate", image: new URL("/pomegranate.webp", import.meta.url).href },
  ],
  Vegetables: [
    { id: 7, name: "Potato", image: new URL("/potato.jpg", import.meta.url).href },
    { id: 8, name: "Tomato", image: new URL("/tomato.jpg", import.meta.url).href },
    { id: 9, name: "Cabbage", image: new URL("/cabbage.jpg", import.meta.url).href },
    { id: 10, name: "Cauliflower", image: new URL("/cauliflower.jpg", import.meta.url).href },
    { id: 11, name: "Ladyfinger", image: new URL("/ladyfinger.jpg", import.meta.url).href },
    { id: 12, name: "Onion", image: new URL("/onion.webp", import.meta.url).href },
  ],
};

const MarketPrices = () => {
  const navigate = useNavigate();

  return (
    <div className="market-page">
      <h1>Market Prices</h1>

      {Object.keys(cropsData).map((category) => (
        <div key={category} className="section">
          <h2 className="section-title">{category}</h2>

          <div className="crop-cards">
            {cropsData[category].map((crop) => (
              <div key={crop.id} className="crop-card">
                <img src={crop.image} alt={crop.name} />
                <h3>{crop.name}</h3>
                <button
                  className="view-btn"
                  onClick={() => navigate(`/crop/${crop.name}`)}
                >
                  View Prices
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketPrices;
