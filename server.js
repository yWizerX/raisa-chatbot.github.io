const express = require('express');
const ChatterBot = require('chatterbot');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize ChatterBot
const bot = new ChatterBot();

// Endpoint to get a response from ChatterBot
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    bot.getResponse(userMessage)
        .then(response => {
            res.json({ reply: response });
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to get response' });
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});