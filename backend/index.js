const express = require('express');
const app = express();
const route = require('./routes/auth');
const dbConnect = require('./config/database');

require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(route);

app.get('/', (req,res) => {
    res.end("Home");
})

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})
dbConnect();