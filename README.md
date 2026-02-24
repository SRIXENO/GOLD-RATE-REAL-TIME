# Gold Rate Dashboard

Full-stack app that fetches live gold prices, converts them to INR, applies a configurable markup, and displays 24K/22K/18K rates in a React dashboard.

## What This Project Does

- Backend API fetches:
  - XAU to USD rate from MetalpriceAPI
  - USD to INR rate from CurrencyFreaks
- Converts ounce price to gram price
- Applies a markup percentage (default 12%)
- Returns today rates for:
  - 24K
  - 22K (24K * 22/24)
  - 18K (24K * 18/24)
- Frontend shows:
  - Markup slider
  - Refresh button
  - Per-gram and 8g/10g/100g cards

## Tech Stack

- Frontend: React 19, Axios, Create React App
- Backend: Node.js, Express 5, Axios, CORS, dotenv
- Scripts: Windows `.bat` helper scripts

## Prerequisites

- Node.js 18+ recommended
- npm
- API keys:
  - `METAL_API_KEY` from MetalpriceAPI
  - `CURRENCY_API_KEY` from CurrencyFreaks

## Environment Variables

Create these files:

`backend/.env`

```env
METAL_API_KEY=your_key_here
CURRENCY_API_KEY=your_key_here
PORT=5000
```

`frontend/.env`

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

## Run Locally

1. Install dependencies (both apps):

```bat
install.bat
```

2. Start backend + frontend:

```bat
start.bat
```

3. Open:
  - Frontend: `http://localhost:3000`
  - Backend: `http://localhost:5000`

Manual run:

```bash
cd backend && npm install && npm start
cd frontend && npm install && npm start
```

## Backend API

### `GET /api/goldrate?markup=12`

Query params:
- `markup` number (0 to 100), optional, default `12`

Success response example:

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

Possible errors:
- `400` when markup is outside 0..100
- `500` when API keys are missing or upstream call fails

## Repository Analysis (File-by-File)

### Root

- `.gitignore`: ignores node modules, env files, build artifacts, logs, IDE files.
- `README.md`: project documentation (this file).
- `install.bat`: installs npm dependencies in `backend` and `frontend`.
- `start.bat`: opens two terminals and starts backend/frontend.
- `git-connect.bat`: adds remote, commits all files, pushes `main`.
- `git-update.bat`: `git add .`, asks for commit message, pushes.
- `git-info.bat`: prints remote, branch, and recent commits.
- `git-force-push.bat`: pulls with unrelated histories flag, then pushes.
- `folder structure.swift`: static text sketch of an intended structure; does not match actual current repo.

### Backend (`/backend`)

- `package.json`: Express server package with `start` and `dev` scripts.
- `index.js`: API server implementation:
  - loads env vars
  - exposes `/api/goldrate`
  - computes prices and returns 24K/22K/18K

### Frontend (`/frontend`)

- `package.json`: CRA app package; has `proxy` set to `http://localhost:5000`.
- `README.md`: default Create React App template docs.

#### Frontend Public

- `public/index.html`: CRA HTML shell.
- `public/manifest.json`: default web app manifest.
- `public/robots.txt`: default robots config.
- `public/favicon.ico`, `logo192.png`, `logo512.png`: default CRA assets.

#### Frontend Source

- `src/index.js`: React entry point.
- `src/index.css`: base global styles.
- `src/App.js`: main dashboard logic and UI:
  - state for `goldRate`, `loading`, `error`, `markup`
  - fetches `/api/goldrate`
  - renders cards and computed weights
- `src/App.css`: dashboard styles and animations.
- `src/App.test.js`: default CRA-style test (currently not aligned with current UI text).
- `src/reportWebVitals.js`: CRA performance helper.
- `src/setupTests.js`: Jest DOM setup.
- `src/logo.svg`: default CRA SVG logo (unused in current UI).

## Current Notes / Gaps

- `frontend/src/App.test.js` still expects "learn react" text and will fail unless updated.
- Frontend fetch uses `REACT_APP_BACKEND_URL`; ensure it is set in `frontend/.env`.
- `frontend/package.json` also has `proxy`, but current code uses absolute env-based URL.

## License

ISC (as currently declared in `backend/package.json`).