// src/pages/ProfitCalculator.jsx
import React, { useState } from "react";
import "../assets/profit.css"; // CSS file for styling

const ProfitCalculator = () => {
  const [travelExpense, setTravelExpense] = useState("");
  const [marketRate, setMarketRate] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!travelExpense || !marketRate || !weight) {
      alert("Please fill all fields");
      return;
    }

    const revenue = marketRate * weight;   // Total selling revenue
    const profitOrLoss = revenue - travelExpense;

    if (profitOrLoss > 0) {
      setResult(`Profit: ₹ ${profitOrLoss}`);
    } else if (profitOrLoss < 0) {
      // instead of Math.abs, make it positive manually
      const lossValue = profitOrLoss * -1;
      setResult(`Loss: ₹ ${lossValue}`);
    } else {
      setResult("No Profit, No Loss");
    }
  };

  return (
    <main className="profit-container">
      <div className="calculator">
        <h1>Profit / Loss Estimation</h1>

        <div className="form-group">
          <label>Traveling Expense:</label>
          <input
            type="number"
            placeholder="in Rupees"
            value={travelExpense}
            onChange={(e) => setTravelExpense(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Market Rate per Quintal:</label>
          <input
            type="number"
            placeholder="in Rupees"
            value={marketRate}
            onChange={(e) => setMarketRate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Goods Weight:</label>
          <input
            type="number"
            placeholder="in Quintals"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button onClick={handleCalculate}>Calculate</button>

        {result && <div className="result">{result}</div>}
      </div>
    </main>
  );
};

export default ProfitCalculator;
