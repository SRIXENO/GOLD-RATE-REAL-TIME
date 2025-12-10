import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [goldRate, setGoldRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [markup, setMarkup] = useState(12);  // Default India markup

  const fetchGoldRate = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/goldrate?markup=${markup}`
      );
      setGoldRate(res.data.today);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGoldRate();
  }, [markup]);

  return (
    <div className="container">
      <h1 className="title">Gold Rate Dashboard (India)</h1>

      <div className="card">
        <label>Adjust Markup % (Tax + Jeweller Premium)</label>
        <input
          type="range"
          min="0"
          max="20"
          value={markup}
          onChange={(e) => setMarkup(e.target.value)}
        />
        <p>{markup}%</p>

        <button onClick={fetchGoldRate}>Refresh</button>
      </div>

      {loading ? (
        <p>Loading prices...</p>
      ) : goldRate ? (
        <div className="rates">
          <div className="rate-box">
            <h2>24 Karat</h2>
            <p>₹ {Number(goldRate["24K"]).toFixed(2)} / gram</p>
            <p>₹ {(goldRate["24K"] * 8).toFixed(2)} / 8g</p>
            <p>₹ {(goldRate["24K"] * 10).toFixed(2)} / 10g</p>
            <p>₹ {(goldRate["24K"] * 100).toFixed(2)} / 100g</p>
          </div>

          <div className="rate-box">
            <h2>22 Karat</h2>
            <p>₹ {Number(goldRate["22K"]).toFixed(2)} / gram</p>
            <p>₹ {(goldRate["22K"] * 8).toFixed(2)} / 8g</p>
            <p>₹ {(goldRate["22K"] * 10).toFixed(2)} / 10g</p>
            <p>₹ {(goldRate["22K"] * 100).toFixed(2)} / 100g</p>
          </div>

          <div className="rate-box">
            <h2>18 Karat</h2>
            <p>₹ {Number(goldRate["18K"]).toFixed(2)} / gram</p>
            <p>₹ {(goldRate["18K"] * 8).toFixed(2)} / 8g</p>
            <p>₹ {(goldRate["18K"] * 10).toFixed(2)} / 10g</p>
            <p>₹ {(goldRate["18K"] * 100).toFixed(2)} / 100g</p>
          </div>
        </div>
      ) : (
        <p>Error loading gold rates</p>
      )}
    </div>
  );
}

export default App;
