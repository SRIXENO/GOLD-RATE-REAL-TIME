import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [goldRate, setGoldRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [markup, setMarkup] = useState(12);

  const fetchGoldRate = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/goldrate?markup=${markup}`
      );
      setGoldRate(res.data.today);
    } catch (err) {
      setError("Failed to fetch gold rates. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoldRate();
  }, [markup]);

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="gold-icon">💰</div>
          <h1 className="title">Gold Rate Dashboard</h1>
          <p className="subtitle">Live Gold Prices in India</p>
        </div>

        <div className="control-card">
          <div className="control-header">
            <label>Markup Adjustment</label>
            <span className="markup-value">{markup}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            value={markup}
            onChange={(e) => setMarkup(e.target.value)}
            className="slider"
          />
          <div className="slider-labels">
            <span>0%</span>
            <span>20%</span>
          </div>
          <button onClick={fetchGoldRate} className="refresh-btn">
            🔄 Refresh Rates
          </button>
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading prices...</p>
          </div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : goldRate ? (
          <div className="rates-grid">
            <div className="rate-card gold-24k">
              <div className="karat-badge">24K</div>
              <h2>24 Karat</h2>
              <div className="price-main">₹{Number(goldRate["24K"]).toFixed(2)}</div>
              <p className="price-label">per gram</p>
              <div className="price-list">
                <div className="price-item">
                  <span>8g</span>
                  <span>₹{(goldRate["24K"] * 8).toFixed(2)}</span>
                </div>
                <div className="price-item">
                  <span>10g</span>
                  <span>₹{(goldRate["24K"] * 10).toFixed(2)}</span>
                </div>
                <div className="price-item">
                  <span>100g</span>
                  <span>₹{(goldRate["24K"] * 100).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="rate-card gold-22k">
              <div className="karat-badge">22K</div>
              <h2>22 Karat</h2>
              <div className="price-main">₹{Number(goldRate["22K"]).toFixed(2)}</div>
              <p className="price-label">per gram</p>
              <div className="price-list">
                <div className="price-item">
                  <span>8g</span>
                  <span>₹{(goldRate["22K"] * 8).toFixed(2)}</span>
                </div>
                <div className="price-item">
                  <span>10g</span>
                  <span>₹{(goldRate["22K"] * 10).toFixed(2)}</span>
                </div>
                <div className="price-item">
                  <span>100g</span>
                  <span>₹{(goldRate["22K"] * 100).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="rate-card gold-18k">
              <div className="karat-badge">18K</div>
              <h2>18 Karat</h2>
              <div className="price-main">₹{Number(goldRate["18K"]).toFixed(2)}</div>
              <p className="price-label">per gram</p>
              <div className="price-list">
                <div className="price-item">
                  <span>8g</span>
                  <span>₹{(goldRate["18K"] * 8).toFixed(2)}</span>
                </div>
                <div className="price-item">
                  <span>10g</span>
                  <span>₹{(goldRate["18K"] * 10).toFixed(2)}</span>
                </div>
                <div className="price-item">
                  <span>100g</span>
                  <span>₹{(goldRate["18K"] * 100).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <footer className="footer">
          <p>Data updated in real-time • Tax & Premium: {markup}%</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
