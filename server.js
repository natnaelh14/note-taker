const express = require('express');
// const session = require('express-session')

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
