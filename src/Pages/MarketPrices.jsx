import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/market.css";

const cropsData = {
  Fruits: [
    { id: 1, name: "Mango", image: new URL("../assets/images/mango.jpg", import.meta.url).href },
    { id: 2, name: "Apple", image: new URL("../assets/images/apple.webp", import.meta.url).href },
    { id: 3, name: "Banana", image: new URL("../assets/images/banana.jpg", import.meta.url).href },
    { id: 4, name: "Grapes", image: new URL("../assets/images/grapes.webp", import.meta.url).href },
    { id: 5, name: "Papaya", image: new URL("../assets/images/papaya.jpg", import.meta.url).href },
    { id: 6, name: "Pomegranate", image: new URL("../assets/images/pomegranate.webp", import.meta.url).href },
  ],

  Vegetables: [
    { id: 7, name: "Potato", image: new URL("../assets/images/potato.jpg", import.meta.url).href },
    { id: 8, name: "Tomato", image: new URL("../assets/images/tomato.jpg", import.meta.url).href },
    { id: 9, name: "Cabbage", image: new URL("../assets/images/cabbage.jpg", import.meta.url).href },
    { id: 10, name: "Cauliflower", image: new URL("../assets/images/cauliflower.jpg", import.meta.url).href },
    { id: 11, name: "Ladyfinger", image: new URL("../assets/images/ladyfinger.jpg", import.meta.url).href },
    { id: 12, name: "Onion", image: new URL("../assets/images/onion.webp", import.meta.url).href },
    { id: 13, name: "BottleGourd", image: new URL("../assets/images/bottlegourd.jpeg", import.meta.url).href },
  ],

  Cereals: [
    { id: 14, name: "Wheat", image: new URL("../assets/images/wheat.jpg", import.meta.url).href },
    { id: 15, name: "Rice", image: new URL("../assets/images/rice.jpg", import.meta.url).href },
    { id: 16, name: "Maize", image: new URL("../assets/images/maize.jpg", import.meta.url).href },
    { id: 17, name: "Bajra", image: new URL("../assets/images/bajra.jpg", import.meta.url).href },
    { id: 18, name: "Chana", image: new URL("../assets/images/chana.webp", import.meta.url).href },
    { id: 19, name: "Soyabean", image: new URL("../assets/images/soyabean.webp", import.meta.url).href },
    { id: 20, name: "Chawali", image: new URL("../assets/images/chawali.jpeg", import.meta.url).href },
    { id: 21, name: "Masoor", image: new URL("../assets/images/masoor.webp", import.meta.url).href },
    { id: 22, name: "Moong", image: new URL("../assets/images/moong.jpg", import.meta.url).href },
    { id: 23, name: "Mustard", image: new URL("../assets/images/mustard.png", import.meta.url).href },
    { id: 24, name: "Sesame", image: new URL("../assets/images/sesame.jpeg", import.meta.url).href },
    { id: 25, name: "Tur", image: new URL("../assets/images/tur.jpg", import.meta.url).href },
  ],

  "Other Crops": [
    { id: 26, name: "Cotton", image: new URL("../assets/images/cotton.jpg", import.meta.url).href },
    { id: 27, name: "Groundnuts", image: new URL("../assets/images/groundnut.jpg", import.meta.url).href },
    { id: 28, name: "Sugarcane", image: new URL("../assets/images/sugarcane.jpg", import.meta.url).href },
    { id: 29, name: "Sunflower", image: new URL("../assets/images/sunflower.jpg", import.meta.url).href },
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
