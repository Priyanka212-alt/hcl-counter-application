
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let count = 0;

// Get counter value
app.get('/count', (req, res) => {
    res.json({ count });
});

// Increment counter
app.post('/increment', (req, res) => {
    count++;
    res.json({ count });
});

// Decrement counter
app.post('/decrement', (req, res) => {
    count--;
    res.json({ count });
});

// Reset counter
app.post('/reset', (req, res) => {
    count = 0;
    res.json({ count });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
