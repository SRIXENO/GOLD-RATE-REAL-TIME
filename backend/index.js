import express from "express";
import axios from "axios";
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const OUNCE_TO_GRAM = 31.1035;

app.get("/api/goldrate", async (req, res) => {
  try {
    const markup = Number(req.query.markup) || 12;
    
    if (markup < 0 || markup > 100) {
      return res.status(400).json({ error: "Markup must be between 0 and 100" });
    }

    if (!process.env.METAL_API_KEY || !process.env.CURRENCY_API_KEY) {
      return res.status(500).json({ error: "API keys not configured" });
    }

    const [xauResp, currResp] = await Promise.all([
      axios.get(`https://api.metalpriceapi.com/v1/latest?api_key=${process.env.METAL_API_KEY}&base=XAU&currencies=USD`),
      axios.get(`https://api.currencyfreaks.com/latest?apikey=${process.env.CURRENCY_API_KEY}&symbols=INR`)
    ]);

    const pricePerOunceUSD = xauResp.data.rates.USD;
    const pricePerGramUSD = pricePerOunceUSD / OUNCE_TO_GRAM;
    const usdToInr = parseFloat(currResp.data.rates.INR);
    const price24k = pricePerGramUSD * usdToInr;
    const price24kFinal = price24k * (1 + markup / 100);

    res.json({
      source: "MetalpriceAPI + CurrencyFreaks",
      base_price_inr: price24k.toFixed(2),
      markup_percent: markup,
      today: {
        "24K": price24kFinal.toFixed(2),
        "22K": (price24kFinal * 22 / 24).toFixed(2),
        "18K": (price24kFinal * 18 / 24).toFixed(2),
      },
    });
  } catch (err) {
    console.error("Error fetching gold rates:", err.message);
    res.status(500).json({ error: "Failed to fetch gold rates" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});