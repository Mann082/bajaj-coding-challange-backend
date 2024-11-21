
const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhlRoutes');
const cors = require("cors");

require('dotenv').config();

const app = express();
const port = 3000;


app.use(cors());

// Middleware
app.use(bodyParser.json({ limit: '10mb' }));

// Routes
app.use('/bfhl', bfhlRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
