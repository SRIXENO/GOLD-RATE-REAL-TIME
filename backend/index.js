import express from "express";
import axios from "axios";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 5000;
app.use(cors());

// conversion helpers
const OUNCE_TO_GRAM = 31.1035;

app.get("/api/goldrate", async (req, res) => {
  try {
    const metalApi = `https://api.metalpriceapi.com/v1/latest?api_key=${process.env.METAL_API_KEY}&base=XAU&currencies=USD`;
    const currencyApi = `https://api.currencyfreaks.com/latest?apikey=${process.env.CURRENCY_API_KEY}&symbols=INR`;

    // 1. Get gold spot price (XAU → USD)
    const xauResp = await axios.get(metalApi);
    const pricePerOunceUSD = xauResp.data.rates.USD;

    // Convert ounce → gram
    const pricePerGramUSD = pricePerOunceUSD / OUNCE_TO_GRAM;

    // 2. Get USD → INR
    const currResp = await axios.get(currencyApi);
    const usdToInr = currResp.data.rates.INR;

    // Price of gold per gram in INR (24K)
    const price24k = pricePerGramUSD * usdToInr;

    // Apply markup (default 12% total tax/premium)
    const markupPercent = Number(req.query.markup || 12);
    const price24kFinal = price24k * (1 + markupPercent / 100);

    // Convert purity
    const price22k = price24kFinal * (22 / 24);
    const price18k = price24kFinal * (18 / 24);

    res.json({
      source: "MetalpriceAPI + CurrencyFreaks",
      base_price_inr: price24k.toFixed(2),
      markup_percent: markupPercent,
      today: {
        "24K": price24kFinal.toFixed(2),
        "22K": price22k.toFixed(2),
        "18K": price18k.toFixed(2),
      },
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});