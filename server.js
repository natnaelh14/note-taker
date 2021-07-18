// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
const express = require('express');

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 5000;

const api = require('./routes/apiRoutes.js');
const html = require('./routes/htmlRoutes.js');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serves html and css files in public directory
app.use(express.static('./public'));

// ROUTER
// The below points our server to a series of "route" files.
app.use('/api', api);
app.use('/', html);

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
