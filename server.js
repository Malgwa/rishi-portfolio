const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'pet_count.json');

// Middleware
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(express.static('.'));

// Global pet counter
let petCount = 0;

// Load counter from file on startup
function loadCounter() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            const parsed = JSON.parse(data);
            petCount = parsed.count || 0;
        }
    } catch (error) {
        console.error('Error loading counter:', error);
        petCount = 0;
    }
}

// Save counter to file
function saveCounter() {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify({ count: petCount }));
    } catch (error) {
        console.error('Error saving counter:', error);
    }
}

// Routes
// Get current pet count
app.get('/api/stats', (req, res) => {
    console.log(`📊 Serving current count: ${petCount}`);
    res.json({ count: petCount });
});

// Increment counter
app.post('/api/increment', (req, res) => {
    petCount++;
    saveCounter();
    
    console.log(`🐕 Oscar was petted! Total pets: ${petCount}`);
    
    res.json({ 
        count: petCount,
        message: 'Oscar loves the attention! 🐾'
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Oscar server is running!' });
});

// Start server
loadCounter();

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Current global count: ${petCount}`);
    console.log(`🌐 API endpoints:`);
    console.log(`   GET  /api/stats     - Get current count`);
    console.log(`   POST /api/increment - Increment counter`);
    console.log(`   GET  /api/health    - Health check`);
}); 