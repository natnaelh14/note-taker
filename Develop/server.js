const express = require('express');
// const session = require('express-session')
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/assets', 'index.html')));

app.get('/notes/', (req, res) => res.sendFile(path.join(__dirname, 'public/assets', 'notes.html')));


// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
