import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/market.css";

// ✅ Images are inside public/ folder
// ✅ Use absolute paths starting with "/"
// ✅ Vite will automatically handle base path during build

const cropsData = {
  Fruits: [
    { id: 1, name: "Mango", image: "/mango.jpg" },
    { id: 2, name: "Apple", image: "/apple.webp" },
    { id: 3, name: "Banana", image: "/banana.jpg" },
    { id: 9, name: "Grapes", image: "/grapes.webp" },
    { id: 5, name: "Papaya", image: "/papaya.jpg" },
    { id: 6, name: "Pomegranate", image: "/pomegranate.webp" },
  ],
  Vegetables: [
    { id: 7, name: "Potato", image: "/potato.jpg" },
    { id: 8, name: "Tomato", image: "/tomato.jpg" },
    { id: 9, name: "Cabbage", image: "/cabbage.jpg" },
    { id: 10, name: "Cauliflower", image: "/cauliflower.jpg" },
    { id: 11, name: "Ladyfinger", image: "/ladyfinger.jpg" },
    { id: 12, name: "Onion", image: "/onion.webp" },
    { id: 13, name: "BottleGourd", image: "/bottlegourd.jpeg" },
  ],
  Cereals: [
    { id: 14, name: "Wheat", image: "/wheat.jpg" },
    { id: 15, name: "Rice", image: "/rice.jpg" },
    { id: 16, name: "Maize", image: "/maize.jpg" },
    { id: 17, name: "Bajra", image: "/bajra.jpg" },
    { id: 18, name: "Chana", image: "/chana.webp" },
    { id: 19, name: "Soyabean", image: "/soyabean.webp" },
    { id: 20, name: "Chawali", image: "/chawali.jpeg" },
    { id: 21, name: "Masoor", image: "/masoor.webp" },
    { id: 22, name: "Moong", image: "/moong.jpg" },
    { id: 23, name: "Mustard", image: "/mustard.png" },
    { id: 24, name: "Sesame", image: "/sesame.jpeg" },
    { id: 25, name: "Tur", image: "/tur.jpg" },
  ],
  "Other Crops": [
    { id: 26, name: "Cotton", image: "/Cotton.JPG" },
    { id: 27, name: "Groundnuts", image: "/groundnut.jpg" },
    { id: 28, name: "Sugarcane", image: "/Sugarcane.jpg" },
    { id: 29, name: "Sunflower", image: "/sunflower.jpg" },
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
