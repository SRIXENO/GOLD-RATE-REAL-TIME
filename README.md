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

## 🔧 Backend Setup (Local)

### 1️⃣ Go to backend folder
bash
cd backend
