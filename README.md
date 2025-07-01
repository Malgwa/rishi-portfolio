# 🐕 Oscar's Pet Counter

A fun interactive widget for Rishi's portfolio featuring Oscar the White Spitz dog! Visitors can pet Oscar and contribute to a global pet counter.

## Features

- 🎯 **Interactive Pet Widget**: Click/tap to pet Oscar
- 🌍 **Global Counter**: All pets are counted globally across all visitors
- 💾 **Persistent Storage**: Pet count persists on the server
- 📱 **Mobile Friendly**: Works on all devices
- ✨ **Delightful Animations**: Heart particles, wagging animations, and milestone celebrations
- 🎉 **Milestone Celebrations**: Special messages for milestone pet counts (10, 25, 50, 100+)
- 🔄 **Fallback System**: Uses localStorage when server is unavailable

## Server Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   npm start
   ```

3. **Server will run on:**
   - Development: `http://localhost:3000`
   - Production: Port from `PORT` environment variable or 3000

### API Endpoints

- `GET /api/oscar/count` - Get current global pet count
- `POST /api/oscar/pet` - Pet Oscar (increments counter)
- `GET /api/health` - Health check

### Example API Usage

```javascript
// Get current pet count
const response = await fetch('/api/oscar/count');
const data = await response.json();
console.log(`Oscar has been petted ${data.count} times!`);

// Pet Oscar
const petResponse = await fetch('/api/oscar/pet', { method: 'POST' });
const petData = await petResponse.json();
console.log(`New count: ${petData.count}`);
```

## Deployment

### Local Development
```bash
npm run dev
```

### Production
1. Set the `PORT` environment variable
2. Run `npm start`

### File Structure
```
.
├── index.html          # Main portfolio page with Oscar widget
├── server.js           # Node.js Express server
├── package.json        # Dependencies and scripts
├── pet_count.json      # Auto-generated pet count storage
└── README.md          # This file
```

## How It Works

1. **Frontend**: The Oscar widget in `index.html` displays a cute SVG of Oscar
2. **Interaction**: When clicked, it calls the `/api/oscar/pet` endpoint
3. **Backend**: Node.js server increments the global counter and saves to file
4. **Persistence**: Counter persists in `pet_count.json` file
5. **Fallback**: If server is down, uses localStorage with sync when server returns

## Customization

### Server Port
```bash
PORT=8080 npm start
```

### CORS Configuration
The server allows all origins by default. For production, update the CORS settings in `server.js`:

```javascript
app.use(cors({
  origin: 'https://yourdomain.com'
}));
```

## Technologies Used

- **Frontend**: Vanilla JavaScript, CSS3 animations, SVG graphics
- **Backend**: Node.js, Express.js
- **Storage**: JSON file-based storage
- **Styling**: CSS Glass morphism effects, responsive design

## Contributing

Feel free to contribute improvements to Oscar's pet counter! Some ideas:
- Add sound effects
- More animation varieties
- Additional milestone rewards
- Database integration for high-scale deployments

---

Made with ❤️ for Oscar the White Spitz 🐕 