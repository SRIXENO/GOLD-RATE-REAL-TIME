# 🪙 Gold Rate Dashboard (India)

A full‑stack web application that displays **live gold prices (24K / 22K / 18K)** in INR using **global spot price**, currency conversion, and adjustable Indian retail markup.

Built with **React + Node.js**, deployed on **AWS (Amplify + Elastic Beanstalk)** with **CI/CD enabled via GitHub**.

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
- Axios
- Environment Variables (`.env`)
- AWS Amplify (Hosting + CI/CD)

### Backend
- Node.js
- Express
- Axios
- dotenv
- cors
- AWS Elastic Beanstalk

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
- AWS Account (Free Tier)
- GitHub Account

---

## 🔧 Backend Setup

### 1️⃣ Go to backend folder
``` bash
cd backend
```
---

### 2️⃣ Install dependencies
```bash
npm install
npm install cors
```
---

### 3️⃣ Create .env file
```bash
METAL_API_KEY=your_metalpriceapi_key
CURRENCY_API_KEY=your_currencyfreaks_key
PORT=5000
```
---

### 4️⃣ Start backend server
```bash
npm start
```
---

### 5️⃣ Test API
```bash
http://localhost:5000/api/goldrate
```

---

### 🎨 Frontend Setup

### 1️⃣ Go to frontend folder
```bash
cd frontend
```
---

### 2️⃣ Install dependencies
```bash
npm install
```
---

### 3️⃣ Create .env file
```bash
REACT_APP_BACKEND_URL=http://localhost:5000
```
---

### 4️⃣ Start frontend
```bash
npm start
```
---

### 5️⃣ Open app
```bash
http://localhost:3000
```
---
