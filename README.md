# Gold Rate Dashboard

A real-time gold price tracking application for the Indian market. This dashboard fetches live gold rates from international markets, converts them to INR, and displays prices for 24K, 22K, and 18K gold with customizable markup adjustments.

## Features

- Real-time gold price updates from MetalpriceAPI
- Live USD to INR conversion via CurrencyFreaks
- Support for multiple gold purities (24K, 22K, 18K)
- Adjustable markup percentage for taxes and premiums
- Price calculations for common weights (1g, 8g, 10g, 100g)
- Modern, responsive UI with gradient design
- Smooth animations and interactive controls

## Tech Stack

**Frontend:**
- React 19
- Axios for API calls
- CSS3 with animations

**Backend:**
- Node.js with Express
- Axios for external API integration
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- API keys from:
  - [MetalpriceAPI](https://metalpriceapi.com/)
  - [CurrencyFreaks](https://currencyfreaks.com/)

## Quick Start

### 1. Clone the repository
```bash
git clone <repository-url>
cd gold-rate-dashboard
```

### 2. Configure API Keys

Create `.env` files in both backend and frontend directories:

**backend/.env**
```
METAL_API_KEY=your_metal_api_key
CURRENCY_API_KEY=your_currency_api_key
PORT=5000
```

**frontend/.env**
```
REACT_APP_BACKEND_URL=http://localhost:5000
```

### 3. Install Dependencies

Run the installation script:
```bash
install.bat
```

This will automatically install all required dependencies for both backend and frontend.

### 4. Start the Application

Launch both servers:
```bash
start.bat
```

This opens two terminal windows:
- Backend server on `http://localhost:5000`
- Frontend application on `http://localhost:3000`

The browser will open automatically with the dashboard.

## Manual Setup

If you prefer manual installation:

**Backend:**
```bash
cd backend
npm install
npm start
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## Project Structure

```
gold-rate-dashboard/
├── backend/
│   ├── index.js          # Express server & API logic
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.js        # Main React component
│   │   ├── App.css       # Styling
│   │   └── index.js
│   ├── package.json
│   └── .env
├── install.bat           # Dependency installer
└── start.bat            # Application launcher
```

## API Endpoints

### GET /api/goldrate

Fetches current gold rates with optional markup.

**Query Parameters:**
- `markup` (optional): Percentage markup (0-100), default: 12

**Response:**
```json
{
  "source": "MetalpriceAPI + CurrencyFreaks",
  "base_price_inr": "6234.50",
  "markup_percent": 12,
  "today": {
    "24K": "6982.64",
    "22K": "6400.75",
    "18K": "5236.98"
  }
}
```

## Usage

1. The dashboard loads with a default 12% markup (typical for Indian market)
2. Adjust the markup slider to see price changes in real-time
3. Click "Refresh Rates" to fetch the latest prices
4. View prices per gram and common weights for each gold purity

## Troubleshooting

**Port already in use:**
- Change PORT in `backend/.env`
- Update REACT_APP_BACKEND_URL in `frontend/.env`

**API errors:**
- Verify API keys are correct in `backend/.env`
- Check API rate limits on provider websites

**Dependencies fail to install:**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` folders and run `install.bat` again

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss proposed changes.
