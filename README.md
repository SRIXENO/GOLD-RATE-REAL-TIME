# 🪙 Gold Rate Dashboard (India)

A full‑stack web application that displays **live gold prices (24K / 22K / 18K)** in INR using **global spot price**, currency conversion, and adjustable Indian retail markup.

Built with **React + Node.js**, deployed on Local machine**.

---

## 🌐 Live Features

- ✅ Live global gold spot price (XAU)
- ✅ USD → INR currency conversion
- ✅ 24K, 22K, 18K rates
- ✅ Per gram, 8g, 10g, 100g prices
- ✅ Adjustable markup (tax + jeweller premium)
- ✅ Environment variable based API security
- ✅ Automatic CI/CD on every git push

---

## 🏗 Tech Stack

### Frontend
- React (Create React App)
- Environment Variables (`.env`)
- AWS Amplify (Hosting + CI/CD)

### Backend
- Node.js
- Express
- Axios
- dotenv
- cors

### APIs Used
- **MetalpriceAPI** – Gold spot price
- **CurrencyFreaks** – USD → INR conversion

---

---

## ✅ Prerequisites

Install the following on your system:

- **Node.js** (v18+ recommended)
- **npm**
- **Git**
- GitHub Account

---
---

### Create .env file
- Use your Metal Api and Currency api
```bash
METAL_API_KEY=your_metalpriceapi_key   #metalpriceapi.com
CURRENCY_API_KEY=your_currencyfreaks_key #currencyfreaks.com
PORT=5000
```
---
