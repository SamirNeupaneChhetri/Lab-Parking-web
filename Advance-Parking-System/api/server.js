const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/AuthRoute.js'); // Ensure the path is correct
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware for parsing JSON requests
app.use(cors()); // Middleware for enabling CORS



app.use('/api/', authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
