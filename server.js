//Express App
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/spartan.jpg', (req,res) => {
    res.sendFile(path.join(__dirname, "spartan.jpg"));
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
