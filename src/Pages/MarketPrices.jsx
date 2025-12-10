import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/market.css";

// GitHub Pages / Vite safe base URL
const BASE = import.meta.env.BASE_URL;

// Data for crops grouped by categories
const cropsData = {
  Fruits: [
    { id: 1, name: "Mango", image: `${BASE}mango.jpg` },
    { id: 2, name: "Apple", image: `${BASE}apple.webp` },
    { id: 3, name: "Banana", image: `${BASE}banana.jpg` },
    { id: 9, name: "Grapes", image: `${BASE}grapes.webp` },
    { id: 4, name: "Mango", image: `${BASE}mango.jpg` },
    { id: 5, name: "Papaya", image: `${BASE}papaya.jpg` },
    { id: 6, name: "Pomegranate", image: `${BASE}pomegranate.webp` }
  ],
  Vegetables: [
    { id: 7, name: "Potato", image: `${BASE}potato.jpg` },
    { id: 8, name: "Tomato", image: `${BASE}tomato.jpg` },
    { id: 9, name: "Cabbage", image: `${BASE}cabbage.jpg` },
    { id: 10, name: "Cauliflower", image: `${BASE}cauliflower.jpg` },
    { id: 11, name: "Ladyfinger", image: `${BASE}ladyfinger.jpg` },
    { id: 12, name: "Onion", image: `${BASE}onion.webp` },
    { id: 13, name: "BottleGourd", image: `${BASE}bottlegourd.jpeg` }
  ],
  Cereals: [
    { id: 14, name: "Wheat", image: `${BASE}wheat.jpg` },
    { id: 15, name: "Rice", image: `${BASE}rice.jpg` },
    { id: 16, name: "Maize", image: `${BASE}maize.jpg` },
    { id: 17, name: "Bajra", image: `${BASE}bajra.jpg` },
    { id: 18, name: "Chana", image: `${BASE}chana.webp` },
    { id: 19, name: "Soyabean", image: `${BASE}soyabean.webp` },
    { id: 20, name: "Chawali", image: `${BASE}chawali.jpeg` },
    { id: 21, name: "Masoor", image: `${BASE}masoor.webp` },
    { id: 22, name: "Moong", image: `${BASE}moong.jpg` },
    { id: 23, name: "Mustard", image: `${BASE}mustard.png` },
    { id: 24, name: "Sesame", image: `${BASE}sesame.jpeg` },
    { id: 25, name: "Tur", image: `${BASE}tur.jpg` }
  ],
  "Other Crops": [
    { id: 26, name: "Cotton", image: `${BASE}Cotton.JPG` },
    { id: 27, name: "Groundnuts", image: `${BASE}groundnut.jpg` },
    { id: 28, name: "Sugarcane", image: `${BASE}Sugarcane.jpg` },
    { id: 29, name: "Sunflower", image: `${BASE}sunflower.jpg` }
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
